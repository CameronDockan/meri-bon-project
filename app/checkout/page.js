'use client'

import AppContext from "@/components/app-context"
import { useContext } from "react"

const CheckoutPage = () => {

    const context = useContext(AppContext)

    let totalPrice = 0;

    if (context.cart && context.cart.length > 0) {
        let cartItems = context.cart.map(item => item.quantity * item.price)
        if (cartItems.length > 0) totalPrice = cartItems.reduce((a,v) => a + v);
    }


    let listOfPurchasedItems;
    if (context.cart && context.cart.length > 0) {
        listOfPurchasedItems = context.cart.map(prod =>
            <li key={prod.id}>
                {prod.quantity + " " + prod.name}
            </li>
        )
        return (
            <div>
                <p>Thank you for purchasing: </p>
                <ul>
                    {listOfPurchasedItems}
                </ul>
                <p>for ${totalPrice}</p>
            </div>
        )
    } 
    
    else {
        return (
            <div>
                <h1>You didn't purchase any items</h1>
            </div>
        )
    }



}

export default CheckoutPage