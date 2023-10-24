'use client'

import { useEffect, useState } from "react"

const ClientWeather = ({children}) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const [coordinates, setCoordinates] = useState(
        {
        latitude: 0,
        longitude: 0
        })

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(function(position) {
        //   console.log("Latitude is :", position.coords.latitude);
        //   console.log("Longitude is :", position.coords.longitude);
            setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })

        });
      }, [coordinates])

    // add query string / query params / search params === all the same thing
    // useEffect(() => {
    //     window.history.pushState(
    //         null,
    //         "",
    //         `?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`
    //     )
    // })

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=9a6bdb2a44bc588e8cc941bc4d93cf72`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [coordinates])

      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No profile data</p>

    return (
        <>
            <h1 style={{color:'aliceBlue'}}>{JSON.stringify(data)}</h1>
            {children}

        </>
    )
}

export default ClientWeather





// const [location, setLoc] = useState('San Francisco')
// const location = 'San Francisco'
// const router = useRouter();
// router.push(`http://localhost:3000/?userLocation=${location}`);