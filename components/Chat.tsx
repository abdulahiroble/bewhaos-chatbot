import React from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../config/config'
import ActionProvider from '../config/ActionProvider'
import MessageParser from '../config/MessageParser'

const Chat = () => {
    return (
        <Chatbot actionProvider={ActionProvider} messageParser={MessageParser} config={config as any} />
    )
}

export default Chat