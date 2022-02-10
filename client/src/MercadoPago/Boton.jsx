import axios from "axios";
import { resolvePath, useNavigate, useNavigationType } from "react-router";


export default function Boton () {
	
	const Navigate = useNavigate()
	var preference = {
		items: [
			{
				title: "asdasaew",
				unit_price: 200000,
				quantity: 1
			}
		],
		back_urls:{
				success: `${process.env.REACT_APP_API}/mercadopago/aceptado`,
				failure: "http://localhost:3000/mercadopago/rechazado",
				pending: "http://localhost:3000/mercadopago/rechazado"
		},
		auto_return:"approved",
		notification_url:'https://endrg8sjycslc.x.pipedream.net'
	};
	console.log('AQUI',preference)

	const handleClick = async () => {
		const mp = await axios.post(`/mercadopago/sale/`, preference)
		console.log('url',mp.data.response.init_point)
		//Navigate(mp.data.response.init_point, )
	  }
    
    
    return (
        <button type="button" className="btn btn-primary" onClick={() => handleClick()}>Pagar</button>
    )
}
