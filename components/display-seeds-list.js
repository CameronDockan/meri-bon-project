import productData from "@/public/product-data/productData"
import Image from "next/image"
import Link from 'next/link'

const DisplaySeedsList = () => {
    let seedInfo = productData.filter(prod => prod.seed);
    let seedElements = seedInfo.map(element => {
        return (
            <div key={element.id} className="seed-page-image-div">
            <Link
                href={`/shop/seed/${element.id}`}
            >
            <Image
                src={element.imgSrc}
                alt='yo'
                width={100}
                height={100}
                className="seed-page-image-div-Image"
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
        <div className="seed-page-container">
            {seedElements}
        </div>
    )
}

export default DisplaySeedsList