'use client'
import { useContext, useEffect } from "react"
import { WeatherContext } from "@/components/contexts/weather-context"

const SetAll = () => {
    const wContext = useContext(WeatherContext)
    useEffect(() => {
        wContext.setWeather([ {thunder: true, rain: true, snow: true, fog: true, haze: true, sun: true, cloud: true, }])
    }, [])
}

export default SetAll