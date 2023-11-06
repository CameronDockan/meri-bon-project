'use client'

import { useContext } from "react"
import { CartContext } from "../contexts/cart-context"

const CartCheckoutButton = () => {

    const context = useContext(CartContext)

    const clearCart = () => {
        context.setCart([])
    }

    return (
        <div className="checkout-button-container">
            <button className="checkout-button" onClick={clearCart}>CHECK OUT</button>
        </div>
    )
}

export default CartCheckoutButton