import DisplaySeedsList from "@/components/display-seeds-list"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

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