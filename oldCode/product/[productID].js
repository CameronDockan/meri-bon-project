// dynamic route returns a string which is why == is used instead of === when targeting prod.id == productID
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import {useRouter} from 'next/router'
import { useEffect, useContext} from 'react';
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";
import AppContext from '@/components/app-context';

const ProductDetailsPage = () => {
    const router = useRouter();
    const productID = router.query.productID;

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




    let selectedProduct = productData.filter(product => product.id == productID)
    let selectedProductElement = selectedProduct.map(prod => {
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
                        <li><Link href={`/product/${prod.id-1}`}>Previous</Link></li>
                        <li>|</li>
                        <li><Link href={`/product/${prod.id+1}`}>Next</Link></li>
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