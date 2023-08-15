import DisplayMiscList from "@/components/display-misc-list"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

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