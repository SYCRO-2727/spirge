import styles from '../../styles/pages/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nodes from '../../components/nodes'

const About = () => {
    return (
    <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>About Spirge</h1></div>
        <div className={styles.nodes_upper}>
            <Nodes direction={'vertical'}/>
        </div>
        <div className={styles.spirge_about_case}>
            <div className={styles.spirge_about}>
                <div className={styles.spirge_description}>
                    <p className={styles.spirge_text}>Spirge is a web development and machine learning software distribution platform founded and run by high school juniors Nathaniel Sun and Davis Miller.</p>
                    <p className={styles.spirge_text}>Spirge plans to offer high quality website designs for low cost and advanced machine learning models and frameworks for complex tasks such as handwriting OCR and biometric facial analysis.</p>
                    <p className={styles.spirge_text}>Stay tuned to our <Link className={styles.link} href="/main/projects">projects</Link> page for information on upcoming software!</p>
                </div>
            </div>
        </div>
    <div className={styles.nodes_upper}><Nodes direction={'vertical'} /></div>
       <div className={styles.div_title}><h1 className={styles.div_title_text}>About the Developers</h1></div>
       <div className={styles.nodes_upper}>
        <Nodes direction={'vertical'} />
       </div>
       <div className={styles.dev_card_case}>
            <div className={styles.dev_card}>
                <div className={styles.dev_image_case}>
                    <Image className={styles.dev_image} height="252" width="180" src="/images/dev-images/natesun.jpeg"></Image>
                </div>
                <div className={styles.dev_break}></div>
                <div className={styles.dev_about}><h1 className={styles.dev_name}>Nathaniel Sun</h1><p className={styles.dev_about_text}>Hey folks, my name is Nathaniel Sun and I am a machine learning enthusiast and full stack web developer! I am a junior at Houston Christian high school, and am planning to develop a career in machine learning applications to nuclear fusion! Contact me at my <a className={styles.link} href="https://www.linkedin.com/in/nathaniel-sun-2382b0277/">LinkedIn</a>!</p></div>
            </div>
       </div>
        <div className={styles.mid_nodes}>
            <Nodes direction={'vertical'}/>
        </div>
        <div className={styles.dev_card_case}>
        <div className={styles.dev_card}>
            <div className={styles.dev_image_case}>
                <Image className={styles.dev_image} height="252" width="180" src="/images/dev-images/davismiller3.jpeg"></Image>
            </div>
            <div className={styles.dev_break}></div>
            <div className={styles.dev_about}><h1 className={styles.dev_name}>Davis Miller</h1><p className={styles.dev_about_text}>Hi, my name is Davis Miller. I’m a technical rescue technician, SCUBA diver, lighting designer, and networking engineer. I am a Junior at Houston Christian High School. Contact me at my <a className={styles.link} href="https://amazon.com">LinkedIn</a>!</p></div>
        </div>
        </div>
    </section>
    );
}
About.needsLayout = true;
export default About;