'use client'

import Image from "next/image"
import { useContext, useEffect, useState} from "react"
import {CartContext} from "@/components/contexts/cart-context.js"

const CartItems = () => {

    const context = useContext(CartContext)
    // console.log(context.cart)
    

    const addQuantityToCart = (cartItem) => {
        context.setCart(
            prevCart => prevCart.some(item => item.id === cartItem.id)
            ? prevCart.map(item => item.id === cartItem.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item 
              )
            : [ ...context.cart, cartItem ]
        )
    }

    const subtractQuantityFromCart = (cartItem) => {
        if (cartItem.quantity >= 2) {
            context.setCart(
                prevCart => prevCart.some(item => item.id === cartItem.id)
                ? prevCart.map(item => item.id === cartItem.id 
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item 
                  )
                : [ ...context.cart, cartItem ]
            )
        } else removeFromCart(cartItem);
    }


    const removeFromCart = (cartItem) => {
        context.setCart(
            prevCart => prevCart.filter(a =>
              a.id !== cartItem.id
            )
        )
    }

    const [cartIsAvailable, setCIA] = useState(false)

    useEffect(() => {
        if (context.cart && context.cart.length > 0) {
            setCIA(true)
        } else {
            setCIA(false)
        }
    }, [context.cart])


    if (cartIsAvailable) {
        const cartElements = context.cart.map(cartItem =>
            <div key={cartItem.id} className="cart-content-container top">
                <div className="cart-left-content">
                <Image
                    src={cartItem.imgSrc}
                    alt={"bonsai"}
                    width={160}
                    height={160}
                    // priority={true}
                    className="cart-image"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                </div>
                <div className="cart-middle-content">
                    <p>{cartItem.name}</p>
                    <div className="cart-add-subtract-quantity-container">
                        <button 
                            className='decrement-quantity-button'
                            onClick={() => subtractQuantityFromCart(cartItem)}
                        >
                            <svg className="cart-minus-icon" width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 25H32" stroke="#F0F8FF" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <p>{cartItem.quantity}</p>
                        <button 
                        className="increment-quantity-button"
                        onClick={() => addQuantityToCart(cartItem)}
                        >
                            <svg className="cart-plus-icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 25H32" stroke="#F0F8FF" stroke-width="3" stroke-linecap="round"/>
                                <path d="M25 33V18" stroke="#F0F8FF" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="cart-right-content">
                    <p>${cartItem.price * cartItem.quantity}</p>
                </div>
            </div>
            )
        return (
            <>
                {cartElements}
            </>
        )
    } // if statement's ending curly brace
    else return null
}

export default CartItems