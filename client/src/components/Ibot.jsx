import React from 'react';
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../pages/Chatbot/config.js';
import MessageParser from '../pages/Chatbot/MessageParser.js';
import ActionProvider from '../pages/Chatbot/ActionProvider.js';


function Ibot() {
    const [showBot, toggleBot] = useState(false);

  return(
    <div style={{position: "fixed", zIndex: 99, left: 20, bottom:20}}>
    {showBot &&
    <Chatbot
        config={config}
        messageParser={MessageParser}
        headerText='iBot en linea...'
        placeholderText='Haga su consulta...'
        // messageHistory={loadMessages()}
        actionProvider={ActionProvider}
        // saveMessages={saveMessages}
    />
    }
    <button className="btn btn-info" 
    onClick={() => toggleBot((prev) => !prev)}>
        <i className="fas fa-robot"></i> 
        <small> <strong>Soy iBot</strong>  
        <br/>¿Te puedo ayudar?
        </small> 
    </button>
    </div>

    ); 
      
}

export default Ibot;
