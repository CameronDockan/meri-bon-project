import Nav from "@/components/nav"
import Footer from "@/components/footer"
import ShoppingCart from "@/components/shopping-cart"
import { useState, useEffect } from "react"


const CartPage = () => {

    return (
        <>
            <Nav />
            <ShoppingCart />
            <Footer />
        </>
    )
}

export default CartPage