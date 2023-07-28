import styles from '../../styles/pages/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nodes from '../../components/nodes'

const About = ({ dev1 }, { dev2 }) => {
    return (
    <section className={styles.encompass}>
       <div className={styles.div_title}><h1 className={styles.div_title_text}>About the Developers</h1></div>
       <div className={styles.nodes_upper}>
        <Nodes direction={'vertical'} />
       </div>
       <div className={styles.dev_card_case}>
            <div className={styles.dev_card}>
                <div className={styles.dev_image_case}>
                    <Image className={styles.dev_image} height="252" width="180" src="/images/dev-images/skinny-asian.jpeg"></Image>
                </div>
                <div className={styles.dev_break}></div>
                <div className={styles.dev_about}><h1 className={styles.dev_name}>Nathaniel Sun</h1><p className={styles.dev_about_text}>{ dev1 }</p></div>
            </div>
       </div>
        <div className={styles.mid_nodes}>
            <Nodes direction={'vertical'}/>
        </div>
        <div className={styles.dev_card_case}>
        <div className={styles.dev_card}>
            <div className={styles.dev_image_case}>
                <Image className={styles.dev_image} height="252" width="180" src="/images/dev-images/skinny-white.jpeg"></Image>
            </div>
            <div className={styles.dev_break}></div>
            <div className={styles.dev_about}><h1 className={styles.dev_name}>Davis Miller</h1><p className={styles.dev_about_text}>{ dev2 }</p></div>
        </div>
        </div>
        <div className={styles.mid_nodes}>
            <Nodes direction={'vertical'}/>
        </div>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>About Spirge</h1></div>
        <div className={styles.mid_nodes}>
            <Nodes direction={'vertical'}/>
        </div>
    </section>
    );
}
About.needsLayout = true;
export default About;