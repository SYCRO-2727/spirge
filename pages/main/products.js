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
                        name="Custom web development with NextJS"
                        description="Spirge offers custom web development from scratch using NextJS for advanced and streamlined web applications. Starting from just $199! Check the product page for pricing &rarr;"
                        productpage="/products/next-website"
                        imageurl="/images/product-images/next2.jpeg"
                    />
                </div>
                <div className={styles.product}>
                    <Product
                        name="Custom web development with pure HTML, CSS, and JS"
                        description="Prefer typical web development strategies? Spirge also offers web development using pure, classic coding in HTML, CSS, and Javascript. Check the product page for pricing &rarr;"
                        productpage="/products/classic-website"
                        imageurl="/images/product-images/html2.png"
                    />
                </div>
                <div className={styles.product}>
                    <Product
                        name="Web development with WordPress"
                        description="Spirge offers the capability to advance your company using WordPress prebuilt templates! Check the product page for details &rarr;"
                        productpage="/products/wordpress-website"
                        imageurl="/images/product-images/wordpress2.png"
                    />
                </div>
                <div className={styles.product}>
                    <Product
                        name="Custom web scraping bots with Python"
                        description="Spirge can suit your web scraping needs from price monitoring to html data mining! Check the product page for pricing &rarr;"
                        productpage="/products/web-scraping"
                        imageurl="/images/product-images/python.jpeg"
                    />
                </div>
                <div className={styles.product}>
                    <Product
                        name="Custom machine learning models with Tensorflow (coming soon)"
                        description="Spirge can meet your company machine learning needs! You provide us with the data, we will provide you with the model! Check the product page for details &rarr;"
                        productpage="/products/machine-learning"
                        imageurl="/images/product-images/tensorflow.jpg"
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