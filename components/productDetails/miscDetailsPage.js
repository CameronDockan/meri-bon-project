"use client"

import productData from '@/public/product-data/productData'
import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import {CartContext} from '@/components/contexts/cart-context';
import { miscs } from '@/app/shop/misc/[miscID]/page';

const MiscDetailsPage = ({params}) => {
    const id = params;

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

    let selectedProduct = productData.filter(misc => 'misc' + misc.miscID == id.miscID)
    let selectedProductElement = selectedProduct.map(prod => {

        let prevProd;
        if (prod.miscID <= 1) prevProd = miscs.length
        else prevProd = prod.miscID -1;

        let nextProd;
        if (prod.miscID >= miscs.length) nextProd = 1;
        else nextProd = prod.miscID + 1

        return (
            <div key={prod.id}>
                <div className='product-details-page-nav'>
                    <ul className='product-details-page-left-nav-container'>
                        <li><Link href='/'>Home</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li>misc {prod.miscID}</li>
                    </ul>
                    <ul className='product-details-page-right-nav-container'>
                        <li><Link href={`/shop/misc/misc${prevProd}`}>Previous</Link></li>
                        <li>|</li>
                        <li><Link href={`/shop/misc/misc${nextProd}`}>Next</Link></li>
                    </ul>
                </div>
                <div className='product-details-page-main-info-container'>
                    <div className='product-details-page-left-info-container'>
                        <Image
                            src={prod.imgSrc}
                            alt={"misc"}
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
                        {/* <h1>items in cart: {QuantitySum}</h1> */}
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            {selectedProductElement}
        </>
        )
}

export default MiscDetailsPage