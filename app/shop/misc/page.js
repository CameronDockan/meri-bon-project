import DisplayMiscList from "@/components/productLists/display-misc-list"
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"

const MiscListPage = () => {
    return (
        <>
            <Nav />
            <h1 className="misc-page-title">MISCELLANEOUS</h1>
            <DisplayMiscList />
            <Footer />
        </>
    )
}

export default MiscListPage