import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getOrder, getOrderUserId, orderAsc, orderDesc } from "../../actions/actionOrder.js";
import swal from "sweetalert";
import Swal from "sweetalert2";



function Orders (){
    const ordersTotal = useSelector((state) => state.sixRed.order);
    const dispatch = useDispatch()
    console.log(ordersTotal, "orders total")
    // const allOrders = useSelector((state) => state.firstProducts.order);
    // const dispatch = useDispatch();
    // console.log(allOrders, "estan son las ordenes")

    useEffect(() => {
        dispatch(getOrder());
        // dispatch(getOrderUserId(id))
    }, [])

    const handleClickAsc = (e) => {
        e.preventDefault();
        dispatch(orderAsc())
  
    }

    const handleClickDesc = (e) => {
        e.preventDefault();
        dispatch(orderDesc())
  
    }


    


    return(
        <div>
            
            
    <div className="row">
        <div className="col-lg-3">
            <div className="container-sm d-flex justify-content-center" style={{ padding:20, paddingTop:0 }}> 
                <div className="badge fs-3 bg-dark text-wrap" style={{ width: "20rem" }}>
                    Administración de Ordenes
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{ paddingTop:0, paddingBottom:10 } } >
                
                    <button type="button" className="btn btn-outline-success btn-lg" onClick={handleClickAsc}>Orden Ascendente</button>
                
                
            </div>
            <div className='d-flex justify-content-center' style={{ paddingTop:0, paddingBottom:10 }}>
                <button type="button" className="btn btn-outline-success btn-lg" onClick={handleClickDesc}>Orden Descendente</button>
            </div>
        </div>
        <div className="card col-lg-8"style={{ paddingTop:15 } }>
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Num Orden</th>
                        <th  scope="col" className="text-center">Estado orden</th>
                        <th  scope="col" className="text-center">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {
                       ordersTotal.map(el => 
                        <tr className="text-center" key={el.id}>
                            <th>
                                {el.id}
                            </th>
                            <td className="text-center">
                               {el.status}
                            </td>
                            <td>
                                <div>
                                <Link to={`/order/details/${el.id}`}>
                                    <button className="btn btn-outline-primary" style={{marginRight:10}}>Detalles</button>
                                </Link>
                                <Link to={`/admin/edit/${el.id}`}>
                                    <button className="btn btn-outline-warning" style={{marginRight:10}}>Editar</button>
                                </Link>
                            
                                </div>
                            </td>         
                        </tr>
                        )

                    }
                {
                
                /* { products.map((e)=>
                <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.name}</td>
                    <td className="text-center">
                        {(e.idCategory)===1 ? "iPhone": 
                        (e.idCategory)===2 ? "iPad"  :
                        (e.idCategory)===3 ? "Watch"  :
                        (e.idCategory)===4 ? "Airpods"  :
                        (e.idCategory)===5 ? "Mac"  : 
                        (e.idCategory)===6 ? "TV & Home" 
                        :  "Nueva Categoria"}
                    </td>
                    <td>
                        <div className="d-flex justify-content-center">
                            <Link to={`/details/${e.id}`}>
                                <button className="btn btn-outline-primary" style={{marginRight:10}}>Detalles</button>
                            </Link>
                            <Link to={`/admin/edit/${e.id}`}>
                                <button className="btn btn-outline-warning" style={{marginRight:10}}>Editar</button>
                            </Link>
                            <button className="btn btn-outline-danger fas fa-trash-alt" type='button' name="id" value={e.id} onClick={(e)=>handelDetele(e)}></button>
                        </div>
                    </td>
                </tr>
                )} */}
                </tbody>
            </table>
        </div>
  </div>
        </div>
    )
}

export default Orders;