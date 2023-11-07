'use client'

import { useContext, useState } from "react";
import { CoordinatesContext } from "../contexts/coordinates-context";

const LocationRequest = () => {

    const coContext = useContext(CoordinatesContext)

    const [isLoading, setIL] = useState(false)
    const [retrieved, setRetrieved] = useState(false)

    const promise1 = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //success
                resolve(position);
            },
            (err) => {
                //failure
                reject(err);
            })
    })

    const handleCurrentLocClick = () => {
        setIL(true)
        promise1
        .then((position) => {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
            coContext.setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            setIL(false)
            coContext.setRetrieved(true)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    if (coContext.retrieved) {
        return null
    }
    else {
        return (
            <>
                <div className="location-request-wrapper">
                    <h1>Weather Widget Settings</h1>
                    <div className="loc-btn-container">
                        <button 
                            className="loc-btn" id="current-loc-btn"
                            onClick={handleCurrentLocClick}
                        >
                            {!isLoading && <p>USE CURRENT</p>}
                            {!isLoading && <p>LOCATION</p>}
                            {isLoading && <p>Retrieving Coordinates...</p>}
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="85" height="85" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className="loc-icon"
                                >
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#00082f" stroke="none">
                                <path d="M2511 4264 c-21 -26 -21 -36 -21 -516 l0 -489 25 -24 c31 -32 59 -32
                                90 0 l25 24 0 489 c0 480 0 490 -21 516 -13 17 -30 26 -49 26 -19 0 -36 -9
                                -49 -26z"/>
                                <path d="M2200 3794 c-344 -101 -638 -352 -796 -679 -54 -112 -104 -264 -104
                                -316 0 -29 0 -29 65 -29 l64 0 11 43 c59 229 155 401 310 557 154 153 330 251
                                558 310 l42 11 0 64 0 65 -32 -1 c-18 0 -71 -11 -118 -25z"/>
                                <path d="M2772 3754 l3 -66 72 -19 c269 -68 503 -234 665 -472 75 -110 124
                                -228 174 -414 2 -9 25 -13 70 -13 l67 0 -7 50 c-11 80 -62 225 -117 331 -133
                                253 -334 446 -593 570 -106 50 -257 99 -308 99 l-29 0 3 -66z"/>
                                <path d="M2435 2996 c-131 -43 -227 -126 -284 -245 -35 -74 -36 -80 -36 -191
                                0 -111 1 -117 36 -191 47 -98 119 -170 219 -218 73 -35 78 -36 191 -36 113 0
                                116 1 192 38 100 49 165 114 214 214 37 76 38 79 38 192 0 113 -1 118 -36 192
                                -48 100 -119 170 -218 218 -69 33 -85 36 -176 38 -63 2 -115 -2 -140 -11z"/>
                                <path d="M856 2609 c-35 -28 -35 -70 0 -98 26 -21 36 -21 516 -21 l489 0 24
                                25 c32 31 32 59 0 90 l-24 25 -489 0 c-480 0 -490 0 -516 -21z"/>
                                <path d="M3236 2609 c-35 -28 -35 -70 0 -98 26 -21 36 -21 514 -21 478 0 488
                                0 514 21 17 13 26 30 26 49 0 19 -9 36 -26 49 -26 21 -36 21 -514 21 -478 0
                                -488 0 -514 -21z"/>
                                <path d="M1300 2322 c0 -53 50 -205 104 -317 130 -269 339 -477 609 -605 106
                                -51 258 -100 309 -100 l29 0 -3 66 -3 66 -72 18 c-398 101 -722 425 -822 823
                                l-19 72 -66 3 -66 3 0 -29z"/>
                                <path d="M3686 2338 c-49 -184 -100 -307 -174 -414 -161 -238 -396 -405 -665
                                -474 l-72 -18 -3 -66 -3 -66 29 0 c51 0 202 49 308 99 259 124 460 317 593
                                570 55 106 106 251 117 331 l7 50 -67 0 c-45 0 -68 -4 -70 -12z"/>
                                <path d="M2511 1884 c-21 -26 -21 -36 -21 -514 0 -478 0 -488 21 -514 28 -35
                                70 -35 98 0 21 26 21 36 21 514 0 478 0 488 -21 514 -13 17 -30 26 -49 26 -19
                                0 -36 -9 -49 -26z"/>
                                </g>
                            </svg>
                        </button>
                        <p style={{ color: 'aliceBlue'}}>{isLoading ? 'loading' : coContext.coordinates.latitude}</p>
                        <button className="loc-btn" id="other-loc-btn">
                            <p>DON&apos;T USE</p>
                            <p>CURRENT LOCATION</p>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="85" height="85" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className="loc-icon"
                                >
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#00082f" stroke="none">
                                <path d="M2511 4264 c-21 -26 -21 -36 -21 -516 l0 -489 25 -24 c31 -32 59 -32
                                90 0 l25 24 0 489 c0 480 0 490 -21 516 -13 17 -30 26 -49 26 -19 0 -36 -9
                                -49 -26z"/>
                                <path d="M2200 3794 c-344 -101 -638 -352 -796 -679 -54 -112 -104 -264 -104
                                -316 0 -29 0 -29 65 -29 l64 0 11 43 c59 229 155 401 310 557 154 153 330 251
                                558 310 l42 11 0 64 0 65 -32 -1 c-18 0 -71 -11 -118 -25z"/>
                                <path d="M2772 3754 l3 -66 72 -19 c269 -68 503 -234 665 -472 75 -110 124
                                -228 174 -414 2 -9 25 -13 70 -13 l67 0 -7 50 c-11 80 -62 225 -117 331 -133
                                253 -334 446 -593 570 -106 50 -257 99 -308 99 l-29 0 3 -66z"/>
                                <path d="M2435 2996 c-131 -43 -227 -126 -284 -245 -35 -74 -36 -80 -36 -191
                                0 -111 1 -117 36 -191 47 -98 119 -170 219 -218 73 -35 78 -36 191 -36 113 0
                                116 1 192 38 100 49 165 114 214 214 37 76 38 79 38 192 0 113 -1 118 -36 192
                                -48 100 -119 170 -218 218 -69 33 -85 36 -176 38 -63 2 -115 -2 -140 -11z"/>
                                <path d="M856 2609 c-35 -28 -35 -70 0 -98 26 -21 36 -21 516 -21 l489 0 24
                                25 c32 31 32 59 0 90 l-24 25 -489 0 c-480 0 -490 0 -516 -21z"/>
                                <path d="M3236 2609 c-35 -28 -35 -70 0 -98 26 -21 36 -21 514 -21 478 0 488
                                0 514 21 17 13 26 30 26 49 0 19 -9 36 -26 49 -26 21 -36 21 -514 21 -478 0
                                -488 0 -514 -21z"/>
                                <path d="M1300 2322 c0 -53 50 -205 104 -317 130 -269 339 -477 609 -605 106
                                -51 258 -100 309 -100 l29 0 -3 66 -3 66 -72 18 c-398 101 -722 425 -822 823
                                l-19 72 -66 3 -66 3 0 -29z"/>
                                <path d="M3686 2338 c-49 -184 -100 -307 -174 -414 -161 -238 -396 -405 -665
                                -474 l-72 -18 -3 -66 -3 -66 29 0 c51 0 202 49 308 99 259 124 460 317 593
                                570 55 106 106 251 117 331 l7 50 -67 0 c-45 0 -68 -4 -70 -12z"/>
                                <path d="M2511 1884 c-21 -26 -21 -36 -21 -514 0 -478 0 -488 21 -514 28 -35
                                70 -35 98 0 21 26 21 36 21 514 0 478 0 488 -21 514 -13 17 -30 26 -49 26 -19
                                0 -36 -9 -49 -26z"/>
                                </g>
                            </svg>
                        </button>
                    </div>

                </div>
            </>
        )
    }
}

export default LocationRequest