import productData from "@/public/product-data/productData";
import Image from 'next/image'
import Link from 'next/link'

const DisplayShopList = () => {
    const productList = productData.map(product => {
        return (
            <div key={product.id} className="shop-page-image-div">
                <Link
                    href={`/product/${product.id}`}
                >
                <Image
                    src={product.imgSrc}
                    alt='yo'
                    width={100}
                    height={100}
                    className="shop-page-image-div-Image"
                />
                <p>{product.name}</p>
                </Link>
            </div>
        )
    })
    return (
        <div className="shop-page-container">
            {productList}
        </div>
    )
}

export default DisplayShopList