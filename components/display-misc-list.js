import productData from "@/public/product-data/productData"
import Image from "next/legacy/image"
import Link from 'next/link'

const DisplayMiscList = () => {
    let miscInfo = productData.filter(prod => prod.misc)
    let miscElements = miscInfo.map(element => {
        return (
            <div key={element.id} className="misc-page-image-div">
            <Link
                href={`/product/${element.id}`}
            >
            <Image
                src={element.imgSrc}
                alt='yo'
                width={100}
                height={100}
                className="misc-page-image-div-Image"
            />
            <p>{element.name}</p>
            </Link>
        </div>
        )
    })
    return (
        <div className="misc-page-container">
            {miscElements}
        </div>
    )
}

export default DisplayMiscList