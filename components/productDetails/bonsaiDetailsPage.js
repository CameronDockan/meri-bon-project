"use client"

import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import {CartContext} from '@/components/contexts/cart-context';
import productData from '@/public/product-data/productData'
import { bonsais } from '@/app/shop/bonsai/[bonsaiID]/page';


const BonsaiDetailsPage = ({params}) => {
    // {id} destructering was causing id to equal undefined so I chose not to destructure
    const id = params;

    // const selectedBonsaiArr = productData.filter(bon => {
    //     let bonID = `bonsai${bon.bonsaiID}`
    //     if (id === bonID) return true 
    // })

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

export default BonsaiDetailsPage