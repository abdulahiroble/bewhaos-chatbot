import {Box, ChakraProvider} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Bot from '../components/Bot'
import Chat from '../components/Chat'
import Features from '../components/Features'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      {/* <Layout>
        <ChakraProvider resetCSS>
          <Box bg="gray.100" >
            <Features />
            <Bot />
          </Box>
        </ChakraProvider>
      </Layout> */}
      <Bot />
    </>
  )
}

export default Home
