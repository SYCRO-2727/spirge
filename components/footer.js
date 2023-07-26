import Link from 'next/link'
import styles from './component-styles/footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.thumbprint}><h3 className={styles.thumbprint_text}>Design by <Link className={styles.link} href="../">Spirge</Link> web designs</h3></div>
            <div className={styles.social_icons}><h3 className={styles.thumbprint_text}>Instagram Twitter LinkedIn</h3></div>
        </footer>
    )
}

export default Footer;