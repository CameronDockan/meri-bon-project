// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
// 'use client'

import '../styles/styles.css'
import '../styles/mobileNav.css'
import '../styles/navFiller.css'
import '../styles/locReq.css'
import '../styles/weatherComponents.css'
import CartProvider from '@/components/contexts/cart-context'
import CoordinateProvider from '@/components/contexts/coordinates-context'
import WeatherProvider from '@/components/contexts/weather-context'

export default function RootLayout({ children }) {

    return (
      <html lang="en">
        <body>
          <CartProvider>
            <CoordinateProvider>
              <WeatherProvider>
                {children}
              </WeatherProvider>
            </CoordinateProvider>
          </CartProvider>
        </body>
      </html>
    )
  }