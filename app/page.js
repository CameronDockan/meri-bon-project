'use client'

import Nav from '@/components/nav'
import Canvas from '@/components/canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
// import { AiFillSafetyCertificate } from 'react-icons/ai'

const Index = () => {

    const [cart1, setCart] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartString = localStorage.getItem('theCart')
            const parsedCart = JSON.parse(cartString)
            setCart(parsedCart)
        }
    },[])

    return (
        <>
            <Nav cartLength={cart1 ? ' (' + cart1.length + ')' : ""} />
            <Canvas />
            <Main />
            <Footer />
        </>
    )
}

export default Index