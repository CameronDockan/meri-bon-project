'use client'

import productData from '@/public/product-data/productData'
import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import AppContext from '@/components/app-context';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const bonsais = productData.filter(prod => {
    if (prod.tree === true) return true
})

export function generateStaticParams () {
    const bonsaiIDs = bonsais.map(bon => {
        return (
            {bonsaiID: `bonsai${bon.bonsaiID}`}
        )
    })
    return bonsaiIDs
}

const BonsaiDetailsPage = ({params}) => {
    // {id} destructering was causing id to equal undefined so I chose not to destructure
    const id = params;

    // const selectedBonsaiArr = productData.filter(bon => {
    //     let bonID = `bonsai${bon.bonsaiID}`
    //     if (id === bonID) return true 
    // })

    const context = useContext(AppContext)

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

    let selectedProduct = productData.filter(bon => 'bonsai' + bon.bonsaiID == id.bonsaiID)
    let selectedProductElement = selectedProduct.map(prod => {

        let prevProd;
        if (prod.bonsaiID <= 1) prevProd = bonsais.length
        else prevProd = prod.bonsaiID -1;

        let nextProd;
        if (prod.bonsaiID >= bonsais.length) nextProd = 1;
        else nextProd = prod.bonsaiID + 1

        return (
            <div key={prod.id}>
                <div className='product-details-page-nav'>
                    <ul className='product-details-page-left-nav-container'>
                        <li><Link href='/'>Home</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li>bonsai {prod.bonsaiID}</li>
                    </ul>
                    <ul className='product-details-page-right-nav-container'>
                        <li><Link href={`/shop/bonsai/bonsai${prevProd}`}>Previous</Link></li>
                        <li>|</li>
                        <li><Link href={`/shop/bonsai/bonsai${nextProd}`}>Next</Link></li>
                    </ul>
                </div>
                <div className='product-details-page-main-info-container'>
                    <div className='product-details-page-left-info-container'>
                        <Image
                            src={prod.imgSrc}
                            alt={"bonsai"}
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


export default BonsaiDetailsPage