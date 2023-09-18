'use client'

import Link from 'next/link'
import AppContext from './app-context';
import { useContext } from 'react';

const Nav = () => {

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

        

    return (
        <nav className="nav-container">

            <div className="logo">
                <p>MERI-BON</p>
            </div>

            <ul className="top-drop">
                <li className='li-list-container'><Link className='link' href='/'>HOME</Link></li>
                <li className='li-list-container shop-list-item'> <Link className='link' href='/shop/all'>SHOP</Link>
                    <ul className='shop-drop'>
                        <li className='bonsai-list-item'><Link className='link' href='/shop/bonsai'>BONSAI</Link></li>
                        <li><Link className='link' href='/shop/seeds'>SEEDS</Link></li>
                        <li><Link className='link' href='/shop/tools'>TOOLS</Link></li>
                        <li><Link className='link' href='/shop/misc'>MISC</Link></li>
                    </ul>
                </li>
                <li className='li-list-container'><Link className='link' href='#'>ABOUT</Link></li>
                <li className='li-list-container'><Link className='link' href='#'>CONTACT</Link></li>
                <li className='li-list-container'><Link className='link' href='/cart'>{'CART' + ' (' + sumOfQuantity + ')'}</Link></li>
            </ul>
        </nav>
    )
}
export default Nav