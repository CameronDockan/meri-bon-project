'use client'

import productData from '@/public/product-data/productData'
import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import CartContext from '@/components/cart-context';
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

const seeds = productData.filter(prod => {
    if (prod.seed === true) return true
})

export function generateStaticParams () {
    const seedIDs = seeds.map(seed => {
        return (
            {seedID: `seed${seed.seedID}`}
        )
    })
    return seedIDs
}

const SeedDetailsPage = ({params}) => {

    const id = params;

    console.log(params)

    const context = useContext(CartContext)

    const addToCart = (prod) => {
        context.setCart(
            prevCart => prevCart.some(item => item.id === prod.id)
            ? prevCart.map(item => item.id === prod.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item 
              )
            : [ ...context.cart, prod ]
        )
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cartString = localStorage.getItem('theCart')
            const parsedCart = JSON.parse(cartString)
            context.setCart(parsedCart)
        }
    }, [])

    let cartItemsQuantity = 0;
    let QuantitySum = 0;

    if (context.cart && context.cart.length > 0) {
        cartItemsQuantity = context.cart.map(item => item.quantity)
        QuantitySum = cartItemsQuantity.reduce((a,v) => a + v)
    } else {
        cartItemsQuantity = 0; 
        QuantitySum = 0;
    }


    let selectedProduct = productData.filter(seed => 'seed' + seed.seedID == id.seedID)
    let selectedProductElement = selectedProduct.map(prod => {

        let prevProd;
        if (prod.seedID <= 1) prevProd = seeds.length
        else prevProd = prod.seedID -1;

        let nextProd;
        if (prod.seedID >= seeds.length) nextProd = 1;
        else nextProd = prod.seedID + 1

        return (
            <div key={prod.id}>
                <div className='product-details-page-nav'>
                    <ul className='product-details-page-left-nav-container'>
                        <li><Link href='/'>Home</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li>seed {prod.seedID}</li>
                    </ul>
                    <ul className='product-details-page-right-nav-container'>
                        <li><Link href={`/shop/seeds/seed${prevProd}`}>Previous</Link></li>
                        <li>|</li>
                        <li><Link href={`/shop/seeds/seed${nextProd}`}>Next</Link></li>
                    </ul>
                </div>
                <div className='product-details-page-main-info-container'>
                    <div className='product-details-page-left-info-container'>
                        <Image
                            src={prod.imgSrc}
                            alt={"seeds"}
                            width={800}
                            height={800}
                            priority={true}
                            className="product-details-page-image"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <div className='product-details-page-right-info-container'>
                        <p className='product-details-page-prod-name'>{prod.name}</p>
                        <br/>
                        <p className='product-details-page-prod-price'>${prod.price}</p>
                        <br/>
                        <button className='cart-button' onClick={() => addToCart(prod)}>ADD TO CART</button>
                        <br/>
                        <br/>
                        <p className='product-details-page-prod-brief'>{prod.brief}</p>
                        <h1>items in cart: {QuantitySum}</h1>
                    </div>
                </div>
            </div>
        );
    })


    return (
        <>
            <Nav />
            {selectedProductElement}
            <Footer />
        </>
        )

}

export default SeedDetailsPage