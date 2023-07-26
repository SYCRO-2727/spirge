//Header component for layout - add more styles if needed
import Link from 'next/link'
import styles from '../components/component-styles/header.module.css'
import Dropdown from '../components/dropdown'

const Header = () => {
    return (
        <>
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
        <header className={styles.mobileHeader}>
            <div className={styles.mobileEncompass}>
                <Link href="../"><div className={styles.mobileImage}></div></Link>
                <div className={styles.mobileLogo}><h1 className={styles.mobileLogo_text}>PIRGE</h1></div>
            </div>
            <div className={styles.mobileDropdown}><Dropdown></Dropdown></div>
        </header>
        </>
    );
}

export default Header;