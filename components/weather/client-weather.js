'use client'

import { useRouter } from "next/navigation";
// import { useState } from "react";

const ClientWeather = ({children}) => {

    // const [location, setLoc] = useState('San Francisco')

    const location = 'San Francisco'

    const router = useRouter();

    router.push(`http://localhost:3000/?userLocation=${location}`);



    return (
        <>
            {children}
        </>
    )
}

export default ClientWeather



