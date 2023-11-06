import WeatherButton from "./weatherButton"
import SunIcon from "./weather-icons/sunIcon"
import CloudIcon from "./weather-icons/cloudIcon"
import RainIcon from "./weather-icons/rainIcon"
import SnowIcon from "./weather-icons/snowIcon"
import ThunderIcon from "./weather-icons/thunderIcon"
import Fog_Mist_HazeIcon from "./weather-icons/fog-mist-haze"
import ExIcon from "./weather-icons/exIcon"

const WeatherButtonContainer = () => {
    return(
        <div className="weather-btn-container">
            <WeatherButton icon={<ExIcon/>} />
            <WeatherButton icon={<CloudIcon/>} />
            <WeatherButton icon={<RainIcon/>} />
            <WeatherButton icon={<SnowIcon/>} />
            <WeatherButton icon={<ThunderIcon/>} />
            <WeatherButton icon={<Fog_Mist_HazeIcon/>} />
        </div>
    )
}

export default WeatherButtonContainer