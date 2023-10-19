'use client'

import {CartContext} from "../cart-context.js"
import { useContext } from "react"

const CartTotal = () => {

    const context = useContext(CartContext)

    let totalPrice = 0;
    if (context.cart && context.cart.length > 0) {
        let cartItems = context.cart.map(item => item.quantity * item.price)
        if (cartItems.length > 0) totalPrice = cartItems.reduce((a,v) => a + v)
        return (
            <div className="cart-total-container">
                <p><b>total: </b>${totalPrice}</p>
            </div>
        )
    } // first if statement's ending curly brace
    else return null
}


export default CartTotal