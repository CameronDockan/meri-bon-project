import productData from "@/public/product-data/productData"
import Image from "next/image"
import Link from 'next/link'

const DisplayToolsList = () => {
    let toolsInfo = productData.filter(prod => prod.tool)
    let toolElements = toolsInfo.map(element => {
        return (
            <div key={element.id} className="tools-page-image-div">
            <Link
                href={`/product/${element.id}`}
            >
            <Image
                src={element.imgSrc}
                alt='yo'
                width={100}
                height={100}
                className="tools-page-image-div-Image"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <p>{element.name}</p>
            </Link>
        </div>
        );
    })

    return (
    <div className="tools-page-container">
        {toolElements}
    </div>
    )
}

export default DisplayToolsList