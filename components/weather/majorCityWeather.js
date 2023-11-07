'use client'
import { useEffect, useState, useContext } from "react"
import SunIcon from "./weather-icons/sunIcon"
import CloudIcon from "./weather-icons/cloudIcon"
import RainIcon from "./weather-icons/rainIcon"
import SnowIcon from "./weather-icons/snowIcon"
import ThunderIcon from "./weather-icons/thunderIcon"
import Fog_Mist_HazeIcon from "./weather-icons/fog-mist-haze"
import { WeatherContext } from "../contexts/weather-context"
import SetSun from "./changeWeather/SetSun"
import SetCloud from "./changeWeather/SetCloud"
import SetFog from "./changeWeather/SetFog"
import SetRain from "./changeWeather/SetRain"
import SetSnow from "./changeWeather/SetSnow"
import SetThunder from "./changeWeather/SetThunder"


const MajorCityWeather = ({lat, lon, generalName, isActive, onClick}) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [weatherID, setWID] = useState(0)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=9a6bdb2a44bc588e8cc941bc4d93cf72`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
            setWID(JSON.stringify(data.weather[0].id))
          })
      }, [])

    if (isLoading) {
        return (
            <>
            <h1>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <div 
                className={!isActive ? "weather-info-container" : "weather-info-container active"}
                onClick={onClick}
                >
                    <p className="weather-info-title">
                        {
                            //`${JSON.stringify(data.name).slice(1, -1)} (${generalName})`
                            generalName
                        }
                    </p>
                    <div className="weather-info-description">
                        {
                            JSON.stringify(data.weather[0].main).slice(1, -1)
                        }
                        <div className="weather-icon-container">
                            {weatherID >= 200 && weatherID <= 232 && <ThunderIcon/>}
                            {isActive && weatherID >= 200 && weatherID <= 232 ? <SetThunder/> : null}

                            {weatherID >= 300 && weatherID <= 531 && <RainIcon/>}
                            {isActive && weatherID >= 300 && weatherID <= 531 ? <SetRain/> : null}


                            {weatherID >= 600 && weatherID <= 622 && <SnowIcon/>}
                            {isActive && weatherID >= 600 && weatherID <= 622 ? <SetSnow/> : null}

                            {weatherID >= 701 && weatherID <= 781 && <Fog_Mist_HazeIcon/>}
                            {isActive && weatherID >= 701 && weatherID <= 781 ? <SetFog/> : null}


                            {weatherID == 800 && <SunIcon/>}
                            {isActive && weatherID == 800 ? <SetSun/> : null}


                            {weatherID >= 801 && weatherID <= 804 && <CloudIcon/>}
                            {isActive && weatherID >= 801 && weatherID <= 804 ? <SetCloud/> : null}

                        </div>
                    </div>

                    <p className="weather-info-temp-title">Temperature:</p>
                    <p className="weather-info-temp">{`Low: `}{JSON.stringify(data.main.temp_min)} &deg;F</p>
                    <p className="weather-info-temp">{`High: `}{JSON.stringify(data.main.temp_max)} &deg;F</p>
                </div>
            </>
        )
    }
}

export default MajorCityWeather

                {/* <CloudIcon />
                <RainIcon />
                <SnowIcon />
                <ThunderIcon />
                <Fog_Mist_HazeIcon />
                <SunIcon />
             */}