
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import ProductDetailsPage from '@/components/productDetails/allProdsDetailsPage';

export function generateStaticParams() {
    const prodIDs = productData.map(prod => {
        return (
            {id: `product${prod.id}`}
        )
    })
    return prodIDs
    // return [{ id: '1' }, { id: '2' }, { id: '3' }]
}


const Page = ({params}) => {
    return (
        <>
            <Nav />
            < ProductDetailsPage
                params={params}
            />
            <Footer />
        </>
        )
}




export default Page