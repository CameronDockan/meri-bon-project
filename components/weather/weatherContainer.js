'use client'

import ClientLocationWeather from '@/components/weather/clientLocWeather'
import MajorCityWeather from '@/components/weather/majorCityWeather'
import { useContext, useState } from 'react'
import { CoordinatesContext } from '../contexts/coordinates-context'
import SetAll from './changeWeather/SetAll'


const WeatherContainer = () => {

    const [activeIndex, setAI] = useState(4);

    const coContext = useContext(CoordinatesContext)

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
            {activeIndex === 4 ? <SetAll/> : null}
        </section>
    )
}

export default WeatherContainer