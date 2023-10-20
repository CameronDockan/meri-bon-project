// 'use client'
// THIS IS A SERVER COMPONENT

import Nav from '@/components/nav/nav'
import Canvas from '@/components/canvas/canvas'
import Main from '@/components/indexPage-main'
import Footer from '@/components/footer/footer'
import ClientWeather from '@/components/weather/client-weather'
import ServerWeather from '@/components/weather/server-weather'


const Index = (params, searchParams) => {

    return (
        <>

            <Nav />
            <Canvas />

            <ClientWeather>
                <ServerWeather />
            </ClientWeather>
            
            <Main />
            <Footer />
        </>
    )
}

export default Index