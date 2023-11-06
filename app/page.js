// 'use client'
// THIS IS A SERVER COMPONENT

import Nav from '@/components/nav/nav'
import Canvas from '@/components/canvas/canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer/footer'
import LocationRequest from '@/components/permissions/locationRequest'
import WeatherContainer from '@/components/weather/weatherContainer'

const Index = (params, searchParams) => {

    return (
        <>
            {/* <LocationRequest /> */}
            <Nav />
            
            <Canvas />
            <WeatherContainer />
            
            <Main />
            <Footer />
        </>
    )
}

export default Index