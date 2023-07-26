//Header component for layout - add more styles if needed
import Link from 'next/link'
import styles from '../components/component-styles/header.module.css'
const Header = ({ isMobile }) => {
    if (!isMobile) {
    return (
        <header className={`${styles.regHeader}`}>
            <div className={styles.regEncompass}>
            <Link href="../"><div className={`${styles.regImage}`}></div></Link>
            <div className={`${styles.regLogo}`}><h1 className={`${styles.regLogo_text}`}>PIRGE</h1></div>
            </div>
            <nav className={`${styles.regNav}`}>
                <ul className={styles.regList}>
                    <li className={`${styles.regOption} `}><Link className={styles.regLink} href="../main/about">ABOUT</Link></li>
                    <li className={`${styles.regOption} `}><Link className={styles.regLink} href="../main/products">PRODUCTS</Link></li>
                    <li className={`${styles.regOption} `}><Link className={styles.regLink} href="../main/portfolio">PORTFOLIO</Link></li>
                    <li className={`${styles.regOption} `}><Link className={styles.regLink} href="../main/projects">PROJECTS</Link></li>
                    <li className={`${styles.regOption} `}><Link className={styles.regLink} href="../main/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )} else if (isMobile) {
        return (
            <header className={styles.mobileHeader}></header>
        )
    }
}

export default Header;