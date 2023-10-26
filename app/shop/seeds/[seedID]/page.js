
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import SeedDetailsPage from '@/components/productDetails/seedsDetailsPage';

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

const Page = ({params}) => {
    return (
        <>
            <Nav />
                <SeedDetailsPage 
                    params={params}
                />
            <Footer />
        </>
    )
}



export default Page
export { seeds }