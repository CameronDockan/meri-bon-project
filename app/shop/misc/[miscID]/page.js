
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import MiscDetailsPage from '@/components/productDetails/miscDetailsPage';

const miscs = productData.filter(misc => {
    if (misc.misc === true) return true
})

export function generateStaticParams () {
    const miscIDs = miscs.map(misc => {
        return (
            {miscID: `misc${misc.miscID}`}
        )
    })
    return miscIDs
}

const Page = ({params}) => {
    return (
        <>
            <Nav />
            <MiscDetailsPage 
                params={params}
            />
            <Footer />
        </>
        )
}

export default Page
export { miscs }