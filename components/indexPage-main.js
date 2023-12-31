
import Image from "next/image"
import Link from 'next/link'
import bonsaiPhoto from '../public/product-images/b1-1.png'
import seedPhoto from '../public/product-images/s1.jpg'
import toolPhoto from '../public/product-images/t1.png'
import miscPhoto from '../public/product-images/m1.png'



const Main = () => {
    return (
        <div className='index-body'>
            <h1 className="index-body-title"><Link href='/shop/all'>Shop</Link></h1>
            <div className="index-body-container">
                <div className='index-body-element'>
                    <Link className='product-link' href='/shop/bonsai'>Bonsai</Link>
                    <Image
                        src={bonsaiPhoto}
                        className='index-body-element-image'
                        alt='bonsai tree'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                            }} 
                        priority={true}
                    />
                </div>
                <div className='index-body-element'>
                    <Link className='product-link' href='/shop/seeds'>Seeds</Link>
                    <Image
                        src={seedPhoto}
                        className='index-body-element-image'
                        alt='seeds'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                            }} 
                        priority={true}
                    />
                </div>
                <div className='index-body-element'>
                    <Link className='product-link' href='/shop/tools'>Tools</Link>
                    <Image
                        src={toolPhoto}
                        className='index-body-element-image'
                        alt='bonsai gardening tools'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                            }} 
                        priority={true}
                    />
                </div>
                <div className='index-body-element'>
                    <Link className='product-link' href='/shop/misc'>Misc</Link>
                    <Image
                        src={miscPhoto}
                        className='index-body-element-image'
                        alt='i love bonsai shirt'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                            }} 
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main