'use client'

/* eslint-disable @next/next/no-img-element */

/**@type {HTMLCanvasElement}*/

import {useEffect, useRef, useState} from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../contexts/weather-context'
// import WeatherButtonContainer from '../weather/weatherButtonContainer'

const Canvas = () => {
    const cnvsRef = useRef(null)

    const [cnvsWidth, setWidth] = useState(window.innerWidth)

    const weatherContext = useContext(WeatherContext)

    // let weatherArray = [
    //     ['sun', weatherContext.weather[0].sun],
    //     ['cloud', weatherContext.weather[0].cloud],
    //     ['rain', weatherContext.weather[0].rain],
    //     ['thunder', weatherContext.weather[0].thunder],
    //     ['fog', weatherContext.weather[0].fog],
    //     ['haze', weatherContext.weather[0].haze]
    // ]
    // console.log(weatherArray)
        // const changeCanvasWidth = () => {
        //     setWidth(window.innerWidth);
        //     window.cancelAnimationFrame(animate);
        // }
        // window.addEventListener('resize', changeCanvasWidth)
        // return () => {
        //     window.removeEventListener('resize', changeCanvasWidth)
        // }


    useEffect(() => {

        const cnvs = cnvsRef.current
        const ctx = cnvs.getContext('2d')

        cnvs.width = cnvsWidth;
        cnvs.height = 400;

        const bonsaiSprite = new Image()
        bonsaiSprite.src = '/bonsai.png'
        // ILS informal leaf sprite
        const greenILS = new Image()
        greenILS.src = '/small-green-informal-leaf.png'

        const sBonsai = new Image()
        sBonsai.src = '/sBonsai.png'

        const robinSprite = new Image()
        robinSprite.src = '/small-pixel-robin.png'

        const meriText = new Image()
        meriText.src ='/meribon-text-white-6x5.png'

        // const ABM = new Image ()
        // ABM.src = '/ABM.png'

        const titleStickerImage = new Image()
        titleStickerImage.src = '/title-sticker.png'

        const ctaSticker = new Image()
        ctaSticker.src= '/cta-sticker.png'

        //weather
        const sunSprite = new Image()
        sunSprite.src = '/weather/sun.png'

        const cloudSprite = new Image()
        cloudSprite.src = '/weather/cloud.png'

        const lightningSprite = new Image()
        lightningSprite.src = '/weather/lightning.png'

        const snowFlakeSprite = new Image()
        snowFlakeSprite.src = '/weather/snowFlake.png'


        const aliceBlue = '#f0f8ff'
        const darkBlue = '#00082f'

        const biColorGradient = 'background-image: linear-gradient(to top, #f0f8ff, #a9b7c7, #697992, #313f5f, #00082f)'
        const triColorGradient = 'background-image: linear-gradient(to top, #f0f8ff, #f0f8ff, #f0f8ff, #f0f8ff, #f0f8ff, #d8e2ec, #c0ccd9, #a9b7c7, #78889f, #4c5b78, #243253, #00082f);'

        const THUNDER = true;

        let gameFrame = 0;
        let centerX = cnvs.width*.5;
        // let centerY = cnvs.height*.5;

        class Bonsai {
            constructor() {
                this.w = 500;
                this.h = 500;
                this.x = centerX - (this.w*.5);
                // this.y = -this.h*.17;
                this.y = cnvs.height - 400
                this.frameX = 0;
                this.frameY = 0;
                this.wind = true;
            }
            draw(ctx) {
                ctx.drawImage(sBonsai,this.w*this.frameX,this.h*this.frameY,this.w,this.h,this.x,this.y,this.w,this.h)
            }
            update() {
                if (gameFrame % 10 === 0) {
                    if (this.wind && this.frameY < 27) {
                        this.frameY++;
                    } else {this.frameY = 0}
                }
            }
        }
        const bonsai = new Bonsai();

        // Math.floor(Math.random() * (max - min + 1) + min)

        class GreenLeaf {
            constructor () {
                this.w = 43;
                this.h = 43;
                this.x = (Math.floor(Math.random() * ((cnvs.width - this.w)-0 + 1) +0))*2+ cnvs.width; // *2 widens the spawning field so you can't see the ridgid corners of the spawning field
                this.y = Math.floor(Math.random() * ((cnvs.height - this.h)-0 + 1) +0)*2 - cnvs.height; // * 2 heightens the spawing field
                this.minXSpawn = cnvs.width;
                this.maxXSpawn = (cnvs.width + this.w)*2;
                this.angle = 0;
                this.fall = true;
            } 
            draw (ctx) {
                ctx.drawImage(greenILS, this.x, this.y, this.w, this.h);
            }
            update () {

                const respawn = () => {

                    if (this.y > cnvs.height -45) this.fall = false;

                    // // if (this.x + this.width < 0) this.x = 50;
                    // if (this.y > cnvs.height) this.y = 0 - this.h;
                    // if (this.x + this.w < 0) this.x = cnvs.width;

                }

                respawn();

                const fall = () => {
                    // this.x-=5
                    // this.y+=5;
                    if (this.fall) {
                        this.y += Math.sin(this.angle);
                        this.angle += Math.random() *.1;
                        this.x -= 5; //Math.random()*2;
                        this.y += 1;
                    }
                }
                fall();
            }
        }

        let greenLeaves = [];
        let numberOfGL = 50;

        for(let i=0; i<numberOfGL; i++) {
            greenLeaves.push(new GreenLeaf())
        }

        class Robin {
            constructor () {
            this.x = cnvs.width;
            this.y = 0;
            this.w = 100;
            this.h = 100;
            this.frameX = 0;
            this.frameY =0;
            this.flap = true;
            this.fall = true;
            this.angle = 0;
            }
            draw (ctx) {
                ctx.drawImage(robinSprite, this.w*this.frameX, this.h*this.frameY, this.w, this.h, this.x, this.y, this.w, this.h)
            }
            update() {
                const flap = () => {
                    if (gameFrame % 10 === 0) {
                        if (this.flap && this.frameX < 7) {
                            this.frameX++;
                        } else {this.frameX = 0}
                    }
                }
                flap();

                const fall = () => {
                    // this.x-=5
                    // this.y+=5;
                    if (this.fall) {
                        this.y += Math.sin(this.angle);
                        this.angle += Math.random() *.1;
                        this.x -= 3; //Math.random()*2;
                        this.y += 1;
                    }
                }
                fall();
            }
        }

        const robin = new Robin ();

        class Sun {
            constructor(x) {
                this.w = 175;
                this.h = 175;
                this.x = x;
                this.y = 0
                this.cX = this.x + this.w * 0.5;
                this.cY = this.y + this.h * 0.5;
                this.radialR0 = 0;
                this.radialR1 = this.w;
                this.yellow = 'rgba(255, 251, 168, .2)'
                this.orange = 'rgba(229, 90, 29, .2)'
                // this.startAngle = Math.PI/2;
                // this.endAngle = this.startAngle + Math.PI/2;
                this.startAngle = 0;
                this.endAngle = Math.PI * 2;

                this.raysW = 275;
                this.raysH = 276;
                this.raysX = this.cX - this.raysW * 0.5;
                this.raysY = this.cY - this.raysH * 0.5;

            }
            draw(ctx) {

                // //gradient
                // ctx.save();
                // const gradient = ctx.createRadialGradient(this.cX, this.cY, this.radialR0, this.cX, this.cY, this.radialR1);
                // gradient.addColorStop(0, this.yellow);
                // gradient.addColorStop(1, darkBlue);
            
                // ctx.fillStyle = gradient;
                // // arc
                // ctx.beginPath();
                // ctx.moveTo(this.cX, this.cY);
                // ctx.arc(this.cX, this.cY, this.radialR1, this.startAngle, this.endAngle);
                // ctx.closePath();
                // ctx.fill();
                // ctx.restore();

                // // sunrays
                // ctx.save();
                // // ctx.shadowColor = 'rgb(255, 245, 48)';
                // // ctx.shadowBlur =200;
                // ctx.drawImage(sunRaysSprite, this.raysX, this.raysY, this.raysW, this.raysH)
                // ctx.restore();

                // sun
                ctx.save();
                // ctx.shadowColor = 'rgb(255, 245, 48)';
                // ctx.shadowBlur =200;
                ctx.drawImage(sunSprite, this.x, this.y, this.w, this.h)
                ctx.restore();
                
            }
            // update() {}
        }
        const sun = new Sun (cnvs.width - 175); // 175 is sun.w

        class Cloud1 {
            constructor(x) {
                this.w = 230;
                this.h = 174;
                this.x = x;
                this.y = 20;
                this.lightningW = 90;
                this.lightningH = 120;
                this.lightningX_Offset = 75;
                this.lightningY_Offset = 120;
                this.lightningX = this.x + this.lightningX_Offset;
                this.lightningY = this.y + this.lightningY_Offset;
                this.minFrameDelay = 30;
                this.maxFrameDelay = 180
                this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                this.lightningFade = true;
                this.lightningOpacity = 1;
                this.frameCounter = 0;
            }

            draw (ctx) {
                ctx.drawImage(cloudSprite, this.x, this.y, this.w, this.h);
            }
            update() {

            }
        }
        const cloud1 = new Cloud1(0)

        class Cloud2 extends Cloud1 {
            constructor(x) {
                super(x);
                this.x = x;
            }
        }

        const cloud2 = new Cloud2(cnvs.width * 0.10);

        class SatelliteCloud1 extends Cloud1 {
            constructor(x) {
                super(x);
                this.y = 20;
                this.x = x;
            }
        }

        const sat1 = new SatelliteCloud1(cnvs.width - 230); // 230 is sat1.w

        class Satellite2 extends Cloud1 {
            constructor(x) {
                super(x);
                this.y = 20;
                this.x = x;
            }
        }

        const sat2 = new Satellite2((cnvs.width - 230) * .9); // 230 is sat2.w

        class Rain1 {
            constructor() {
                this.rain = true;
                // random number between two numbers == Math.random() * (max-min) + min);
                this.leftEdge = cloud1.x + 50;
                this.rightEdge = cloud1.x + cloud1.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = cloud1.y + (cloud1.h * 0.4);
                this.w = 2;
                this.h = 15;
                this.rainColor1 = biColorGradient;
                this.rainColor2 = triColorGradient;
                this.weight = Math.random()*2;
                this.directionX = Math.random()*1 - 1
                this.headsOrTales = Math.floor(Math.random()*2);
            }
            draw(ctx) {
                //rain
                const drawRain = (ctx) => {
                    ctx.save();
                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x, (this.y + this.h));
                    gradient.addColorStop(0, darkBlue);
                    gradient.addColorStop(1, aliceBlue);
                    ctx.strokeStyle = gradient;

                    ctx.lineWidth = this.w;
                    ctx.beginPath(); // Start a new path
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x, this.y + this.h);
                    ctx.stroke();
                    ctx.restore();
                }
                if(this.rain) drawRain(ctx);
                // const drawRainBox = () => {
                //     ctx.fillStyle = 'red'
                //     ctx.fillRect(cloud1.x + 50, cloud1.y, cloud1.w - 100, cloud1.h)
                // }
                // drawRainBox();
            }
            update () {
                const rainFall = () => {
                    if (this.y < cnvs.height) {
                        this.weight += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        // reset
                        this.weight = Math.random()*2;
                        this.y = cloud1.y + (cloud1.h * 0.4);
                        this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                    }
                }
                if(this.rain) rainFall();
            }
        }
        const rainDrops1 = []
        const numberOfRainDrops = 20
        for (let i=0; i<numberOfRainDrops; i++) {
            rainDrops1.push(new Rain1())
        }

        class Rain2 {
            constructor() {
                this.rain = true;
                // random number between two numbers == Math.random() * (max-min) + min);
                this.leftEdge = cloud2.x + 50;
                this.rightEdge = cloud2.x + cloud2.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = cloud2.y + (cloud2.h * 0.4);
                this.w = 2;
                this.h = 15;
                this.rainColor1 = biColorGradient;
                this.rainColor2 = triColorGradient;
                this.weight = Math.random()*2;
                this.directionX = Math.random()*1 - 1
                this.headsOrTales = Math.floor(Math.random()*2);
            }
            draw(ctx) {
                //rain
                const drawRain = (ctx) => {
                    ctx.save();
                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x, (this.y + this.h));
                    gradient.addColorStop(0, darkBlue);
                    gradient.addColorStop(1, aliceBlue);
                    ctx.strokeStyle = gradient;

                    ctx.lineWidth = this.w;
                    ctx.beginPath(); // Start a new path
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x, this.y + this.h);
                    ctx.stroke();
                    ctx.restore();
                }
                if(this.rain) drawRain(ctx);
                // const drawRainBox = () => {
                //     ctx.fillStyle = 'red'
                //     ctx.fillRect(cloud1.x + 50, cloud1.y, cloud1.w - 100, cloud1.h)
                // }
                // drawRainBox();
            }
            update () {
                const rainFall = () => {
                    if (this.y < cnvs.height) {
                        this.weight += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        // reset
                        this.weight = Math.random()*2;
                        this.y = cloud2.y + (cloud2.h * 0.4);
                        this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                    }
                }
                if(this.rain) rainFall();
            }
        }
        const rainDrops2 = []
        for (let i=0; i<numberOfRainDrops; i++) {
            rainDrops2.push(new Rain2())
        }

        class SatelliteRain1 {
            constructor() {
                this.rain = true;
                this.leftEdge = sat1.x + 50;
                this.rightEdge = sat1.x + sat1.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = sat1.y + (sat1.h * 0.4);
                this.w = 2;
                this.h = 15;
                this.rainColor1 = biColorGradient;
                this.rainColor2 = triColorGradient;
                this.weight = Math.random()*2;
                this.directionX = Math.random()*1 - 1
                this.headsOrTales = Math.floor(Math.random()*2);
            }
            draw(ctx) {
                //rain
                const drawRain = (ctx) => {
                    ctx.save();
                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x, (this.y + this.h));
                    gradient.addColorStop(0, darkBlue);
                    gradient.addColorStop(1, aliceBlue);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = this.w;
                    ctx.beginPath(); // Start a new path
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x, this.y + this.h);
                    ctx.stroke();
                    ctx.restore();
                }
                if (this.rain) drawRain(ctx);
                // const drawRainBox = () => {
                //     ctx.fillStyle = 'red'
                //     ctx.fillRect(sat1.x + 50, sat1.y, sat1.w - 100, sat1.h)
                // }
                // drawRainBox();
            }
            update () {
                const rainFall = () => {
                    if (this.y < cnvs.height) {
                        this.weight += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        // reset
                        this.weight = Math.random()*2;
                        this.y = sat1.y + (sat1.h * 0.4);
                        this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                    }
                }
                if (this.rain) rainFall();
            }
        }

        let sat1RainDrops = [];
        for(let i=0; i<numberOfRainDrops; i++) {
            sat1RainDrops.push(new SatelliteRain1())
        }

        class SatelliteRain2 {
            constructor() {
                this.rain = true;
                // random number between two numbers == Math.random() * (max-min) + min);
                this.leftEdge = sat2.x + 50;
                this.rightEdge = sat2.x + sat2.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = sat2.y + (sat2.h * 0.4);
                this.w = 2;
                this.h = 15;
                this.rainColor1 = biColorGradient;
                this.rainColor2 = triColorGradient;
                this.weight = Math.random()*2;
                this.directionX = Math.random()*1 - 1
                this.headsOrTales = Math.floor(Math.random()*2);
            }

            draw(ctx) {
                //rain
                const drawRain = (ctx) => {
                    ctx.save();
                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x, (this.y + this.h));
                    gradient.addColorStop(0, darkBlue);
                    gradient.addColorStop(1, aliceBlue);
                    ctx.strokeStyle = gradient;

                    ctx.lineWidth = this.w;
                    ctx.beginPath(); // Start a new path
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.x, this.y + this.h);
                    ctx.stroke();
                    ctx.restore();
                }
                if(this.rain) drawRain(ctx);
                // const drawRainBox = () => {
                //     ctx.fillStyle = 'red'
                //     ctx.fillRect(sat2.x + 50, sat2.y, sat2.w - 100, sat2.h)
                // }
                // drawRainBox();
            }
            update () {
                const rainFall = () => {
                    if (this.y < cnvs.height) {
                        this.weight += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        // reset
                        this.weight = Math.random()*2;
                        this.y = sat2.y + (sat2.h * 0.4);
                        this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                    }
                }
                if(this.rain) rainFall();
            }
        }
        let sat2RainDrops = [];
        for(let i=0; i<numberOfRainDrops; i++) {
            sat1RainDrops.push(new SatelliteRain2())
        }

        class Snow1 {
            constructor() {
                this.w = 11;
                this.h = 11;
                this.leftEdge = cloud1.x + 50;
                this.rightEdge = cloud1.x + cloud1.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = cloud1.y + (cloud1.h * 0.5);
                this.minWeight = 1;
                this.maxWeight = 2;
                this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                this.directionX = Math.random()*1 - 1;
                this.headsOrTales = Math.floor(Math.random()*2);
                this.scaleMin = -1;
                this.scaleMax = 1;
                this.scale = Math.random() * (this.scaleMax - this.scaleMin) + this.scaleMin;
                this.scaleDirection = -1;
                this.cX = this.x + this.w * 0.5;
                this.cY = this.y + this.h * 0.5;
                this.angle = 0;
                this.delay = Math.random() * 3000;



            }
            draw(ctx) {
                ctx.save();
                ctx.translate(this.cX, this.cY);
                ctx.scale(this.scale, 1);
                ctx.translate(-this.cX, -this.cY);
                ctx.drawImage(snowFlakeSprite, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            update() {
                const resetSnow = () => {
                        this.y = cloud1.y + (cloud1.h * 0.4);
                        this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                }
                const snowFall = () => {
                    if (this.y < cnvs.height) {
                        this.wieght += 0.01;
                        this.y += this.weight;
                    } else {
                        resetSnow();
                    }
                }
                snowFall();

                const snowRevolutions = () => {
                    //spin off y axis based on x values
                    if (this.scale >= 1) this.scaleDirection = -1;
                    if (this.scale <= -1) this.scaleDirection = 1;
                    if (this.scaleDirection === -1) this.scale -= .02;
                    if (this.scaleDirection === 1) this.scale += .02;

                }
                snowRevolutions();
            }
        }

        let snowFlakes1 = [];
        let numberOfSnowFlakes = 20;
        for(let i=0; i<numberOfSnowFlakes; i++) {
            snowFlakes1.push(new Snow1())
        }

        class Snow2 {
            constructor() {
                this.w = 11;
                this.h = 11;
                this.leftEdge = cloud2.x + 50;
                this.rightEdge = cloud2.x + cloud2.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = cloud2.y + (cloud2.h * 0.5);
                this.minWeight = 1;
                this.maxWeight = 2;
                this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                this.directionX = Math.random()*1 - 1;
                this.headsOrTales = Math.floor(Math.random()*2);
                this.scaleMin = -1;
                this.scaleMax = 1;
                this.scale = Math.random() * (this.scaleMax - this.scaleMin) + this.scaleMin;
                this.scaleDirection = -1;
                this.cX = this.x + this.w * 0.5;
                this.cY = this.y + this.h * 0.5;
                this.angle = 0;
                this.delay = Math.random() * 3000;
            }
            draw(ctx) {
                ctx.save();
                ctx.translate(this.cX, this.cY);
                ctx.scale(this.scale, 1);
                ctx.translate(-this.cX, -this.cY);
                ctx.drawImage(snowFlakeSprite, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            update() {
                const resetSnow = () => {
                        this.y = cloud2.y + (cloud2.h * 0.4);
                        this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                }
                const snowFall = () => {
                    if (this.y < cnvs.height) {
                        this.wieght += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        resetSnow();
                    }
                }
                snowFall();

                const snowRevolutions = () => {
                    //spin off y axis based on x values
                    if (this.scale >= 1) this.scaleDirection = -1;
                    if (this.scale <= -1) this.scaleDirection = 1;
                    if (this.scaleDirection === -1) this.scale -= .02;
                    if (this.scaleDirection === 1) this.scale += .02;

                }
                snowRevolutions();
            }
        }

        let snowFlakes2 = [];
        for(let i=0; i<numberOfSnowFlakes; i++) {
            snowFlakes2.push(new Snow2())
        }

        class SatelliteSnow1 {
            constructor() {
                this.w = 11;
                this.h = 11;
                this.leftEdge = sat1.x + 50;
                this.rightEdge = sat1.x + sat1.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = sat1.y + (sat1.h * 0.5);
                this.minWeight = 1;
                this.maxWeight = 2;
                this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                this.directionX = Math.random() * 1 - 1;
                this.headsOrTales = Math.floor(Math.random()*2);
                this.scaleMin = -1;
                this.scaleMax = 1;
                this.scale = Math.random() * (this.scaleMax - this.scaleMin) + this.scaleMin;
                this.scaleDirection = -1;
                this.cX = this.x + this.w * 0.5;
                this.cY = this.y + this.h * 0.5;
                this.angle = 0;
                this.delay = Math.random() * 3000;
            }
            draw(ctx) {
                ctx.save();
                ctx.translate(this.cX, this.cY);
                ctx.scale(this.scale, 1);
                ctx.translate(-this.cX, -this.cY);
                ctx.drawImage(snowFlakeSprite, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            update() {
                const resetSnow = () => {
                        this.y = sat1.y + (sat1.h * 0.4);
                        this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                }
                const snowFall = () => {
                    if (this.y < cnvs.height) {
                        this.wieght += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        resetSnow();
                    }
                }
                snowFall();

                const snowRevolutions = () => {
                    //spin off y axis based on x values
                    if (this.scale >= 1) this.scaleDirection = -1;
                    if (this.scale <= -1) this.scaleDirection = 1;
                    if (this.scaleDirection === -1) this.scale -= .02;
                    if (this.scaleDirection === 1) this.scale += .02;

                }
                snowRevolutions();
            }
        }
        let satSnowFlakes1 = [];
        for(let i=0; i<numberOfSnowFlakes; i++) {
            satSnowFlakes1.push(new SatelliteSnow1())
        }

        class SatelliteSnow2 {
            constructor() {
                this.w = 11;
                this.h = 11;
                this.leftEdge = sat2.x + 50;
                this.rightEdge = sat2.x + sat2.w - 50;
                this.x = Math.random() * (this.rightEdge - this.leftEdge) + this.leftEdge;
                this.y = sat2.y + (sat2.h * 0.5);
                this.minWeight = 1;
                this.maxWeight = 2;
                this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                this.directionX = Math.random() * 1 - 1;
                this.headsOrTales = Math.floor(Math.random()*2);
                this.scaleMin = -1;
                this.scaleMax = 1;
                this.scale = Math.random() * (this.scaleMax - this.scaleMin) + this.scaleMin;
                this.scaleDirection = -1;
                this.cX = this.x + this.w * 0.5;
                this.cY = this.y + this.h * 0.5;
                this.angle = 0;
                this.delay = Math.random() * 3000;
            }
            draw(ctx) {
                ctx.save();
                ctx.translate(this.cX, this.cY);
                ctx.scale(this.scale, 1);
                ctx.translate(-this.cX, -this.cY);
                ctx.drawImage(snowFlakeSprite, this.x, this.y, this.w, this.h);
                ctx.restore();
            }
            update() {
                const resetSnow = () => {
                        this.y = sat2.y + (sat2.h * 0.4);
                        this.weight = Math.random() * (this.maxWeight - this.minWeight) + this.minWeight;
                }
                const snowFall = () => {
                    if (this.y < cnvs.height) {
                        this.wieght += 0.01;
                        this.y += this.weight;
                        // if (this.headsOrTales === 0) this.x += this.directionX;
                        // if (this.headsOrTales === 1) this.x -= this.directionX;
                    } else {
                        resetSnow();
                    }
                }
                snowFall();
                const snowRevolutions = () => {
                    //spin off y axis based on x values
                    if (this.scale >= 1) this.scaleDirection = -1;
                    if (this.scale <= -1) this.scaleDirection = 1;
                    if (this.scaleDirection === -1) this.scale -= .02;
                    if (this.scaleDirection === 1) this.scale += .02;

                }
                snowRevolutions();
            }
        }
        let satSnowFlakes2 = [];
        for(let i=0; i<numberOfSnowFlakes; i++) {
            satSnowFlakes2.push(new SatelliteSnow2())
        }

        class Lightning1 {
            constructor() {
                this.lightningW = 90;
                this.lightningH = 120;
                this.lightningX_Offset = 75;
                this.lightningY_Offset = 120;
                this.lightningX = cloud1.x + this.lightningX_Offset;
                this.lightningY = cloud1.y + this.lightningY_Offset;
                this.minFrameDelay = 30;
                this.maxFrameDelay = 180
                this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                this.lightningFade = true;
                this.lightningOpacity = 1;
                this.frameCounter = 0;
            }
            draw (ctx) {
                ctx.save();
                ctx.globalAlpha = this.lightningOpacity;
                ctx.drawImage(lightningSprite, this.lightningX, this.lightningY, this.lightningW, this.lightningH);
                ctx.restore();
            }
            update () {
                const resetLightning = () => {
                    this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                    this.lightningFade = true;
                    this.lightningOpacity = 1;
                    this.frameCounter = 0;
                }
                // can't let the opacity go to close to 0 because it will reset globalAlpha to 1
                if (this.lightningFade && this.lightningOpacity > .01) {
                    this.lightningOpacity -= .005;
                }
                if (this.lightningOpacity <= .01) {
                    this.frameCounter++
                    if(this.frameCounter > this.lightningDelayPerFrame) resetLightning();
                }
            }
        }
        const lightning1 = new Lightning1()

        class Lightning2 {
            constructor() {
                this.lightningW = 90;
                this.lightningH = 120;
                this.lightningX_Offset = 75;
                this.lightningY_Offset = 120;
                this.lightningX = cloud2.x + this.lightningX_Offset;
                this.lightningY = cloud2.y + this.lightningY_Offset;
                this.minFrameDelay = 30;
                this.maxFrameDelay = 180
                this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                this.lightningFade = true;
                this.lightningOpacity = 1;
                this.frameCounter = 0;
            }
            draw (ctx) {
                ctx.save();
                ctx.globalAlpha = this.lightningOpacity;
                ctx.drawImage(lightningSprite, this.lightningX, this.lightningY, this.lightningW, this.lightningH);
                ctx.restore();
            }
            update () {
                const resetLightning = () => {
                    this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                    this.lightningFade = true;
                    this.lightningOpacity = 1;
                    this.frameCounter = 0;
                }
                // can't let the opacity go to close to 0 because it will reset globalAlpha to 1
                if (this.lightningFade && this.lightningOpacity > .01) {
                    this.lightningOpacity -= .005;
                }
                if (this.lightningOpacity <= .01) {
                    this.frameCounter++
                    if(this.frameCounter > this.lightningDelayPerFrame) resetLightning();
                }
            }
        }
        const lightning2 = new Lightning2()

        class SatLightning1 {
            constructor() {
                this.lightningW = 90;
                this.lightningH = 120;
                this.lightningX_Offset = 75;
                this.lightningY_Offset = 120;
                this.lightningX = sat1.x + this.lightningX_Offset;
                this.lightningY = sat1.y + this.lightningY_Offset;
                this.minFrameDelay = 30;
                this.maxFrameDelay = 180
                this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                this.lightningFade = true;
                this.lightningOpacity = 1;
                this.frameCounter = 0;
            }
            draw (ctx) {
                ctx.save();
                ctx.globalAlpha = this.lightningOpacity;
                ctx.drawImage(lightningSprite, this.lightningX, this.lightningY, this.lightningW, this.lightningH);
                ctx.restore();
            }
            update () {
                const resetLightning = () => {
                    this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                    this.lightningFade = true;
                    this.lightningOpacity = 1;
                    this.frameCounter = 0;
                }
                // can't let the opacity go to close to 0 because it will reset globalAlpha to 1
                if (this.lightningFade && this.lightningOpacity > .01) {
                    this.lightningOpacity -= .005;
                }
                if (this.lightningOpacity <= .01) {
                    this.frameCounter++
                    if(this.frameCounter > this.lightningDelayPerFrame) resetLightning();
                }
            }
        }
        const satLightning1 = new SatLightning1()

        class SatLightning2 {
            constructor() {
                this.lightningW = 90;
                this.lightningH = 120;
                this.lightningX_Offset = 75;
                this.lightningY_Offset = 120;
                this.lightningX = sat2.x + this.lightningX_Offset;
                this.lightningY = sat2.y + this.lightningY_Offset;
                this.minFrameDelay = 30;
                this.maxFrameDelay = 180
                this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                this.lightningFade = true;
                this.lightningOpacity = 1;
                this.frameCounter = 0;
            }
            draw (ctx) {
                ctx.save();
                ctx.globalAlpha = this.lightningOpacity;
                ctx.drawImage(lightningSprite, this.lightningX, this.lightningY, this.lightningW, this.lightningH);
                ctx.restore();
            }
            update () {
                const resetLightning = () => {
                    this.lightningDelayPerFrame = Math.floor(Math.random()*(this.maxFrameDelay - this.minFrameDelay + 1) + this.minFrameDelay); // 60fps * 3sec = 180
                    this.lightningFade = true;
                    this.lightningOpacity = 1;
                    this.frameCounter = 0;
                }
                // can't let the opacity go to close to 0 because it will reset globalAlpha to 1
                if (this.lightningFade && this.lightningOpacity > .01) {
                    this.lightningOpacity -= .005;
                }
                if (this.lightningOpacity <= .01) {
                    this.frameCounter++
                    if(this.frameCounter > this.lightningDelayPerFrame) resetLightning();
                }
            }
        }
        const satLightning2 = new SatLightning2()

        class Fog {
            constructor(x) {
                this.x = x;
                this.y = cnvs.height;
                this.rotation = 0;
                this.startAngle = 0;
                this.endAngle = Math.PI * 2;
                this.radialR0 = 0;
                this.radialR1 = cnvs.width;
                this.transparentAliceBlue = 'rgba(240, 248, 255, 0.5)';
                this.transparentDarkBlue = 'rgba(0, 8, 47, 0.5)'
            }
            draw(ctx) {
                ctx.save();
                const gradient = ctx.createRadialGradient(this.x, this.y, this.radialR0, this.x, this.y, this.radialR1, 0, Math.PI*2);
                gradient.addColorStop(0, this.transparentAliceBlue);
                gradient.addColorStop(1, this.transparentDarkBlue);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.translate(this.x, this.y);
                ctx.scale(1, .25)
                ctx.translate(-this.x, -this.y);
                ctx.arc(this.x, this.y, this.radialR1, this.startAngle, this.endAngle);
                ctx.fill();
                ctx.restore();
            }
        }

        const fog = new Fog(cnvs.width * .5)

        class Haze extends Fog {
            constructor(x) {
            super();
            this.x = x;
            this.transparentHaze = 'rgba(193, 175, 161, .5)'
            }
            draw(ctx) {
                ctx.save();
                const gradient = ctx.createRadialGradient(this.x, this.y, this.radialR0, this.x, this.y, this.radialR1, 0, Math.PI*2);
                gradient.addColorStop(0, this.transparentHaze);
                gradient.addColorStop(1, this.transparentDarkBlue);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.translate(this.x, this.y);
                ctx.scale(1, .25)
                ctx.translate(-this.x, -this.y);
                ctx.arc(this.x, this.y, this.radialR1, this.startAngle, this.endAngle);
                ctx.fill();
                ctx.restore();
            }
        }

        const haze = new Haze(cnvs.width * 0.5)

        let frames_per_second = 60;
        let interval = Math.floor(1000 / frames_per_second); // rounding down since our code will rarely run at the exact interval
        let startTime = performance.now();
        let previousTime = startTime;
        let currentTime = 0;
        let deltaTime = 0;

        const animate = (timestamp) => {

            currentTime = timestamp;
            deltaTime = currentTime - previousTime;

            // ALL ANIMATION GOES INSIDE THIS CONDITION WHICH IS THROTTLED FPS

            // if (deltaTime > interval) { THROTTLED FPS WAS CAUSING FLICKERING IN SAFARI
                previousTime = currentTime - (deltaTime % interval);

                // add your visual updates-related code
                gameFrame++;
                ctx.clearRect(0,0,cnvs.width,cnvs.height)

                ctx.save();
                ctx.fillStyle = "#00082f";
                ctx.fillRect(0,0,cnvs.width, cnvs.height)
                ctx.restore();
                
                if (weatherContext.weather[0].haze) {
                    haze.draw(ctx);
                }
                if (weatherContext.weather[0].fog) {
                    fog.draw(ctx);
                }

                bonsai.draw(ctx);
                bonsai.update();

                // TEXT
                ctx.drawImage(meriText, bonsai.x, bonsai.y + 10, 500, 500)
                // STICKERS
                // ctx.drawImage(titleStickerImage, 0, 0, 300, 300)
                // ctx.drawImage(ctaSticker, cnvs.width-300, 0, 300, 300)

                if (weatherContext.weather[0].rain) {
                    rainDrops1.forEach(rainDrop => {
                        rainDrop.draw(ctx)
                        rainDrop.update()
                    })
                    rainDrops2.forEach(rainDrop => {
                    rainDrop.draw(ctx)
                    rainDrop.update()
                    })
                    sat1RainDrops.forEach(rainDrop => {
                        rainDrop.draw(ctx);
                        rainDrop.update();
                    })
                    sat2RainDrops.forEach(rainDrop => {
                        rainDrop.draw(ctx);
                        rainDrop.update();
                    })
                }



                if (weatherContext.weather[0].snow) {
                    snowFlakes1.forEach(snowFlake => {
                        if (gameFrame > snowFlake.delay) {
                            snowFlake.draw(ctx)
                            snowFlake.update()
                        }
                        })
                        snowFlakes2.forEach(snowFlake => {
                        if (gameFrame > snowFlake.delay) {
                            snowFlake.draw(ctx)
                            snowFlake.update()
                        }
                        })
                        satSnowFlakes1.forEach(snowFlake => {
                        if (gameFrame > snowFlake.delay) {
                            snowFlake.draw(ctx)
                            snowFlake.update()
                        }
                        })
                        satSnowFlakes2.forEach(snowFlake => {
                        if (gameFrame > snowFlake.delay) {
                            snowFlake.draw(ctx)
                            snowFlake.update()
                        }
                        })
                }

                if (weatherContext.weather[0].sun) {
                    sun.draw(ctx);
                }

                if (weatherContext.weather[0].thunder) {
                    lightning1.draw(ctx)
                    lightning1.update()
                    lightning2.draw(ctx)
                    lightning2.update()
                    satLightning1.draw(ctx)
                    satLightning1.update()
                    satLightning2.draw(ctx)
                    satLightning2.update()
                }

                if (weatherContext.weather[0].cloud) {
                    cloud1.draw(ctx);
                    cloud1.update();
                    cloud2.draw(ctx);
                    cloud2.update();
                    sat1.draw(ctx);
                    sat1.update();
                    sat2.draw(ctx);
                    sat2.update();
                }
            // } THROTTLED FPS WAS CAUSING FLICKERING IN SAFARI

            //   robin.draw(ctx);
            //   robin.update();
  
            //   greenLeaves.forEach(greenLeaf => {
            //       greenLeaf.draw(ctx);
            //       greenLeaf.update();
            //   })
                requestAnimationFrame(animate)

                // supposed to help with performance
                return () => {
                    window.removeEventListener('resize', changeCanvasWidth)
                }
        }
        animate(0);

        // supposed to help with performance
        const changeCanvasWidth = () => {
            setWidth(window.innerWidth);
            window.cancelAnimationFrame(animate);
        }

        window.addEventListener('resize', changeCanvasWidth)

    }, [cnvsWidth, weatherContext])

    return (
        <div className="cnvs-wrapper">
            <canvas id="cnvs" ref={cnvsRef} width={cnvsWidth} height="400" border="red" />
            {/* <WeatherButtonContainer /> */}
        </div>
    )
}

export default Canvas