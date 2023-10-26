
import productData from '@/public/product-data/productData'
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import ToolDetailsPage from '@/components/productDetails/toolsDetailsPage';

const tools = productData.filter(prod => {
    if (prod.tool === true) return true
})

export function generateStaticParams () {
    const toolIDs = tools.map(tool => {
        return (
            {toolID: `tool${tool.toolID}`}
        )
    })
    return toolIDs
}

const Page = ({params}) => {
    return (
        <>
            <Nav />
                <ToolDetailsPage 
                    params={params}
                />
            <Footer />
        </>
        )
}



export default Page
export { tools }