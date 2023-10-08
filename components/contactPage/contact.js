import Link from "next/link"
import Image from "next/image"
import helixTree from "@/public/helix-tree.png"

const Contact = () => {

    let treeW = 1119;
    let treeH = 1300;

    return (
        <div className="contact-main-container">
            <div className="contact-title-container">
                <h1>CONTACT (mock)</h1>
            </div>
            <div className="contact-info-container">
                <Image
                    src={helixTree}
                    alt='verticle dna helix-like branches with leaves'
                    width={treeW / 4}
                    height={treeH / 4}
                 />
                <div className="contact-info-middle-column">
                    <div className="contact-minor-info-container">
                        <h2>CUSTOMER SERVICE</h2>
                        <p>1-877-486-0396</p>
                    </div>
                    <did className="contact-minor-info-container">
                        <h2>E-MAIL</h2>
                        <Link href="#">info@meri_bon.com</Link>
                    </did>
                    <div className="contact-minor-info-container">
                        <h2>MERI_BON HEADQUARTERS</h2>
                        <p className="address">1562-2 Hermes SQ, Indigo, CA 93003</p>
                        <p className="phone">Phone: 805-694-2568</p>
                        <p className="fax">Fax: 805-664-2566</p>
                    </div>
                </div>
                <Image
                    src={helixTree}
                    alt='verticle dna helix-like branches with leaves'
                    width={treeW / 4}
                    height={treeH / 4}
                 />
            </div>
        </div>
    )
}

export default Contact