'use client'

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(); 
 
export default function CartProvider ({ children }) {

    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem('theCart');
        const parsedData = JSON.parse(savedData);
        return parsedData || []
        }
      })
    
    useEffect(()=>{
    localStorage.setItem('theCart', JSON.stringify(cart))
    }, [cart])

    // let [sumOfQuantity, setSOQ] = useState(() => {
    //   if (typeof window !== 'undefined') {
    //     const savedData = localStorage.getItem('theCart');
    //     const parsedData = JSON.parse(savedData);
    //     const cartItemsQuantity = parsedData.map(item => item.quantity)
    //     let sumOfQuantity = cartItemsQuantity.reduce((a,v) => a + v)
    //     return sumOfQuantity || []
    //     } else sumOfQuantity = 'retrieving'
    // })


  return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
}