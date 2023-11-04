'use client'
import { useContext, useEffect } from "react"
import { WeatherContext } from "@/components/contexts/weather-context"

const SetRain = () => {
    const wContext = useContext(WeatherContext)
    useEffect(() => {
        wContext.setWeather([ {thunder: false, rain: true, snow: false, fog: false, haze: false, sun: true, cloud: true, }])
    }, [])
}

export default SetRain