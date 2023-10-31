'use client'

import { useContext, useEffect, useState } from "react"
import { CoordinatesContext } from "../contexts/coordinates-context"

const ClientLocationWeather = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const coContext = useContext(CoordinatesContext)



    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coContext.coordinates.latitude}&lon=${coContext.coordinates.longitude}&units=imperial&appid=9a6bdb2a44bc588e8cc941bc4d93cf72`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [coContext.coordinates])



    if (isLoading) {
        return (
            <>
            <h1 style={{color:'aliceBlue'}}>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                {/* <h1 style={{color:'aliceBlue'}}>{JSON.stringify(data)}</h1> */}
                {/* <h1 style={{color:'aliceBlue'}}>{JSON.stringify(data.weather[0].main)}</h1> */}
                <p style={{color:'aliceBlue'}}>
                    {
                        JSON.stringify(data.name).slice(1, -1)
                    }
                </p>
                <p style={{color:'aliceBlue'}}>
                    {
                        JSON.stringify(data.weather[0].main).slice(1, -1)
                        }
                </p>
                <p style={{color:'aliceBlue'}}>Temperature:</p>
                <p style={{color:'aliceBlue'}}>{`Low: `}{JSON.stringify(data.main.temp_min)} &deg;F</p>
                <p style={{color:'aliceBlue'}}>{`High: `}{JSON.stringify(data.main.temp_max)} &deg;F</p>
            </>
        )
    }

}

export default ClientLocationWeather





// const [location, setLoc] = useState('San Francisco')
// const location = 'San Francisco'
// const router = useRouter();
// router.push(`http://localhost:3000/?userLocation=${location}`);