import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../actions/actionUser.js";
import { useNavigate } from "react-router-dom";
import { loadPrePago } from "../actions/actionMercadoPago.js";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const Navigate = useNavigate();
  const cart = useSelector((state) => state.firstRed.cart)

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

  const [items, setItems] = useState([]);

    // const order = useSelector((state) => state.firstRed.order)
    const order = JSON.parse(window.localStorage.getItem('order'))
    const user = useSelector((state) => state.secondRed.userData)
    const userFull = JSON.parse(window.localStorage.getItem('usuario'))
    console.log('apellido', userFull.lastName)
    const dispatch = useDispatch()
    const [payer, setPayer] = useState(
        {
            name:'',
            surname:'',
            email:'',
            phone:{
                area_code: '',
                number:'',
            },
            identification:{
                type:'',
                number:''
            },
            address:{
                street_name:'',
                street_number:'',
                zip_code:''
            }
        }
    );
    
    var todojunto = {
        items:items,
        payer:{
            name:userFull.name,
            surname:userFull.lastName,
            email:userFull.email,
            phone:{
                area_code: payer.phone.area_code,
                number:parseInt(payer.phone.number),
            },
            identification:{
                type:payer.identification.type,
                number:payer.identification.number
            },
            address:{
                street_name:payer.address.street_name,
                street_number:parseInt(payer.address.street_number),
                zip_code:payer.address.zip_code
            }
        }
    }
    console.log('TODO',todojunto)
    
    
    
    var item = [];
    const createItem = (order)=>{
        
         order[0]?.carrito.map(e=>item.push(
            {
            id:`${e.id}`,
            title: e.name,
            currency_id: "ARS",
            description: 'aqui iria una descrición',
            category_id: `${e.idCategory}`,
            quantity: e.quantity,
            unit_price: e.price
            }))
            return item
    }
    

  useEffect(() => {
    createItem(order);
    setItems(...items, item);
    dispatch(getUserId(user.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadPrePago(todojunto));
    Navigate("/mercadopago/compra");
    setPayer({
      phone: {
        area_code: "",
        number: "",
      },
      identification: {
        type: "",
        number: "",
      },
      address: {
        street_name: "",
        street_number: "",
        zip_code: "",
      },
    });
  };

  const handleChangePhone = (e) => {
    setPayer((prev) => ({
      ...prev,
      phone: { ...prev.phone, [e.target.name]: e.target.value },
    }));
  };

  const handleChangeDni = (e) => {
    setPayer((prev) => ({
      ...prev,
      identification: {
        ...prev.identification,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleChangeAddress = (e) => {
    setPayer((prev) => ({
      ...prev,
      address: { ...prev.address, [e.target.name]: e.target.value },
    }));
  };

  return (
    <div>
      <div className="row">
        {/* PRUEBAAAA */}
        <div className="col-lg-3">
          <div
            className="container-sm d-flex justify-content-center"
            style={{ padding: 20, paddingTop: 0 }}
          >
            <div
              className="badge fs-3 bg-dark text-wrap"
              style={{ width: "20rem" }}
            >
              Proceso de Compra
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
              <div className="card-header">Info de Usuario</div>
              <div className="card-body">
                <p className="card-text">
                  <li className="list-unstyled">
                    <h5>Nombre:</h5>
                    <h6>{userFull.name}</h6>
                    <hr className="my-2" />
                    <h5>Apellido:</h5>
                    <h6>{userFull.lastName}</h6>
                    <hr className="my-2" />
                    <h5>Email:</h5>
                    <h6>{userFull.email}</h6>
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" card col-lg-8" style={{ paddingTop: 15, paddingBottom: 15 }}>
          <div className=" card col-lg-12">
            <div className="container mt-0 mb-1 mx-1">
              <main>
                <div className="py-0 text-center">
                  <img
                    className="d-block mx-auto mb-4"
                    src="https://i.postimg.cc/WznK6qfm/igroup-log.png"
                    alt=""
                    width={300}
                    height={150}
                  />
                  <h2>Compra Rápida</h2>
                  <p className="lead">
                    Completa los siguientes campos para realizar tu pedido
                  </p>
                </div>
                <div className="row g-3">
                  <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Tu Carrito</span>
                      <span className="badge bg-secondary rounded-pill">{cart.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                      {order[0]?.carrito.map((e) => (
                        <li className="list-group-item d-flex justify-content-between lh-sm">
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
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total ($ ARG)</span>
                        <strong>${formato.format(total)}</strong>
                      </li>
                    </ul>
                    <form className="card p-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Promo code"
                        />
                        <button type="submit" className="btn btn-secondary">
                          Redeem
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Información de envío</h4>
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="needs-validation"
                      noValidate=""
                    >
                      <div className="row g-3">
                        <div className="col-sm-4">
                          <label htmlFor="firstName" className="form-label">
                            Tipo de Documento
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="DNI/RUC/PASAPORTE"
                            defaultValue=""
                            required=""
                            value={payer.identification.type}
                            name="type"
                            onChange={(e) => handleChangeDni(e)}
                          />
                          <div className="invalid-feedback">
                            Tipo de documento requerido.
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="lastName" className="form-label">
                            Nº de Documento
                          </label>
                          <input
                            type="integer"
                            className="form-control"
                            placeholder="12345678"
                            defaultValue=""
                            required=""
                            value={payer.identification.number}
                            name="number"
                            onChange={(e) => handleChangeDni(e)}
                          />
                          <div className="invalid-feedback">
                            Número requerido.
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <label htmlFor="firstName" className="form-label">
                            Código de Área
                          </label>
                          <input
                            type="integer"
                            className="form-control"
                            placeholder="0387"
                            defaultValue=""
                            required=""
                            value={payer.phone.area_code}
                            name="area_code"
                            onChange={(e) => handleChangePhone(e)}
                          />
                          <div className="invalid-feedback">
                            Código de área requerido.
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="lastName" className="form-label">
                            Nº de Celular
                          </label>
                          <input
                            type="integer"
                            className="form-control"
                            placeholder="12345678"
                            defaultValue=""
                            required=""
                            value={payer.phone.number}
                            name="number"
                            onChange={(e) => handleChangePhone(e)}
                          />
                          <div className="invalid-feedback">
                            Número requerido.
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="address" className="form-label">
                            Calle
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Calle 1234"
                            required=""
                            value={payer.address.street_name}
                            name="street_name"
                            onChange={(e) => handleChangeAddress(e)}
                          />
                          <div className="invalid-feedback">
                            Calle requerida.
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <label htmlFor="lastName" className="form-label">
                            Número
                          </label>
                          <input
                            type="integer"
                            className="form-control"
                            placeholder="12345678"
                            defaultValue=""
                            required=""
                            value={payer.address.street_number}
                            name="street_number"
                            onChange={(e) => handleChangeAddress(e)}
                          />
                          <div className="invalid-feedback">
                            Número de calle requerido.
                          </div>
                        </div>
                        <div className="col-md-5">
                          <label htmlFor="country" className="form-label">
                            País
                          </label>
                          <select
                            className="form-select"
                            id="country"
                            required=""
                          >
                            <option value="">Seleccionar...</option>
                            <option>Argentina</option>
                          </select>
                          <div className="invalid-feedback">
                            Seleccione un País válido.
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label">
                            Provincia
                          </label>
                          <select
                            className="form-select"
                            id="state"
                            required=""
                          >
                            <option value="">Seleccionar...</option>
                            <option>Buenos Aires</option>
                            <option>Catamarca</option>
                            <option>Chaco</option>
                            <option>Chubut</option>
                            <option>Córdoba</option>
                            <option>Corrientes</option>
                            <option>Entre Ríos</option>
                            <option>Formosa</option>
                            <option>Jujuy</option>
                            <option>La Pampa</option>
                            <option>La Rioja</option>
                            <option>Mendoza</option>
                            <option>Misiones</option>
                            <option>Neuquén</option>
                            <option>Río Negro</option>
                            <option>Salta</option>
                            <option>San Juan</option>
                            <option>San Luis</option>
                            <option>Santa Cruz</option>
                            <option>Santa Fe</option>
                            <option>Santiago del Estero</option>
                            <option>Tierra del Fuego</option>
                            <option>Tucumán</option>
                          </select>
                          <div className="invalid-feedback">
                            Seleccione una Província válida.
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="zip" className="form-label">
                            C.P
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="AR1234"
                            required=""
                            value={payer.address.zip_code}
                            name="zip_code"
                            onChange={(e) => handleChangeAddress(e)}
                          />
                          <div className="invalid-feedback">
                            Código postal requerido .
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="same-address"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="same-address"
                        >
                          La dirección de envío es la misma que la dirección de
                          facturación
                        </label>
                      </div>
                      <hr className="my-4" />
                      <button
                        className="w-100 btn btn-primary btn-lg"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Continuar con el Pago
                      </button>
                    </form>
                  </div>
                </div>
              </main>
              <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017–2021 iGroup-6</p>
              </footer>
            </div>

            {/* PRUEBAAAA */}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CheckOut;
