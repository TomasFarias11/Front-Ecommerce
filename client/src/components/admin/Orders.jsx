import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import { getOrder2} from "../../actions/actionOrder";



function Orders (){

    const orderTotal = useSelector((state) => state.sixRed.orderAdmin);
    const dispatch = useDispatch()
    console.log(orderTotal)


    useEffect(() => {
        dispatch(getOrder2());
    }, [])


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
                
                    <button type="button" className="btn btn-outline-success btn-lg" >Orden Ascendente</button>
                
                
            </div>
            <div className='d-flex justify-content-center' style={{ paddingTop:0, paddingBottom:10 }}>
                <button type="button" className="btn btn-outline-success btn-lg" >Orden Descendente</button>
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
                       orderTotal.map(el => 
                        <tr className="text-center" key={el.id}>
                            <th>
                                {el.id}
                            </th>
                            <td className="text-center">
                               {el.status}
                            </td>
                            <td>
                                <div>
                                <Link to={`/order/user/${el.userId}/details/${el.id}`}>
                                    <button className="btn btn-outline-primary" style={{marginRight:10}}>Detalles</button>
                                </Link>
                                </div>
                            </td>         
                        </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
  </div>
        </div>
    )
}

export default Orders;