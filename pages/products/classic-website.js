import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const ClassSite = () => {
    return (
        <section className={styles.encompass}>
            <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom web development with NextJS</h1></div>
            <div className={styles.div_info}>
                <div className={styles.details}>
                    
                </div>
                <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
                <div className={styles.details}></div>
            </div>
        </section>
    )
}
ClassSite.needsLayout = true;
export default ClassSite;