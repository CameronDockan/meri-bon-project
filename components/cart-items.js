import Image from "next/legacy/image"
import { useContext, useEffect} from "react"
import AppContext from "./app-context"

const CartItems = () => {

    const context = useContext(AppContext)


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
        if (cartItem.quantity >= 1) {
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartString = localStorage.getItem('theCart')
            const parsedCart = JSON.parse(cartString)
            context.setCart(parsedCart)
        }
    }, [])


    if (context.cart && context.cart.length > 0) {
        const cartElements = context.cart.map(cartItem =>
            <div key={cartItem.id} className="cart-content-container">
                <div className="cart-left-content">
                <Image
                    src={cartItem.imgSrc}
                    alt={"bonsai"}
                    width={160}
                    height={160}
                    // priority={true}
                    className="cart-image"
                />
                </div>
                <div className="cart-middle-content">
                    <p>{cartItem.name}</p>
                    <div className="cart-add-subtract-quantity-container">
                        <button 
                            className='decrement-quantity-button'
                            onClick={() => subtractQuantityFromCart(cartItem)}
                            
                        >
                            -
                        </button>
                        <p>{cartItem.quantity}</p>
                        <button 
                        className="increment-quantity-button"
                        onClick={() => addQuantityToCart(cartItem)}
                        >
                            +
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