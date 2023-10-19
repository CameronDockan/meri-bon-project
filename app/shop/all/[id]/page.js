'use client'

import productData from '@/public/product-data/productData'
import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import {CartContext} from '@/components/cart-context';
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

export function generateStaticParams() {
    const prodIDs = productData.map(prod => {
        return (
            {id: `product${prod.id}`}
        )
    })
    return prodIDs
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

const ProductDetailsPage = ({params}) => {
    const {id} = params;
    console.log(id)
    const selectedProdArr = productData.filter(prod => {
        let prodID = `product${prod.id}`
        if (id === prodID) return true
    })

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

    
    let selectedProduct = productData.filter(product => 'product' + product.id == id)
    let selectedProductElement = selectedProduct.map(prod => {

        let prevProd;
        if (prod.id <= 1) prevProd = productData.length
        else prevProd = prod.id -1;

        let nextProd;
        if (prod.id >= productData.length) nextProd = 1;
        else nextProd = prod.id + 1

        return (
            <div key={prod.id}>
                <div className='product-details-page-nav'>
                    <ul className='product-details-page-left-nav-container'>
                        <li><Link href='/'>Home</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><AiOutlineArrowRight className='right-arrow-icon' /></li>
                        <li>product {prod.id}</li>
                    </ul>
                    <ul className='product-details-page-right-nav-container'>
                        <li><Link href={`/shop/all/product${prevProd}`}>Previous</Link></li>
                        <li>|</li>
                        <li><Link href={`/shop/all/product${nextProd}`}>Next</Link></li>
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



export default ProductDetailsPage