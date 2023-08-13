import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const NextSite = () => {
    return (
        <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom web development with NextJS</h1></div>
        <div className={styles.div_info}>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>We can offer you the powerful NextJS framework at your disposal for the most intricate, advanced web applications and sites possible!</p>
                <p className={styles.p}>NextJS is a modern framework that allows high-quality complicated websites to run efficiently with almost no lag! While pure HTML is lightweight for small projects, it can quickly grow unmanageable as your site grows larger.</p>
                <p className={styles.p}>NextJS offers a smooth interaction experience, improved SEO benefits over pure HTML websites, and less time spent duplicating code for webpages.</p>
                <p className={styles.p}><Link className={styles.link} href="/main/contact">Contact</Link> us by email with a wireframe drawing of how you'd like us to design your site, or a reference website! We'll email or call you back shortly with a consult price! From there we can work out the information you'd like to fill your site with. We'll also give you a time estimate for completion.</p>
            </div>
            <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
            <div className={styles.details}>
                <h2 className={styles.h2}>Pricing</h2>
                <p className={styles.p}>We offer very low starting rates for NextJS websites! Here are some price estimates to get you started:</p>
                <ul>
                    <li className={styles.p}>Basic website with static pages, minimal interactivity, and basic layout - starting price $199</li>
                    <li className={styles.p}>Small business or portfolio website, more advanced website showcasing product pages and/or portfolio work - starting $499</li>
                    <li className={styles.p}>Blog website with content management, utilizes basic SQL databases, basic API system, and contact forms - starting $699</li>
                    <li className={styles.p}>E-Commerce Website with Next.js, product listings, shopping cart functionality, and secure payment gateways - starting $1299</li>
                    <li className={styles.p}>Custom web application with advanced custom features, user authentication, API integrations, and scalability - starting $1599</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

NextSite.needsLayout = true;
NextSite.title = "Spirge Products | Website built with react NextJS framework"
NextSite.metadata = (  
    <meta property="og:title" content={NextSite.title} />,
    <meta property="og:description" content="Spirge product website built with the react framework NextJS" />,
    <meta property="og:url" content="https://spirge.com/products/next-website" />,
    <meta name="twitter:title" content={NextSite.title} />,
    <meta name="twitter:description" content="Spirge product website built with the react framework NextJS" />
)
export default NextSite;