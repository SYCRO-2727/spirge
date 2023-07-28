import styles from '../styles/utils.module.css'

const Nodes = ({ direction }) => {
    //direction can either be 'horizontal' or 'vertical'
    //returns vertical by default
    if (direction == 'horizontal') {
            return (
    <div className={styles.nodecase_h}>
        <div className={styles.node_h}></div>
        <div className={styles.node_h}></div>
        <div className={styles.node_h}></div>
        <div className={styles.node_h}></div>
        <div className={styles.node_h}></div>
    </div>
    )
    } else if (direction == 'vertical') {
    <div className={styles.nodecase_v}>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
    </div>
    }
    return (
    <div className={styles.nodecase_v}>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
        <div className={styles.node_v}></div>
    </div>
    )

}

export default Nodes;