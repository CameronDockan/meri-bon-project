
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import BonsaiDetailsPage from '@/components/productDetails/bonsaiDetailsPage';

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

const Page = ({params}) => {
    return (
        <>
            <Nav />
            <BonsaiDetailsPage 
                params = {params}
            />
            <Footer />
        </>
    )
}

export default Page

export {bonsais}