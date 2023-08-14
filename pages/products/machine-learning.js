import Link from 'next/link'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/product-info.module.css'

const MachineLearning = () => {
    return (
        <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Custom machine learning models with Tensorflow</h1></div>
        <div className={styles.div_info}>
            <div className={styles.details}>
                <h2 className={styles.h2}>Details</h2>
                <p className={styles.p}>In the future we will provide custom tensorflow machine learning models tailored to your personal/business needs.</p>
                <p className={styles.p}>Currently we are in the process of making this product a reality, so <Link href="/main/contact" className={styles.link}>check in with us</Link> by email if you have any questions!</p>
            </div>
            <div className={styles.nodes}><Nodes direction={'horizontal'}/></div>
            <div className={styles.details}>
                <h2 className={styles.h2}>Pricing</h2>
                <p className={styles.p}>Here are some price estimates for possible models:</p>
                <ul>
                    <li className={styles.p}>Text classification model: $150-600+</li>
                    <li className={styles.p}>Image classification model: $200-600+</li>
                    <li className={styles.p}>Time series forecasting model (for data prediction): $200-800+</li>
                    <li className={styles.p}>Simple customer service chatbot: $400-2000+</li>
                    <li className={styles.p}>Basic NLP model (anything from text generation to feature extraction): $400-2000+</li>
                </ul>
            </div>
        </div>
    </section>
    )
}
MachineLearning.needsLayout = true;
MachineLearning.title = "Spirge Products | Custom machine learning models"
MachineLearning.metadata = (  
    <meta property="og:title" content={MachineLearning.title} />,
    <meta property="og:description" content="Spirge product custom machine learning models with python in tensorflow" />,
    <meta property="og:url" content="https://spirge.com/products/machine-learning.js" />,
    <meta name="twitter:title" content={MachineLearning.title} />,
    <meta name="twitter:description" content="Spirge product custom machine learning models with python in tensorflow" />
)
export default MachineLearning;