import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/utils.module.css'

const Product = ({ name, description, productpage, imageurl }) => {
    return (
        <div className={styles.product_case}>
            <div className={styles.product_info}>
                <h1 className={styles.product_name}>{name}</h1>
                <p className={styles.product_description}>{description}</p>
            </div>
            <div className={styles.product_image}><Link className={styles.product_link} href={productpage}>
                <Image 
                    className={styles.image}
                    width="150"
                    height="150"
                    src={imageurl}
                    style={{
                        objectFit: 'cover',
                    }}
                    alt="product image">
                </Image>
            </Link></div>
        </div>
    )
}

export default Product;