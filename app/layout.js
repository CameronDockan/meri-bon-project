// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
'use client'

import '../styles/styles.css'
import {useState, useEffect} from 'react'
import AppContext from "@/components/app-context"

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
          <AppContext.Provider value={{cart, setCart}}>
            {children}
          </AppContext.Provider>
        </body>
      </html>
    )
  }