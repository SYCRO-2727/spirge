import styles from '../styles/utils.module.css'
import genstyle from '../styles/gen.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Dropdown() {
    return (
        <div className={`${styles.d_dropdown} ${genstyle.div}`}>
            <button className={`${styles.dropdown_button}`}>
            </button>
            <div className={`${styles.dropdown_content} ${genstyle.div}`}>
                <Link className={`${styles.dropdown_link} ${genstyle.link}`} href="/main/about/">ABOUT</Link>
                <Link className={`${styles.dropdown_link} ${genstyle.link}`} href="/main/products/">PRODUCTS</Link>
                <Link className={`${styles.dropdown_link} ${genstyle.link}`} href="/main/portfolio/">PORTFOLIO</Link>
                <Link className={`${styles.dropdown_link} ${genstyle.link}`} href="/main/projects/">PROJECTS</Link>
                 <Link className={`${styles.dropdown_link} ${genstyle.link}`} href="/main/contact/">CONTACT</Link>
            </div>
        </div>
    )
}