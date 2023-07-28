import styles from '../../styles/pages/about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nodes from '../../components/nodes'
import { useState, useEffect } from 'react';

const About = () => {
    const [dev_info, setFileContents] = useState(['']);
    const dev_files = [
        '/content/dev-cards/text/natesun.txt',
        '/content/dev-cards/text/davismiller.txt'
    ];
    useEffect(() => {
        const fetchFileContent = async (filepath) => {
          try {
            const response = await fetch(`/api/readFile?filepath=${encodeURIComponent(filepath)}`);
            const data = await response.json();
            return data.content;
          } catch (error) {
            console.error('Error fetching file:', error);
            return '';
          }
        };
        const fetchAllFiles = async () => {
            const contents = await Promise.all(dev_files.map(fetchFileContent));
            setFileContents(contents);
          };
      
          fetchAllFiles();
        }, []);

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
                <div className={styles.dev_about}><h1 className={styles.dev_name}>Nathaniel Sun</h1><p className={styles.dev_about_text}>{ dev_info[0] }</p></div>
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
            <div className={styles.dev_about}><h1 className={styles.dev_name}>Davis Miller</h1><p className={styles.dev_about_text}>{ dev_info[1] }</p></div>
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