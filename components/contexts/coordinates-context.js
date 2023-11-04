'use client'

import { createContext, useState, useEffect } from "react";

export const CoordinatesContext = createContext(); 

export default function CoordinateProvider ({ children }) {

    // const [coordinates, setCoordinates] = useState(
    //     {
    //     latitude: 0,
    //     longitude: 0
    //     })
       

    const [coordinates, setCoordinates] = useState(() => {
        if (typeof window !== 'undefined') {
        const savedCoordinates = localStorage.getItem('coordinates');
        const parsedCoordinates = JSON.parse(savedCoordinates);
        return parsedCoordinates || [ {latitude: 0,longitude: 0}]
        }
      })
    
    useEffect(()=>{
    localStorage.setItem('coordinates', JSON.stringify(coordinates))
    }, [coordinates])

    const [retrieved, setRetrieved] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedRetrieval = localStorage.getItem('retrieval');
        const parsedRetrieval = JSON.parse(savedRetrieval);
        return parsedRetrieval || false
      }
    })

    useEffect(()=>{
      localStorage.setItem('retrieval', JSON.stringify(retrieved))
      }, [retrieved])



  return <CoordinatesContext.Provider value={{coordinates, setCoordinates, retrieved, setRetrieved}}>{children}</CoordinatesContext.Provider>
}
