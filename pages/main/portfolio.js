import styles from '../../styles/pages/portfolio.module.css'
import Link from 'next/link'
const Portfolio = () => {
    return (
    <section className={styles.encompass}>
    <div className={styles.text}>
        <h1 className={styles.h1}>This website is all I have to say for this company's portfolio currently!</h1>
        <h1 className={styles.h1}>Spirge is still just software!</h1>
        <h4 className={styles.h4}>In the meantime, check out <Link href="/lost-files/learn-ai" className={styles.link}>this</Link> cool collection of sites to learn machine learning for absolutely, positively no cost!</h4>
    </div>
    </section>
    )
}
Portfolio.needsLayout = true;
export default Portfolio;