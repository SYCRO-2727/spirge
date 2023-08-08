import styles from '../styles/utils.module.css'

const Project = ({ title, description, percent, status }) => {
    //title is title of project
    //description is description
    //percent is percent completion of project from concept to production
    //status is state of project
    if (typeof(percent) != 'number') {
        return (
            <div>
                <h1>Please use an integer value for project percent status</h1>
            </div>
        )
    }
    return(
        <div className={styles.project_card}>
            <div className={styles.project_info}>
                <div className={styles.project_title}><h1 className={styles.project_title_text}>{title}</h1></div>
                <div className={styles.project_description}><h3 className={styles.project_description_text}>{description}</h3></div>
            </div>
            <div className={styles.project_status}>
                <div className={styles.project_statusbar}>
                    <h2 className={styles.project_h2}>Concept</h2>
                    <div className={styles.project_bar}>
                        <div style={{height: '20px', width: `${percent}%`, background: 'var(--theme-color)'}}></div>
                    </div>
                    <h2 className={styles.project_h2}>Production</h2>
                </div>
                <div className={styles.project_state}><h2 className={styles.project_h2}>Status: {status}</h2></div>
            </div>
        </div>
    )
}

export default Project;