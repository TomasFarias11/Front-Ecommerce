import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { Link, useNavigate} from "react-router-dom";
import { getOrderUserId2, editOrder2} from "../actions/actionOrder";
import Swal from 'sweetalert2'


export default function DetailsOrden() {


    const {id, idOrder}=useParams();
    const navigate = useNavigate();
    const orderId = useSelector((state) => state.sixRed.orderId);
    let maps = orderId.filter((e) => Number(e.id) === Number(idOrder))
    const ordenStore=window.localStorage.setItem("orderId", JSON.stringify(maps))
    const dispatch = useDispatch()
    const order=JSON.parse(window.localStorage.getItem("orderId"))
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })

    let total = 0;
    let totalQuantity = 0
    order[0] && order[0].carrito.map((e) => {
        total = total + (e.price * e.quantity);
        totalQuantity = Number(totalQuantity) + Number(e.quantity)
    })

    useEffect(() => {
        dispatch(getOrderUserId2(id));
    }, [])
  
    const handleEdit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: '¿Cancelar?',
            text: "¿Estas seguro que deseas cancelar la Orden?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(editOrder2(id,{[e.target.name]:e.target.value}))
                    Swal.fire(
                    'Cancelada',
                    'La orden ha sido cancelada.',
                    'success'
                    )
                    navigate("/order");
                }
            }) 
    }



  return (
<div className="container" >
    <div className="row gutters" style={{margin: "40px 0"}}>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"  >
            <div className="card" style={{padding: 30}}>
                <div className="card-body p-0">
                    <div className="invoice-container">
                        <div className="invoice-header">
                            
                            <div className="row gutters">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <h4>iGroup-6</h4>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <address className="text-right">
                                        <span>Nombre: {order[0] && order[0].user.name}</span>
                                            <br/>
                                        <span>Email: {order[0] && order[0].user.email}</span>
                                        <br/>
                                    </address>
                                </div>
                            </div>
                            
                            <div className="row gutters">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="invoice-details">
                                        <div className="invoice-num">
                                            <div>Orden - # {order[0] && order[0].id}</div>
                                            <div>Fecha y hora de creación: {order[0] && order[0].createdAt}</div>
                                        </div>
                                    </div>                                                  
                                </div>
                            </div>
                            
                        </div>
    
                        <div className="invoice-body">
                            <div className="row gutters">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table custom-table m-0">
                                            <thead>
                                                <tr>
                                                    <th>Usuario</th>
                                                    <th>Productos</th>
                                                    <th>Cantidad</th>
                                                    <th>Sub Total</th>
                                                    <th>Estado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order[0] && order[0].carrito.map(e=> 
                                                <tr key={e.id}>
                                                    <td>{order[0] && order[0].userId}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.quantity}</td>
                                                    <td>${formato.format(e.quantity * e.price)}</td>
                                                    <td>{order[0] && order[0].status}</td>
                                                </tr>
                                                )}
                                                
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td colSpan="2">
                                                        <h5 className="text-success"><strong>Total</strong></h5>
                                                    </td>           
                                                    <td>
                                                        <p>
                                                            ${formato.format(total)}
                                                        </p>
                                                    </td>
                                                    {order[0] && order[0].status==="open" ? 
                                                    <td>
                                                        <button className="btn btn-danger" name="status" value="cancelled" onClick = {(e) => handleEdit(e)}>Cancelar</button>
                                                    </td> : null }
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="invoice-footer">
                            <Link to="/order">
                                 <button className="btn btn-primary">Regresar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}