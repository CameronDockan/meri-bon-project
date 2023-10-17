import DisplayBonsaiList from "@/components/productLists/display-bonsai-list"
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"

const BonsaiListPage = () => {
    return (
        <>
            <Nav />
            <h1 className="bonsai-page-title">Bonsai</h1>
            <DisplayBonsaiList />
            <Footer />
        </>
    )
}

export default BonsaiListPage