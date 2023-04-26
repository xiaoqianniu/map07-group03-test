import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import SushiList from './sushiList'
import SushiManage from './sushiManage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sushi Store</title>
        <meta name='description' content='an online sushi store' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <SushiList />
      <SushiManage />
    </>
  )
}
