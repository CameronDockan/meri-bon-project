import CartItems from './cart-items'
import CartTotal from './cart-total'
import CartCheckoutButton from './cart-checkout-button'


const ShoppingCart = () => {
    return (
        <>
            <CartItems />
            <CartTotal />
            <CartCheckoutButton />
        </>
    )
}

export default ShoppingCart

// let QuantitySum = cart.map(product => product.quantity).reduce((a,b)=>a+b);
// console.log(QuantitySum)