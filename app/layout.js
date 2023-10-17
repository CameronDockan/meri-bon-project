// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
'use client'

import '../styles/styles.css'
import '../styles/mobileNav.css'
import '../styles/navFiller.css'
import {useState, useEffect} from 'react'
import CartContext from '@/components/cart-context'

export default function RootLayout({ children }) {

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

    return (
      <html lang="en">
        <body>
          <CartContext.Provider value={{cart, setCart}}>
            {children}
          </CartContext.Provider>
        </body>
      </html>
    )
  }