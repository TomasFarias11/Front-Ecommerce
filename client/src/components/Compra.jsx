import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { pagar } from "../actions/actionMercadoPago";
import { Link } from "react-router-dom";


export default function Boton () {
    // const compra = useSelector((state) => state.fifthRed.compra);
    const compra = JSON.parse(window.localStorage.getItem('todojunto'))
    const url = useSelector((state) => state.fifthRed.url);
    const dispatch = useDispatch();
    const [button, setButton] = useState(false)
    console.log('uuu',url)

    const [ preference, setPreference] = useState({
        items:compra.items,
        payer:compra.payer,
        back_urls:{
				success: "http://localhost:3000/mercadopago/aceptado",
				failure: "http://localhost:3000/mercadopago/rechazado",
				pending: "http://localhost:3000/mercadopago/rechazado"
		},
		auto_return:"approved",
        notification_url:'https://endrg8sjycslc.x.pipedream.net'
    })

    // useEffect(()=>{
    //     console.log('AHORA SI?',url)
    // },[url])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(pagar(preference))
        setButton(true)
    }

    return (
        <div>
            <h1>
                Compra
            </h1>
            {button === false && url.length === 0 ? 
            <button onClick={(e) => handleClick(e)} >Confirmar Compra</button>
            :
            <button><a href={url}>PAGAR</a></button>
            }
            </div>
    )
};