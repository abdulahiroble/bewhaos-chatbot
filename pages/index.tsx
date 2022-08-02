import type {NextPage} from 'next'
import Chat from '../components/Chat'
import Features from '../components/Features'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Features />
        <Chat />
      </Layout>
    </>
  )
}

export default Home
