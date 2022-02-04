import axios from "axios";
import { useState } from "react";

export default function Contact () {


    const [input, setInput] = useState({
        name: '',
        email: '',
        message:''
    });

    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        const mail = await axios.post('/mercadopago/sendemail',input);
    }


    console.log('INPUT',input)


    return (
        <div>
            <form >
                <input type="text" value={input.name} name="name" onChange={handleInputChange}/>
                <br />
                <input type="email" value={input.email} name="email" onChange={handleInputChange}/>
                <br />
                <textarea type="text" value={input.message} name="message" onChange={handleInputChange}></textarea>
                <br />
                <input type="submit" value="Enviar!" onClick={handleSubmit}/>
            </form>
        </div>
    )
};