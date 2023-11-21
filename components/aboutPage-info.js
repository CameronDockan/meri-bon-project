'use client'

import Image from 'next/image'
import cssLogo from '@/public/tech-logos/css_logo_cropped.png'
import nextLogo from '@/public/tech-logos/nextjs_logo.png'
import reactLogo from '@/public/tech-logos/react_logo1.png'
import { useState, useEffect } from 'react'


const AboutPageInfo = () => {

    const [size, setSize] = useState(200)

    const changeSize = () => {
        if (window.innerWidth < 600) {
            setSize(100)
        }
        else if (window.innerWidth > 600) {
            setSize(200)
        }
        else {return}
    }

    useEffect(() => {
        window.addEventListener('resize', changeSize)
    

        return () => {
            window.removeEventListener('resize', changeSize)
        }
    }, [])

    return (
        <div className="about-page-main-container">
            <div className="about-page-top-container">
                <div className='about-title-container'>
                    <h1>
                        About
                    </h1>
                </div>
                <div className='about-text-container'>
                    <h2>General Info</h2>
                    <p>
                        This is a mock ecommerce website with interactive canvas animations that the user can influence by selecting one of the four weather widgets below the canvas on the index page which contain the weather of four major cities from around the world. This project was created using React, NextJS, Canvas API, OpenWeather API, and vanilla CSS. 
                        Unlike SHREDDEPOT (another mock ecommerce website I created) which utilizes Redux Toolkit and Redux-Persist (npm package) in order to persist state,
                        I decided to utilize three native React hooks (useState, useEffect, and createContext) with the help of localStorage to persist the state of the shopping cart.
                    </p>
                    <p>
                        Both the Redux-based method and the plain React method are capable of peristing state for these lightweight ecommerce websites. However, they both have there own unique advantages and disadvantages.
                    </p>
                    {/* <h2>Managing State</h2>
                    <h3>Redux-based method</h3>
                    <p> 
                        First of all, I would like note that I prefer to use Redux over plain React to manage state.  
                        While Javascript and React are both general tools used for Wev Development, 
                        Redux is a unique technology used to solve the specific problem of state management.
                        Be it that Javascript and React are general-purpose loosely-typed technologies, 
                        it is extremely refreshing using Redux which has a strict opinionative way of managing state.
                    </p>
                    <h6>Pros</h6>
                    <p>
                        When I create pixel art assets, I often first get inspiration from real-life photos or from the creations of other pixel artists. 
                        I use these example photos as templates to then create my own unique versions of an asset. 
                        Similarly, I use Redux as a template to solve global state managment.
                        I can focus less time on reinventing the wheel and more time solving the state management issue at hand.
                        For me personally, Redux helps turn an annoying and sometimes irritating problem into an enjoyable one just as example photos helps make creating pixel art more efficient and enjoyable.
                    </p>
                    <h6>Cons</h6>
                    <p>
                        Persist-Redux was challening to configure with NextJS 13.
                    </p>

                    <h3>React-based method</h3>
                    <h6>Pros</h6>
                    <p>
                        Managing state using React and localStorage alone was a great way to become more familliar with React hooks and understand how and when to use important hooks in React.
                        It was also nice not having to configure other technologies that weren't necessasary to complete the task.
                    </p>
                    <h6>Cons</h6>
                    <p>
                        I had to write more code inside my components in order to get the same functionality that I got using Redux.
                    </p> */}
                </div>


            </div>
            <div className="about-page-bottom-container">
                <div className='about-page-logo-container'>
                    <Image
                        src={cssLogo}
                        width={size === 100 ? 72 : size - 50}
                        alt="css logo"
                    />
                </div>
                <div className='about-page-logo-container'>
                    <Image
                        src={reactLogo}
                        width={size}
                        height={size}
                        alt="react logo"
                    />
                </div>
                <div className='about-page-logo-container' id='about-page-next-logo-container'>
                    <div className='next-logo-background-filler'></div>
                    <Image
                        src={nextLogo}
                        width={size}
                        height={size}
                        alt="next jay ess logo"
                        className='next-logo'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPageInfo