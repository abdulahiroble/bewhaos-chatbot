import '../styles/globals.css'
import type {AppProps} from 'next/app'
// import Chatbot from 'react-chatbot-kit'
// import config from '../config/config'
// import ActionProvider from '../config/config'
// import MessageParser from '../config/config'

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} >
    {/* <Chatbot actionProvider={ActionProvider} messageParser={MessageParser} config={config} /> */}
  </Component>
}

export default MyApp
