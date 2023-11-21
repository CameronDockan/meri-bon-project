'use client'

import {FaTwitter, FaInstagram, FaTiktok, FaTumblr, FaRegCopyright} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {


    const handleClick = () => {
        alert('not a real link')
    }

    return (
        <div className="footer-container">
            <ul>
                <li><Link className='footer-link' href={'/contact/'}>CONTACT</Link></li>
                <li><Link className='footer-link' href={'/about/'}>ABOUT</Link></li>
                <li><Link className='footer-link' href={'/shop/all/'}>SHOP</Link></li>
                <li><Link className='footer-link' href={'/cart/'}>CART</Link></li>
            </ul>
            <div className="socials-container">
                <Link href={'/'} onClick={handleClick}><FaTwitter className='social-icons' /></Link>
                <Link href={'/'} onClick={handleClick}><FaInstagram className='social-icons' /></Link>
                <Link href={'/'} onClick={handleClick}><FaTiktok className='social-icons' /></Link>
                <Link href={'/'} onClick={handleClick}><FaTumblr className='social-icons' /></Link>

            </div>
            <div>
                <p className='address'>
                    1472-2 Tower SQ, Ventura, CA 93003
                </p>
                <div className='copyright'>
                    <FaRegCopyright className='copyright-icon' /> <p>MERI-BON 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer