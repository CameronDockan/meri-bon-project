// 'use client'
// THIS IS A SERVER COMPONENT

import Nav from '@/components/nav/nav'
import Canvas from '@/components/canvas/canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer/footer'
// import { useState, useEffect } from 'react'
// import CartContext from '@/components/cart-context'
// import { AiFillSafetyCertificate } from 'react-icons/ai'
// import ServerDog from '@/components/dog/server-dog'
// import ClientDog from '@/components/dog/client-dog'

import weather from '@/components/weather/server-weather'
import ClientWeather from '@/components/weather/client-weather'
import ServerWeather from '@/components/weather/server-weather'


const Index = (params, searchParams) => {

    // const [cart1, setCart] = useState([])

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const cartString = localStorage.getItem('theCart')
    //         const parsedCart = JSON.parse(cartString)
    //         setCart(parsedCart)
    //     }
    // },[])

    console.log(searchParams)

    return (
        <>
            {/* <Nav cartLength={cart1 ? ' (' + cart1.length + ')' : ""} /> */}

            <Nav />
            <Canvas />
            {/* <ClientDog>
                <ServerDog />
            </ClientDog> */}
            <h1>{`hey bitch${searchParams}`}</h1>
            <ClientWeather>
                <ServerWeather />
            </ClientWeather>
            <Main />
            <Footer />
        </>
    )
}

export default Index