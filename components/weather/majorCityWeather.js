'use client'
import { useEffect, useState } from "react"
import SunIcon from "./weather-icons/sunIcon"
import CloudIcon from "./weather-icons/cloudIcon"
import RainIcon from "./weather-icons/rainIcon"
import SnowIcon from "./weather-icons/snowIcon"
import ThunderIcon from "./weather-icons/thunderIcon"
import Fog_Mist_HazeIcon from "./weather-icons/fog-mist-haze"
import weather from "./weather"


const MajorCityWeather = ({lat, lon, generalName}) => {

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
                <div className="weather-info-container">
                    <p className="weather-info-title">
                        {
                            //`${JSON.stringify(data.name).slice(1, -1)} (${generalName})`
                            generalName
                        }
                    </p>
                    <p className="weather-info-description">
                        {
                            JSON.stringify(data.weather[0].main).slice(1, -1)
                        }
                        <div className="weather-icon-container">
                            {weatherID >= 200 && weatherID <= 232 && <ThunderIcon/>}
                            {weatherID >= 300 && weatherID <= 531 && <RainIcon/>}
                            {weatherID >= 600 && weatherID <= 622 && <SnowIcon/>}
                            {weatherID >= 701 && weatherID <= 781 && <Fog_Mist_HazeIcon/>}
                            {weatherID == 800 && <SunIcon/>}
                            {weatherID >= 801 && weatherID <= 804 && <CloudIcon/>}
                        </div>
                    </p>

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