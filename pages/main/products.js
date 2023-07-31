import Product from '../../components/product'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/products.module.css'

const Products = () => {
    return (
    <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>What we offer</h1></div>
        <div className={styles.nodes}><Nodes direction={'vertical'}/></div>
        <div className={styles.product_case}>
            <div className={styles.product_section}>
                <div className={styles.product}>
                    <Product 
                        name="Web development with NextJS"
                        description="Spirge offers custom web development from scratch using NextJS for advanced and streamlined web applications. Starting from just $199! Check the product page for pricing &rarr;"
                        productpage="/products/next-website"
                        imageurl="/images/product-images/next2.jpeg"
                    />
                </div>
                <div className={styles.product}>
                    <Product 
                        name="Website hosting management"
                        description="Spirge can manage hosting and upkeep of your website, so you don't have to! Check the product page for pricing &rarr;"
                        productpage="/products/website-management"
                        imageurl="/images/product-images/spirge-wide.png"
                    />
                </div>
                <div className={styles.product}>
                    <Product
                        name="SQL database management"
                        description="Dealing with too many user accounts, profiles, products, and metadata to keep track of? Let us manage your database for you! Information here &rarr;"
                        productpage="/products/data-management"
                        imageurl="/images/product-images/sql.png"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

Products.needsLayout = true;
export default Products;