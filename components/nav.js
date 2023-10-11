'use client'

import Link from 'next/link'
import AppContext from './app-context';
import { useContext, useState } from 'react';

const Nav = () => {

    // cart
    const context = useContext(AppContext)

        let cartItemsQuantity;
        let sumOfQuantity;

        if (context.cart && context.cart.length > 0) {
            cartItemsQuantity = context.cart.map(item => item.quantity)
            sumOfQuantity = cartItemsQuantity.reduce((a,v) => a + v)
        } else {
            cartItemsQuantity = 0;
            sumOfQuantity = 0;
        }

    // burger-btn
    const [menuIsActive, setMIA] = useState(false)

    const toggleMenu = () => {
        setMIA(!menuIsActive)
        // console.log(menuIsActive)
    }

    const deactivateMenu = () => {
        setMIA(false)
        console.log(menuIsActive)
    }

    // drop-btn
    const [isDropped, setIsDropped] = useState(false);

    const toggleDrop = () => {
        setIsDropped(!isDropped)
        console.log(isDropped)
    }
        

    return (
        <nav className="nav-container">

            <div className="logo">
                <Link className='link' href="/">MERI-BON</Link>
            </div>

            <ul className="top-ul">
                <li className='li-list-container'><Link className='link' href='/'>HOME</Link></li>
                <li className='li-list-container shop-list-item'> <Link className='link' href='/shop/all'>SHOP</Link>
                    <ul className='shop-drop'>
                        <li className='bonsai-list-item'><Link className='inner-link' href='/shop/bonsai'>BONSAI</Link></li>
                        <li><Link className='inner-link' href='/shop/seeds'>SEEDS</Link></li>
                        <li><Link className='inner-link' href='/shop/tools'>TOOLS</Link></li>
                        <li><Link className='inner-link' href='/shop/misc'>MISC</Link></li>
                    </ul>
                </li>
                <li className='li-list-container'><Link className='link' href='/about'>ABOUT</Link></li>
                <li className='li-list-container'><Link className='link' href='/contact'>CONTACT</Link></li>
                <li className='li-list-container'><Link className='link' href='/cart'>{'CART' + ' (' + sumOfQuantity + ')'}</Link></li>
            </ul>

            <div className={menuIsActive ? 'mobile-ul-container active' : 'mobile-ul-container inactive'}>
                <ul className='mobile-ul active'>
                    <li onClick={deactivateMenu} className='mobile-li'><Link className='link' href='/'>HOME</Link></li>
                    <li className='mobile-li mobile-shop-li'>
                        <button onClick={toggleDrop} className='shop-btn'>SHOP</button>
                        <button 
                            className={isDropped ? 'drop-btn active' : 'drop-btn inactive'}
                            onClick={toggleDrop}
                        >
                            <div>
                                <svg width="18" height="15" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 30L35.3205 0L0.679492 0L18 30Z" fill="black"/>
                                </svg>
                            </div>
                        </button>
                        <ul className={isDropped ? 'mobile-shop-drop active' : 'mobile-shop-drop inactive'}>
                            <li onClick={deactivateMenu} ><Link className={isDropped ? 'mobile-inner-li active' : 'mobile-inner-li inactive'} href='/shop/all'>ALL</Link></li>
                            <li onClick={deactivateMenu} ><Link className={isDropped ? 'mobile-inner-li active' : 'mobile-inner-li inactive'} href='/shop/bonsai'>BONSAI</Link></li>
                            <li onClick={deactivateMenu} ><Link className={isDropped ? 'mobile-inner-li active' : 'mobile-inner-li inactive'} href='/shop/seeds'>SEEDS</Link></li>
                            <li onClick={deactivateMenu} ><Link className={isDropped ? 'mobile-inner-li active' : 'mobile-inner-li inactive'} href='/shop/tools'>TOOLS</Link></li>
                            <li onClick={deactivateMenu} ><Link className={isDropped ? 'mobile-inner-li active' : 'mobile-inner-li inactive'} href='/shop/misc'>MISC</Link></li>
                        </ul>
                    </li>
                    <li onClick={deactivateMenu} className='mobile-li'><Link className='link' href='/about'>ABOUT</Link></li>
                    <li onClick={deactivateMenu} className='mobile-li'><Link className='link' href='/contact'>CONTACT</Link></li>
                    <li onClick={deactivateMenu} className='mobile-li'><Link className='link' href='/cart'>{'CART' + ' (' + sumOfQuantity + ')'}</Link></li>
                </ul>
            </div>

            <button 
            className='burger-btn'
            onClick={toggleMenu}
                >
                <div  className={menuIsActive ? 'line1 active' : 'line1 inactive'}></div>
                <div className={menuIsActive ? 'line2 active' : 'line2 inactive'}></div>
                <div className={menuIsActive ? 'line3 active' : 'line3 inactive'}></div>

                <div className={menuIsActive ? 'burger-menu-text-container active' : 'burger-menu-text-container inactive'}><p>MENU</p></div>
            </button>
        </nav>
    )
}
export default Nav