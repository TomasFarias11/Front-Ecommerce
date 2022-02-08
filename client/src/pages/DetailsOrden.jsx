import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import swal from 'sweetalert';
import { getOrderUserId } from "../actions/actionOrder.js";
import { Link } from "react-router-dom";

export default function DetailsOrden() {

  
  const ordersId = useSelector((state) => state.sixRed.orderId);
  const ordersTotal = useSelector((state) => state.sixRed.order);
  const dispatch = useDispatch();
  console.log(ordersId, "order id")
  console.log(ordersTotal, "probando")
  
//   const cart = useSelector((state) => state.firstRed.cart)
//   const formato = new Intl.NumberFormat('de-DE', {
//     // style: 'currency',
//     // currency: 'USD',
//     // minimumFractionDigits: 3,
//   })

//   const handleClick = (e) => {
//     e.preventDefault();
//     dispatch(addToCart(Number(orderId.id)))
//     window.localStorage.setItem('carrito', JSON.stringify(cart))
//     dispatch(setCartOn())
//     swal("Agregado al carrito!", {
//       buttons: false,
//       icon: 'success',
//       timer: 1500,
//     });
//   }

  const { id } = useParams();
  console.log(id, "este es el id que llega")


  // console.log('el carrito', cart)

  useEffect(() => {
    dispatch(getOrderUserId(id))
  }, [dispatch,id])


  


//   useEffect(() =>
//     // window.localStorage.getItem('carrito') ? window.localStorage.getItem('carrito') :   
//     window.localStorage.setItem('carrito', JSON.stringify(cart))
//     , [cart])

  return (
    <div className="container">
    <div className="row gutters">
    	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    		<div className="card">
    			<div className="card-body p-0">
    				<div className="invoice-container">
    					<div className="invoice-header">
    
    						
    						<div className="row gutters">
    							<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
    								<div className="custom-actions-btns mb-5">
    									{/* <a href="#" className="btn btn-primary">
    										<i className="icon-download"></i> Download
    									</a>
    									<a href="#" className="btn btn-secondary">
    										<i className="icon-printer"></i> Print
    									</a> */}
    								</div>
    							</div>
    						</div>
    						
    
    						
    						<div className="row gutters">
    							<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
    								<h4>iGroup-6</h4>
    							</div>
    							<div className="col-lg-6 col-md-6 col-sm-6">
    								<address className="text-right">
                                        { ordersId[0].user.username }
    										<br/>
                                        { ordersId[0].user.email }
                                        <br/>
                                        { ordersId[0].user.address }
    								</address>
    							</div>
    						</div>
    						
    
    						
    						<div className="row gutters">
    							<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    								<div className="invoice-details">
    									<address>
                                            { ordersId[0].user.username }
    										<br/>
                                            { ordersId[0].user.email }
                                            <br/>
                                            { ordersId[0].user.address }
    										
    									</address>
    								</div>
    							</div>
    							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    								<div className="invoice-details">
    									<div className="invoice-num">
    										<div>Orden - # {ordersId[0].id}</div>
    										<div>Fecha y hora de creación: 
                                            { ordersId[0].user.createdAt }
                                            </div>
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
    												<th>Productos</th>
    												<th>Usuario</th>
    												<th>Cantidad</th>
    												<th>Sub Total</th>
                                                    <th>Estado</th>
    											</tr>
    										</thead>
    										<tbody>
    											<tr>
    												<td>
                                                        {ordersId[0].carrito.map(el => 
                                                            
                                                            el.name + " || ")
                                                            
                                                            }
    													
    													
    												</td>
    												<td>{ordersId[0].userId}</td>
    												<td>{ordersId[0].carrito.length}</td>
    												<td>$5000.00</td>
                                                    <td>{ordersId[0].status}</td>
    											</tr>
    											<tr>
    												{/* <td>
    													Maxwell Admin Template
    													<p className="m-0 text-muted">
    														As well as a random Lipsum generator.
    													</p>
    												</td> */}
    												{/* <td>#50000126</td>
    												<td>5</td>
    												<td>$100.00</td> */}
    											</tr>
    											<tr>
    												{/* <td>
    													Unify Admin Template
    													<p className="m-0 text-muted">
    														Lorem ipsum has become the industry standard.
    													</p>
    												</td> */}
    												{/* <td>#50000821</td>
    												<td>6</td>
    												<td>$49.99</td> */}
    											</tr>
    											<tr>
    												<td>&nbsp;</td>
    												<td colspan="2">
    													<p >
    														
                                                            {ordersId[0].carrito.map(el => 
                                                            <p>
                                                                {el.name}
                                                            </p>
                                                             )
                                                            
                                                            }
    													</p>
    													<h5 className="text-success"><strong>Total</strong></h5>
    												</td>			
    												<td>
    													<p >
    														
                                                            {ordersId[0].carrito.map(el => 
                                                            <p>
                                                                $ {el.price}
                                                            </p>
                                                             )
                                                            
                                                            }
    													</p>
    													<h5 className="text-success">
                                                            <strong> 
                                                                <script>
                                                            
                                                                </script>
                                                                
                                                            
                                                            
                                                             
                                                            
                                                            </strong></h5>
    												</td>
    											</tr>
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    						
    
    					</div>
    
    					<div className="invoice-footer">
                            <Link to="/order">
                                 <button className="btn btn-secondary active">Regresar</button>
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