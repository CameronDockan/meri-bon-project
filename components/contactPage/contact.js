"use client"

import Link from "next/link"
import Image from "next/image"
import helixTree from "@/public/helix-tree.png"
import { useState } from "react"

const Contact = () => {

    const [treeSize, setTS] = useState({
        w: 1119 /4,
        h: 1300 /4
    })
    // let treeW = 1119;
    // let treeH = 1300;



    return (
        <div className="contact-main-container">
            <div className="contact-title-container">
                <h1>CONTACT</h1>
                <div>
                    <p>mock</p>
                </div>
            </div>
            <div className="contact-info-container">
                <Image
                    id="left-tree"
                    src={helixTree}
                    alt='verticle dna helix-like branches with leaves'
                    width={treeSize.w}
                    height={treeSize.h}
                 />
                <div className="contact-info-middle-column">
                    <div className="contact-minor-info-container">
                        <h2>CUSTOMER SERVICE</h2>
                        <p>1-877-486-0396</p>
                    </div>
                    <div className="contact-minor-info-container">
                        <h2>E-MAIL</h2>
                        <Link href="#">info@meri_bon.com</Link>
                    </div>
                    <div className="contact-minor-info-container">
                        <h2>MERI_BON HEADQUARTERS</h2>
                        <p className="address">1562-2 Hermes SQ, Indigo, CA 93003</p>
                        <p className="phone">Phone: 805-694-2568</p>
                        <p className="fax">Fax: 805-664-2566</p>
                    </div>
                </div>
                <Image
                    id="right-tree"
                    src={helixTree}
                    alt='verticle dna helix-like branches with leaves'
                    width={treeSize.w}
                    height={treeSize.h}
                 />
            </div>
        </div>
    )
}

export default Contact