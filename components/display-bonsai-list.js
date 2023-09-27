import productData from "@/public/product-data/productData";
import Image from "next/image"
import Link from 'next/link'

const DisplayBonsaiList = () => {
    let bonsais = productData.filter(bon => bon.tree === true);
    let bonElements = bonsais.map(bon => {
        return (
            <div key={bon.id} className="bonsai-page-image-div">
                <Link
                    href={`/shop/bonsai/${bon.id}`}
                >
                <Image
                    src={bon.imgSrc}
                    alt='yo'
                    width={100}
                    height={100}
                    className="bonsai-page-image-div-Image"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <p>{bon.name}</p>
                </Link>
            </div>
        );
    })
        
    return (
    <div className="bonsai-page-container">
        {bonElements}
    </div>
    )
}

export default DisplayBonsaiList