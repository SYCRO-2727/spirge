import styles from '../styles/utils.module.css'
import genstyle from '../styles/gen.module.css'
import Link from 'next/link'

const MobileMenu = () => {
    return (
        <div className={`${styles.dropdown_main} ${genstyle.div}`}>
            <button className={`${styles.dropdown_button}`}>&#9660;</button>
        <div className={`${styles.dropdown_content} ${genstyle.div}`}>
            <div className={`${styles.dropdown_option} ${genstyle.div}`}><Link className={`${styles.linkd}`} href='./main/about'>ABOUT</Link></div>
            <div className={`${styles.dropdown_option} ${genstyle.div}`}><Link className={`${styles.linkd}`} href='./main/products'>PRODUCTS</Link></div>
            <div className={`${styles.dropdown_option} ${genstyle.div}`}><Link className={`${styles.linkd}`} href='./main/projects'>PROJECTS</Link></div>
            <div className={`${styles.dropdown_option} ${genstyle.div}`}><Link className={`${styles.linkd}`} href='./main/portfolio'>PORTFOLIO</Link></div>
            <div className={`${styles.dropdown_option} ${genstyle.div}`}><Link className={`${styles.linkd}`} href='./main/contact'>CONTACT</Link></div>
        </div>
        </div>
    )
};

export default MobileMenu;
