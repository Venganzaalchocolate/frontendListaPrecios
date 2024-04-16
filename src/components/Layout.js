import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'



export const Layout=({title, children})=> {
  return (
    <>
        <Head>
            <title>{title ? title+' PrimeInvest':title }</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="path/to/fontawesome.css"/>        
        </Head>
        
        <Header></Header>
            <main id='mainprincipal'>
             {children} 
            </main>
        <Footer></Footer>
    </>
  )
}
