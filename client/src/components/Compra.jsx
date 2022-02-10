// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { pagar } from "../actions/actionMercadoPago";
// import { Link } from "react-router-dom";


export default function Boton () {
    // const compra = useSelector((state) => state.fifthRed.compra);
    const order = JSON.parse(window.localStorage.getItem("order"));
    const compra = JSON.parse(window.localStorage.getItem('todojunto'))
    const url = useSelector((state) => state.fifthRed.url);
    const cart = useSelector((state) => state.firstRed.cart);
    const dispatch = useDispatch();
    const [button, setButton] = useState(false)
    // console.log('uuu',compra)

    const [ preference, setPreference] = useState({
        items:compra.items,
        payer:compra.payer,
        back_urls:{
				success: `https://front-ecommerce-xi.vercel.app/mercadopago/aceptado`,
				failure: "/mercadopago/rechazado",
				pending: "/mercadopago/rechazado"
		},
		auto_return:"approved",
        //notification_url:'https://ecommerce-igroup-6.herokuapp.com/mercadopago/callreception'
    })

    // useEffect(()=>{
    //     console.log('AHORA SI?',url)
    // },[url])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(pagar(preference))
        setButton(true)
    }


    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })
    let total = 0;
    let totalQuantity = 0
    cart.length > 0 && cart.map((e) => {
        total = total + (e.price * e.quantity);
        totalQuantity = Number(totalQuantity) + Number(e.quantity)
    })

    return (
        <div>
            <div className="row">
                <div className="col-lg-3">
                    <div
                    className="container-sm d-flex justify-content-center"
                    style={{ padding: 20, paddingTop: 30 }}
                    >
                        <div
                        className="badge fs-5 bg-info text-wrap"
                        style={{ width: "15rem" }}
                        >
                            Datos del Comprador
                        </div>
                    </div>
                    <div
                    className="d-flex justify-content-center"
                    style={{ paddingTop: 0 }}
                    >
                        <div
                        className=" card text-dark bg-light mb-3"
                        style={{ maxWidth: "19rem" }}
                        >
                            <div className="d-flex justify-content-center card-header"><i class="fas fa-user-check"></i></div>
                            <div className="card-body">
                                <span className="card-text">
                                    <li className="list-unstyled">
                                        <h5>Nombre:</h5>
                                        <h6>{preference.payer.name}</h6>
                                        <hr className="my-2" />
                                        <h5>Apellido:</h5>
                                        <h6>{preference.payer.lastName}</h6>
                                        <hr className="my-2" />
                                        <h5>Email:</h5>
                                        <h6>{preference.payer.email}</h6>
                                    </li>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                    className="container-sm d-flex justify-content-center"
                    style={{ padding: 20, paddingTop: 30  }}
                    >
                        <div
                        className="badge fs-5 bg-info text-wrap"
                        style={{ width: "15rem" }}
                        >
                            Domicilio de Entrega
                        </div>
                    </div>
                    <div
                    className="d-flex justify-content-center"
                    style={{ paddingTop: 0 }}
                    >
                        <div
                        className="card text-dark bg-light mb-3"
                        style={{ maxWidth: "19rem" }}
                        >
                            <div className="d-flex justify-content-center card-header"><i class="fas fa-home"></i></div>
                            <div className="card-body">
                                <span className="card-text">
                                    <li className="list-unstyled">
                                        <h5>Calle:</h5>
                                        <h6>{preference.payer.address.street_name}</h6>
                                        <hr className="my-2" />
                                        <h5>Número:</h5>
                                        <h6>{preference.payer.address.street_number}</h6>
                                        <hr className="my-2" />
                                        <h5>Código Postal:</h5>
                                        <h6>{preference.payer.address.zip_code}</h6>
                                    </li>
                                </span>
                            </div>
                        </div>
                    </div>






                </div>
                <div className="col-lg-8">
                    <div className="container-sm d-flex justify-content-center"
                    style={{ padding: 15, paddingTop: 30 }}
                    >
                     <div className=" card col-lg-10">
                     <div className="d-flex justify-content-center container mt-3 mb-1 mx-1">


                        <div
                        className="badge fs-5 bg-info text-wrap"
                        style={{ width: "15rem" }}
                        >
                            Resumen de Carrito
                        </div>
                    </div>
                    <div
                    className="d-flex justify-content-center"
                    style={{ paddingTop: 30 }}
                    >
                <div className="row g-3">
                  <div className="col-md-5 col-lg-12 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-4">
                      <span className="text-muted"><i class="fas fa-shopping-cart"></i></span>
                      <span className="badge bg-secondary rounded-pill">{cart.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                      {order[0]?.carrito.map((e) => (
                        <li className="list-group-item d-flex justify-content-between lh-sm" key={e.id}>
                          <div>
                            <h6 className="my-0">{e.name}</h6>
                            <small className="text-muted">
                              {e.idCategory === 1
                                ? "iPhone"
                                : e.idCategory === 2 
                                ? "iPad"
                                : e.idCategory === 3
                                ? "Watch"
                                : e.idCategory === 4
                                ? "Airpods"
                                : e.idCategory === 5
                                ? "Mac"
                                : e.idCategory === 6
                                ? "TV & Home"
                                : "Nueva Categoria"}
                            </small>
                            <br />
                            <small className="text-muted">ID:{e.id}</small>
                          </div>
                          <span className="text-muted">${formato.format(e.price)}</span>
                        </li>
                      ))}
                      <li className="list-group-item mb-5 d-flex justify-content-between">
                        <span>Total: (ARG)</span>
                        <strong>${formato.format(total)}</strong>
                      </li>
                    </ul>
                    </div>
                    </div>
            </div>
            {button === false && url.length === 0 ? 
            <button className="btn btn-lg btn-success" onClick={(e) => handleClick(e)} >Click para pagar con Mercado Pago</button>
            :
            <button className="btn btn-lg btn-primary text-white"><a className="text-white" style={{ textDecoration: "none", color: "white" }} href={url}>CONFIRMAR PAGO</a></button>}
            </div>
                </div>
                </div>
                </div>
        </div>
    )
};
