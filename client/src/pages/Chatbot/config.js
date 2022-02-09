import React from 'react';

import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar.jsx'
import UserAvatar from './UserAvatar.jsx'

const botName = 'iBot';
const user = JSON.parse(window.localStorage.getItem('usuario'))
const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Bienvenido a iGroup-6! Es un gusto conocerle. Mi nombre es ${botName}. En que puedo ayudarle?`)],
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />
    }
};

export default config;