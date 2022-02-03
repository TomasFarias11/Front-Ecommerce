import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { pagar } from "../actions/actionMercadoPago";


export default function Boton () {
    const compra = useSelector((state) => state.fifthRed.compra)
    console.log('compra',compra.items)
    const dispatch = useDispatch();

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

    console.log('preferencias',preference)

    return (
        <div>
            <h1>
                Compra
            </h1>
            <button onClick={() => dispatch(pagar(preference))} >Paga rata de mierda</button>
        </div>
    )
};