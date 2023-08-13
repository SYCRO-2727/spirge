import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const WordSite = () => {
    return (
        <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom web development with NextJS</h1></div>
        <div className={styles.div_info}>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>If you're looking for a stylish and efficient website to bring your ideas to life, Spirge has you covered!</p>
                <p className={styles.p}><Link href="https://wordpress.com/" className={styles.link}>WordPress</Link> is an awesome website production site offering customizable templates for quick website deployment.</p>
                <p className={styles.p}>Using WordPress Spirge can provide you with an advanced template designed by top-level website engineers, tailored specifically to your liking!</p>
            </div>
            <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
            <div className={styles.details}>
                <h2 className={styles.h2}>Pricing</h2>
                <p className={styles.p}>We offer very low starting rates for NextJS websites! Here are some price estimates to get you started:</p>
                <ul>

                </ul>
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