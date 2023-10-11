/* eslint-disable @next/next/no-img-element */
/**@type {HTMLCanvasElement}*/

import {useEffect, useRef} from 'react'

const Canvas = () => {
    const cnvsRef = useRef(null)

    useEffect(() => {

        const cnvs = cnvsRef.current
        const ctx = cnvs.getContext('2d')

        cnvs.width = window.innerWidth;

        const bonsaiSprite = new Image()
        bonsaiSprite.src = '/bonsai.png'
        // ILS informal leaf sprite
        const greenILS = new Image()
        greenILS.src = '/small-green-informal-leaf.png'

        const sBonsai = new Image()
        sBonsai.src = '/sBonsai.png'

        const robinSprite = new Image ()
        robinSprite.src = '/small-pixel-robin.png'

        const meriText = new Image ()
        // meriText.src ='/meribon-text.png'
        meriText.src ='/meribon-text-white-6x5.png'
        // meriText.src ='/meribon-text-white-5x5.png'


        // const ABM = new Image ()
        // ABM.src = '/ABM.png'

        const titleStickerImage = new Image ()
        titleStickerImage.src = '/title-sticker.png'

        const ctaSticker = new Image ()
        ctaSticker.src= '/cta-sticker.png'


        let gameFrame = 0;
        let centeredX = cnvs.width*.5

        class Bonsai {
            constructor() {
                this.w = 500;
                this.h = 500;
                this.x = centeredX - (this.w*.5);
                this.y = -this.h*.17;
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

        const animate = () => {
            gameFrame++;
            ctx.clearRect(0,0,cnvs.width,cnvs.height)

            ctx.fillStyle = "#00082f";
            ctx.fillRect(0,0,cnvs.width, cnvs.height)

            bonsai.draw(ctx);
            bonsai.update();

            // TEXT
            ctx.drawImage(meriText, bonsai.x, bonsai.y + 10, 500, 500)

            // STICKERS
            ctx.drawImage(titleStickerImage, 0, 0, 300, 300);
            ctx.drawImage(ctaSticker, cnvs.width-300, 0, 300, 300)

            robin.draw(ctx)
            robin.update();

            greenLeaves.forEach(greenLeaf => {
                greenLeaf.draw(ctx);
                greenLeaf.update();
            })

            // ctx.drawImage(greenILS,100,100,43,43)

            requestAnimationFrame(animate)
        }
        animate();

    }, [])

    return (
        <div className="cnvs-wrapper">
            <canvas id="cnvs" ref={cnvsRef} width="600" height="300" />
        </div>
    )
}

export default Canvas