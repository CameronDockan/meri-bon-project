// 'use client'
// THIS IS A SERVER COMPONENT
// "build": "next build",

import Nav from '@/components/nav/nav'
import DynamicCanvas from '@/components/canvas/dynamic-canvas'
import Canvas from '@/components/canvas/canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer/footer'
// import LocationRequest from '@/components/permissions/locationRequest'
import WeatherContainer from '@/components/weather/weatherContainer'
// import DynamicWeatherContainer from '@/components/weather/dynamicWeatherContainer'

const Index = (params, searchParams) => {

    return (
        <>
            <Nav />
            
            <DynamicCanvas/>
            {/* <Canvas/> */}
            {/* <WeatherContainer /> */}
            <DynamicWeatherContainer />
            
            <Main />
            <Footer />
        </>
    )
}

export default Index