import DisplayToolsList from "@/components/display-tools-list"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

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