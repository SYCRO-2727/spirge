import Head from 'next/head';
import Link from 'next/link'; 
import Image from 'next/image';
import homestyle from '../styles/Home.module.css'
import genstyle from '../styles/gen.module.css'
export default function Home() {
    return (
        <>
        <Head>
            <title>Vexaro | Software and Web Design</title>
            <meta 
                property="og:title" 
                content="Spirge | Software and Web Design" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Spirge is a machine learning software distribution platform and web design company started by teen developers Nathaniel Sun and Davis Miller." />
        </Head>
        <section>
            <div className={`${homestyle.d_encompass} ${genstyle.div}`}>            
                <div className={`${homestyle.d_top} ${genstyle.div}`}>
                    <Link href='#'>
                        <Image 
                        priority
                        src='/../public/images/logo/vexaro-512.png'
                        height={80}
                        width={80}
                        alt='site-logo'
                        />
                    </Link>
                </div>
                <div className={`${homestyle.d_objects} ${genstyle.div}`}>
                    <div className={`${homestyle.d_leftnodes}`}>
                        <div className={`${homestyle.l_nodes} ${genstyle.div}`}>
                            <div className={`${homestyle.node_l} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_l} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_l} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_l} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_l} ${genstyle.div}`}></div>
                        </div>
                    </div>
                    <div className={`${homestyle.d_mainsign} ${genstyle.div}`}>
                        <div className={`${homestyle.sign} ${genstyle.div}`}>
                            <h1 className={`${genstyle.h1}`}>SPIRGE SOFTWARE</h1>
                        </div>
                        <div className={`${homestyle.signsub} ${genstyle.div}`}>
                            <h3 className={`${genstyle.h3}`}>Web Development and Machine Learning</h3>
                        </div>
                    </div>
                    <div className={`${homestyle.d_midnodes} ${genstyle.div}`}></div>
                    <div className={`${homestyle.d_mainlist} ${genstyle.div}`}>
                        <div className={`${homestyle.d_list} ${genstyle.div}`}>
                            <ul className={`${homestyle.list}`}>
                                <li><Link href="/main/about">ABOUT</Link></li>
                                <li><Link href="/main/products">PRODUCTS</Link></li>
                                <li><Link href="/main/examples">EXAMPLES</Link></li>
                                <li><Link href="/main/projects">PROJECTS</Link></li>
                                <li><Link href="/main/contact">CONTACT</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className={`${homestyle.d_rightnodes} ${genstyle.div}`}>
                        <div className={`${homestyle.r_nodes} ${genstyle.div}`}>
                            <div className={`${homestyle.node_r} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_r} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_r} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_r} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node_r} ${genstyle.div}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${homestyle.d_bottom} ${genstyle.div}`}></div>
            </div>
        </section>
        </>
    )
}