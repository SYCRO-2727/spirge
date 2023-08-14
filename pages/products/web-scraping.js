import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const WebScrape = () => {
    return (
        <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom python web scraping bots</h1></div>
        <div className={styles.div_info}>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>Spirge can meet your web scraping needs with custom-built python bots. We typically use BeautifulSoup and Selenium, but if more advanced modules are requested, we can integrate those.</p>
                <p className={styles.p}>We can script bots for tasks of all sizes, from simple html downloading to live data mining. <Link href="/main/contact" className={styles.link}>Contact us</Link> and tell us what you need.</p>
                <p className={styles.p}>All of our scraping bots respect site captchas and robots.txt files. We also cannot scrape restricted or premium parts of sites.</p>
                <p className={styles.p}>All web scraping bots come with a basic SQLite database storage system for scraped data. You can optionally request a different method of storage, i.e. CSV, JSON, TXT, or MySQL.</p>
                <p className={styles.p}>When making an inquiry to us to order your web scraper, provide us with:</p>
                <ul>
                    <li className={styles.p}>Detailed information about the sites and information you would like to scrape</li>
                    <li className={styles.p}>The format you would like the data in (if not SQLite)</li>
                    <li className={styles.p}>Your user-agent name for the bot</li>
                    <li className={styles.p}>Optionally any login or authentication information we may need</li>
                </ul>
                <p className={styles.p}>From there we can work out the rest through email or phone.</p>
            </div>
            <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
            <div className={styles.details}>
                <h2 className={styles.h2}>Pricing</h2>
                <p className={styles.p}>We offer very low starting rates for custom python web-scraping bots! Here are some reference examples:</p>
                <ul>
                    <li className={styles.p}>Basic HTML scraping bot, basic parsing, straightforward extraction - starting $49</li>
                    <li className={styles.p}>Intermediate HTML scraping bot, navigates complex sites, datatable extraction, image extraction (if allowed) - starting $199</li>
                    <li className={styles.p}>Advanced scraping bot, built-in user authentication, pagination management, complex HTML parsing, advanced data management and storing - starting $399</li>
                    <li className={styles.p}>Professional scraping solutions, HTML or Java GUI integration, multi-user authentication, 24/7 scraping, proxies, live SQL database management - starting $699</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

WebScrape.needsLayout = true;
WebScrape.title = "Spirge products | Custom python web scraper"
WebScrape.metadata = (  
    <meta property="og:title" content={WebScrape.title} />,
    <meta property="og:description" content="Spirge product python web scraping bot and data" />,
    <meta property="og:url" content="https://spirge.com/products/web-scraping" />,
    <meta name="twitter:title" content={WebScrape.title} />,
    <meta name="twitter:description" content="Spirge product python web scraping bot and data" />
)
export default WebScrape;