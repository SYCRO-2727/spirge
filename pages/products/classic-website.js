import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const ClassSite = () => {
    return (
        <section className={styles.encompass}>
            <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom web development with HTML, CSS, and pure Javascript</h1></div>
            <div className={styles.div_info}>
                <div className={styles.details}>
                    <h2 className={styles.h2}>Details</h2>
                    <p className={styles.p}>We can build your website with classic HTML, CSS, and Javascript if you so desire!</p>
                    <p className={styles.p}>Why choose classic instead of a web development framework like NextJS? Classic is a lightweight and simple approach to web design in comparison with newer frameworks. If your priorities for your site are quick optimization, simple structure, and ease of use, then classic is the choice for you.</p>
                    <p className={styles.p}>However, if you&apos;re website needs more intricate, complicated nuances such as blog implementation and interactive product pages, we&apos;d recommend you consult with us for a more advanced framework to build your website with, such as <Link className={styles.link} href="next-website">NextJS</Link> or <Link className={styles.link} href="wordpress-website">WordPress</Link>.</p>
                    <p className={styles.p}><Link className={styles.link} href="/main/contact">Contact us</Link> by email with a wireframe drawing of how you&apos;d like us to design your site, or a reference website! We&apos;ll email you back shortly with a consult price or if you&apos;d like we can call you! From there we can work out the information you&apos;d like to fill your site with. We&apos;ll also give you a time estimate for completion.</p>
                </div>
                <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
                <div className={styles.details}>
                    <h2 className={styles.h2}>Pricing</h2>
                    <p className={styles.p}>We offer very low starting rates for basic pure language websites! Here are some price estimates to get you started:</p>
                    <ul>
                        <li className={styles.p}>Simple website with a couple pages and basic interactivity - starting price $129</li>
                        <li className={styles.p}>Blog or personal portfolio website with dynamic content, backend API routes, and consistent update capability - starting $299</li>
                        <li className={styles.p}>Small business website with more pages, dynamic content, interactivity, and contact forms - starting $499</li>
                        <li className={styles.p}>Intermediate level personal/business website with many pages, a blog system, a basic database API, dynamic content, complex interactivity, and contact forms - starting $899</li>
                        <li className={styles.p}>Advanced website with multiple API routes, payment transactions, complicated SQL database tables, blogging, interactivity, dynamic content, and web applications - starting $1599</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
ClassSite.needsLayout = true;
ClassSite.title = 'Spirge Products | Pure HTML CSS and JS website'
ClassSite.metadata = (  
    <meta property="og:title" content={ClassSite.title} />,
    <meta property="og:description" content="Spirge product website built in pure HTML CSS and JS" />,
    <meta property="og:url" content="https://spirge.com/products/classic-website" />,
    <meta name="twitter:title" content={ClassSite.title} />,
    <meta name="twitter:description" content="Spirge product website built in pure HTML CSS and JS" />
)
export default ClassSite;