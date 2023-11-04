'use client'
import { useContext, useEffect } from "react"
import { WeatherContext } from "@/components/contexts/weather-context"

const SetSnow = () => {
    const wContext = useContext(WeatherContext)
    useEffect(() => {
        wContext.setWeather([ {thunder: false, rain: false, snow: true, fog: false, haze: false, sun: true, cloud: true, }])
    }, [])
}

export default SetSnow