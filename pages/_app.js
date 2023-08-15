// import '@/styles/globals.css'
import '../styles/styles.css'
import AppContext from '@/components/app-context'
import {useState, useEffect} from 'react'

export default function App({ Component, pageProps }) {

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
    <AppContext.Provider value={{cart, setCart}}>
          <Component {...pageProps} />
    </AppContext.Provider>
    )
}
