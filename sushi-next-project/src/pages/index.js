import Head from 'next/head'
import Navbar from '../components/Navbar'
import SushiManage from '../components/sushiManage'
import React from 'react'
import SushiShow from '@/components/SushiShow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sushi Store</title>
        <meta name="description" content="an online sushi store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SushiShow />
      <SushiManage />
    </>
  )
}
