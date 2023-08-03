import styles from '../../styles/pages/contact.module.css'
import Link from 'next/link'
import Nodes from '../../components/nodes'
const Contact = () => {
    return (
    <section className={styles.encompass}>
        <div className={styles.geninq}>
            <h1 className={styles.h1}>For general inquiries contact:</h1>
            <h2 className={styles.h2}><Link className={styles.link} href="mailto:spirgesoftware@gmail.com">spirgesoftware@gmail.com</Link></h2>
        </div>
        <div className={styles.nodes}>
            <Nodes direction={'vertical'}/>
        </div>
        <div className={styles.geninq}>
            <h1 className={styles.h1}>Contact the devs:</h1>
            <h2 className={styles.h2}>Nathaniel Sun - T: +1 832-352-5772 E: <Link className={styles.link} href="mailto:nathaniel.sun.spirge@gmail.com">nathaniel.sun.spirge@gmail.com</Link></h2>
            <h2 className={styles.h2}>Davis Miller - E: <Link href="mailto:davis.miller.spirge@gmail.com" className={styles.link}>davis.miller.spirge@gmail.com</Link></h2>
        </div>
    </section>)
}
Contact.needsLayout = true;
export default Contact;