import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const WordSite = () => {
    return (
        <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom web development with WordPress</h1></div>
        <div className={styles.div_info}>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>If you&apos;re looking for a stylish and efficient website to bring your ideas to life, Spirge has you covered!</p>
                <p className={styles.p}><Link href="https://wordpress.com/" className={styles.link}>WordPress</Link> is an awesome website production site offering customizable templates for quick website deployment.</p>
                <p className={styles.p}>Using WordPress, Spirge can quickly provide you with an advanced template designed by teams of highly experienced website engineers, tailored specifically to your liking!</p>
                <p className={styles.p}>With a WordPress template, all pressure to visualize your intricate website structure will quickly dissolve. All that work is already done for you! All you need to do is simply provide us with your template choice and the data to fill it with.</p>
                <p className={styles.p}>After your initial consult with us, we will provide you with a list of WordPress templates to choose from that fit your requested website styling.</p>
            </div>
            <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
            <div className={styles.details}>
                <h2 className={styles.h2}>Pricing</h2>
                <p className={styles.p}>We offer very low starting rates for WordPress-based websites! For WordPrice premium templates, the price is added to your final quote with no extra surcharge. Here are some price estimates to get you started:</p>
                <ul>
                    <li className={styles.p}>Basic portfolio website, 1-3 pages - starting $99</li>
                    <li className={styles.p}>Basic informational website, 2-5 pages - starting $199</li>
                    <li className={styles.p}>Personal/business product or blog website, 5-20+ pages - starting $399</li>
                    <li className={styles.p}>E-commerce or social media platform website - starting $699</li>
                </ul>
                <p className={styles.p}>Note: pricing will change based on amount of style customization requested</p>
            </div>
        </div>
    </section>
    )
}

WordSite.needsLayout = true;
WordSite.title = "Spirge Products | Website built using WordPress template"
WordSite.metadata = (  
    <meta property="og:title" content={WordSite.title} />,
    <meta property="og:description" content="Spirge product website built with WordPress" />,
    <meta property="og:url" content="https://spirge.com/products/wordpress-website" />,
    <meta name="twitter:title" content={WordSite.title} />,
    <meta name="twitter:description" content="Spirge product website built with WordPress" />
)
export default WordSite;