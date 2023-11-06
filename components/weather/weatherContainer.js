'use client'

import ClientLocationWeather from '@/components/weather/clientLocWeather'
import MajorCityWeather from '@/components/weather/majorCityWeather'
import { useContext, useState, useEffect } from 'react'
import { CoordinatesContext } from '../contexts/coordinates-context'
import { WeatherContext } from "../contexts/weather-context"
import SetAll from './changeWeather/SetAll'


const WeatherContainer = () => {

    const [activeIndex, setAI] = useState(4);

    const coContext = useContext(CoordinatesContext)

    const weatherContext = useContext(WeatherContext)

    // useEffect(() => {
    //     console.log(activeIndex)
    // }, [activeIndex])

    return (
        <section className='weather-info-wrapper'>
            {
            coContext.coordinates[0].latitude !== 0 ? 
            <ClientLocationWeather /> 
                                : 
            <MajorCityWeather
                lat= {32.7157}
                lon ={-117.1611}
                generalName = "San Diego"
                isActive={activeIndex === 0}
                onClick={() => {
                    setAI(0)
                }}
            />
            }
            <MajorCityWeather
                lat= {40.730610}
                lon ={-73.935242}
                generalName = "New York"
                isActive={activeIndex === 1}
                onClick={() => setAI(1)}
            />
            <MajorCityWeather
                lat = {51.5072}
                lon = {-0.1276}
                generalName = "London"
                isActive={activeIndex === 2}
                onClick={() => setAI(2)}
            />
            <MajorCityWeather
                lat = {35.6938}
                lon = {139.7034}
                generalName = "Tokyo"
                isActive={activeIndex === 3}
                onClick={() => setAI(3)}
            />
            {/* <MajorCityWeather
                lat = {47.7504}
                lon = {-90.3343}
                generalName = "Grand Marais"
                isActive={activeIndex === 4}
                onClick={() => setAI(4)}
            /> */}
            {activeIndex === 4 ? <SetAll/> : null}
        </section>
    )
}

export default WeatherContainer