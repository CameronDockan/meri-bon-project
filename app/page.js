// 'use client'
// THIS IS A SERVER COMPONENT

import Nav from '@/components/nav/nav'
import DynamicCanvas from '@/components/canvas/dynamic-canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer/footer'
// import LocationRequest from '@/components/permissions/locationRequest'
import WeatherContainer from '@/components/weather/weatherContainer'
import DynamicWeatherContainer from '@/components/weather/dynamicWeatherContainer'

const Index = (params, searchParams) => {

    return (
        <>
            <Nav />
            
            <DynamicCanvas/>
            {/* <WeatherContainer /> */}
            <DynamicWeatherContainer />
            
            <Main />
            <Footer />
        </>
    )
}

export default Index