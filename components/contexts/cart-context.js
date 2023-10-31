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


  return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
}