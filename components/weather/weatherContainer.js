'use client'

import ClientLocationWeather from '@/components/weather/clientLocWeather'
import MajorCityWeather from '@/components/weather/majorCityWeather'
import { useContext } from 'react'
import { CoordinatesContext } from '../contexts/coordinates-context'

const WeatherContainer = () => {

    const coContext = useContext(CoordinatesContext)
    // console.log(coContext.coordinates[0].latitude)

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
            />
            }
            <MajorCityWeather
                lat= {40.730610}
                lon ={-73.935242}
                generalName = "New York"
            />
            <MajorCityWeather
                lat = {51.5072}
                lon = {-0.1276}
                generalName = "London"
            />
            <MajorCityWeather
                lat = {35.6938}
                lon = {139.7034}
                generalName = "Tokyo"
            />
        </section>
    )
}

export default WeatherContainer