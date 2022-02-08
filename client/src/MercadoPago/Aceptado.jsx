import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { updateOrder} from "../actions/actionProducts";
import { sendMail } from "../actions/actionMercadoPago";
import { useEffect } from "react";

export default function Aceptado () {

    const idUser = JSON.parse(window.localStorage.getItem('usuario')).id;

    const cliente = JSON.parse(window.localStorage.getItem('todojunto')).payer;

    const dispatch = useDispatch();
    const {search} = useLocation()
    const query = new URLSearchParams(search);
    
    const userId = useSelector((state) => state.secondRed.userId);
    const carrito = useSelector((state) => state.firstRed.cart);
    console.log('ID',userId)


    const payment_id = parseInt(query.get('payment_id'));
    const status = query.get('status');
    console.log('pay',payment_id)
    console.log('status',status)

    //Object.defineProperty(cliente, 'payment_id', {value: payment_id});

    useEffect(()=>{
        dispatch(sendMail(cliente, idUser))
        !!payment_id && !!status ? dispatch(updateOrder(idUser,{payment_id:payment_id, status:status})) : console.log(carrito)
    },[]);

    
    
    
    return (
        <h1>PAGO ACEPTADOs</h1>
    )
}