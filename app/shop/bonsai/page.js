import DisplayBonsaiList from "@/components/display-bonsai-list"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

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