import DisplaySeedsList from "@/components/productLists/display-seeds-list"
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"

const SeedsListPage = () => {
    return (
        <>
            <Nav />
            <h1 className="seed-page-title">SEEDS</h1>
            <DisplaySeedsList />
            <Footer />
        </>
    )
}

export default SeedsListPage