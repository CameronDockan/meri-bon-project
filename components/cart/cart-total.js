'use client'

import {CartContext} from "@/components/contexts/cart-context.js"
import { useContext, useState, useEffect } from "react"

const CartTotal = () => {

    const context = useContext(CartContext)

    const [cartIsAvailable, setCIA] = useState(false)

    useEffect(() => {
        if (context.cart && context.cart.length > 0) {
            setCIA(true)
        } else {
            setCIA(false)
        }
    })

    let totalPrice = 0;
    if (cartIsAvailable) {
        let cartItems = context.cart.map(item => item.quantity * item.price)
        if (cartItems.length > 0) totalPrice = cartItems.reduce((a,v) => a + v)
        return (
            <div className="cart-total-container">
                <p><b>total: </b>${totalPrice}</p>
            </div>
        )
    } // first if statement's ending curly brace
    else return <h1 className="empty-cart-message">Empty Cart</h1>
}


export default CartTotal