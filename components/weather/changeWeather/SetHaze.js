'use client'
import { useContext, useEffect } from "react"
import { WeatherContext } from "@/components/contexts/weather-context"

const SetHaze = () => {
    const wContext = useContext(WeatherContext)
    useEffect(() => {
        wContext.setWeather([ {thunder: false, rain: false, snow: false, fog: false, haze: true, sun: true, cloud: true, }])
    }, [])
}

export default SetHaze