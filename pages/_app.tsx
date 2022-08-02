import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
// import "../styles/styles.css";


function MyApp({Component, pageProps}: AppProps) {
  return (
    // <ChakraProvider resetCSS>
    //   <Component {...pageProps} />
    // </ChakraProvider>
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
