'use client'

import { useState, useEffect, createContext } from 'react'

export const WeatherContext = createContext();


export default function WeatherProvider ({ children }) {

    const [weather, setWeather] = useState(() => {
        if (typeof window !== 'undefined') {
        const savedWeather = localStorage.getItem('weather');
        const parsedWeather = JSON.parse(savedWeather);
        return parsedWeather || [ {thunder: true, rain: true, snow: true, fog: true, haze: true, sun: true, cloud: true, }]
        }
      })
    
    useEffect(()=>{
    localStorage.setItem('weather', JSON.stringify(weather))
    }, [weather])



  return <WeatherContext.Provider value={{weather, setWeather}}>{children}</WeatherContext.Provider>
}

