import {FaTwitter, FaInstagram, FaTiktok, FaTumblr, FaRegCopyright} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <ul>
                    <li>CONTACT</li>
                    <li>ABOUT</li>
                    <li>SHOP</li>
                    <li>CART</li>
                </ul>
                <div className="socials-container">
                    <Link href={'/'}><FaTwitter className='social-icons' /></Link>
                    <Link href={'/'}><FaInstagram className='social-icons' /></Link>
                    <Link href={'/'}><FaTiktok className='social-icons' /></Link>
                    <Link href={'/'}><FaTumblr className='social-icons' /></Link>

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
        </>
    )
}

export default Footer