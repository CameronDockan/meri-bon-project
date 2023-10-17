import DisplayToolsList from "@/components/productLists/display-tools-list"
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"

const ToolsListPage = () => {
    return (
        <>
            <Nav />
            <h1 className="tools-page-title">TOOLS</h1>
            <DisplayToolsList />
            <Footer />
        </>
    )
}

export default ToolsListPage