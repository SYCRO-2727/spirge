import Project from '../../components/project'
import Nodes from '../../components/nodes'
import styles from '../../styles/pages/projects.module.css'

const Projects = () => {
    return (
    <section className={styles.encompass}>
        <div className={styles.div_title}><h1 className={styles.div_title_text}>Spirge projects</h1></div>
        <div className={styles.nodes}><Nodes direction={'vertical'}/></div>
        <div className={styles.project_case}>
            <Project 
                title="Custom Search Engine"
                description="The custom search engine is a framework you or your workplace can use to generate a high-quality in-depth search engine on any topic you desire. Simply enter terms and let the NLP model and engine gather and store links for you! Email us for more information."
                percent={34}
                status="scripting"
            />
        </div>
        <div className={styles.nodes_short}><Nodes direction={'vertical'} /></div>
        <div className={styles.project_case}>
            <Project 
                title="Optical character recognition and analysis (OCRA)"
                description="OCRA will be an optical character recognition framework that utilizes state-of-the-art convolutional recognition and natural language processing to decipher the most inscrutible of handwriting and automate the most excrutiating data entry tasks! Email us for more information."
                percent={5}
                status="research"
            />
        </div>
        <div className={styles.nodes_short}><Nodes direction={'vertical'} /></div>
        <div className={styles.project_case}>
            <Project 
                title="Machine learning model for biometric facial analysis"
                description="We are researching and developing a 3D CNN model that will generate and analyze complex vertex maps from facial data for exceptionally precise recognition! Email us for more information."
                percent={10}
                status="research"
            />
        </div>
    </section>
    )
}
Projects.needsLayout = true;
export default Projects;