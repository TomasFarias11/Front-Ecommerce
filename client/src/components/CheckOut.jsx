import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserId} from '../actions/actionUser.js'
import {Link} from "react-router-dom";
import { loadPrePago } from "../actions/actionMercadoPago.js";
const CheckOut = () =>{

    const [ items, setItems] = useState([]);
    

    const order = useSelector((state) => state.firstRed.order)
    const user = useSelector((state) => state.secondRed.userData)
    const userFull = useSelector((state) => state.secondRed.userId)
    console.log('OTRA COSA', userFull)
    const dispatch = useDispatch()
    const [payer, setPayer] = useState(
        {
            name:userFull.name,
            surname:userFull.lastName,
            email:'test_user_25470426@testuser.com',
            phone:{
                area_code: '11',
                number:12345678,
            },
            identification:{
                type:'DNI',
                number:'12345678'
            },
            address:{
                street_name:'Avenida Riv',
                street_number:888,
                zip_code:'1708'
            }
        }
    );
    console.log('PAYER',payer)
    
    let todojunto = {
        items:items,
        payer:payer
    }
    console.log('todojunto',todojunto)
    
    
    var item = [];
    const createItem = (order)=>{
        
         order[0].carrito.map(e=>item.push(
            {
            id:`${e.id}`,
            title: e.name,
            currency_id: "ARS",
            description: 'ahi tenes tu descripcion la concha de tu madre',
            category_id: `${e.idCategory}`,
            quantity: e.quantity,
            unit_price: 20
            }))
            return item
    }
    

    useEffect(()=>{
        createItem(order)
        setItems(...items,item)
        dispatch(getUserId(user.id))
        console.log('ITEMS',items)
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setPayer({
            
        })
    };
    
     /* const handleChange = ({ target: { name, value } }) => {
        
        setPayer({ ...payer, [name]: value })
        )
    } */

    const handleChangePhone = (e) => {
        setPayer((prev) => ({ ...prev, phone: { ...prev.phone, [e.target.name] : e.target.value } }))
    }

    const handleChangeDni = (e) => {
        setPayer((prev) => ({ ...prev, identification: { ...prev.identification, [e.target.name] : e.target.value } }))
    }

    const handleChangeAddress = (e) => {
        setPayer((prev) => ({ ...prev, address: { ...prev.address, [e.target.name] : e.target.value } }))
    }


    


    return(
        <div>
            <ul>
                <li>
                    <h4>{userFull.name}</h4>
                </li>
                <li>
                    <h4>{userFull.lastName}</h4>
                </li>
                <li>
                    <h4>{userFull.email}</h4>
                </li>
            </ul>
            <br/>
            {order[0].carrito.map(e=>
                <ul>
                    <li>
                        <h6>{e.id}</h6>
                    </li>
                    <li>
                        <h6>{e.name}</h6>
                    </li>
                    <li>
                        <h6>{e.description}</h6>
                    </li>
                    <li>
                        <h6>{e.idCategory}</h6>
                    </li>
                    <li>
                        <h6>{e.quantity}</h6>
                    </li>
                    <li>
                        <h6>{e.price}</h6>
                    </li>
                    <br/>                
                </ul>
                

                
            )}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Codigo de area telefono:</label>
                </div>
                    <input type="text" value={payer.phone.area_code} name="area_code" placeholder='telefono' onChange={(e) => handleChangePhone(e)}/>
                <div>
                    <div>
                        <label>Numero telefonico:</label>
                    </div>
                    <input type="text" value={payer.phone.number} name="number" onChange={(e) => handleChangePhone(e)}/>
                </div>
                <div>
                    <div>
                        <label>Tipo de documento:</label>
                    </div>
                    <input type="text" value = {payer.identification.type} name="type" onChange={(e) => handleChangeDni(e)}/>
                </div>
                <div>
                    <div>
                        <label>Numero de documento:</label>
                    </div>
                    <input type="text" value = {payer.identification.number} name="number" onChange={(e) => handleChangeDni(e)}/>
                </div>
                <div>
                    <label>Direccion de envio:</label>
                    <br/>
                    <label>Calle</label><br/>
                    <input type="text" value = {payer.address.street_name} name="street_name" onChange={(e) => handleChangeAddress(e)}/>
                </div>
                <div>
                    <div>
                        <label>Numero:</label>
                    </div>
                    <input type="integer" value = {payer.address.street_number} name="street_number" onChange={(e) => handleChangeAddress(e)}/>
                </div>
                <div>
                    <div>
                        <label>Codigo postal:</label>
                    </div>
                    <input type="text" value = {payer.address.zip_code} name="zip_code" onChange={(e) => handleChangeAddress(e)}/>
                </div>
                
                <button type="submit">Proceder con el pago</button>
            </form>
            <Link to="/mercadopago/compra">
                <button onClick={() => dispatch(loadPrePago(todojunto))} >Proceder con el hermoso pago</button>
            </Link>
        </div>
    )
}
    
export default CheckOut;