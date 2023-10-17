// import DisplaySingleProduct from "@/components/displayPD"
import DisplayShopList from "@/components/productLists/display-shop-list"
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"

const ShopListPage = () => {
    return (
        <>
            <Nav />
            <h1 className="shop-page-title">SHOP</h1>
            <DisplayShopList />  
            <Footer />
        </>
    )
}

export default ShopListPage