import Head from 'next/head';
import Link from 'next/link'; 
import homestyle from '../styles/Home.module.css'
import genstyle from '../styles/gen.module.css'
import MobileMenu from '../components/dropdown'


const Home = () => {

    return (
        <>
        <Head>
        <title>Spirge | Software and Web Design</title>
            <link rel="icon" href="/favicon.png"></link>
            <meta property="og:title" content="Spirge | Software and Web Design" />
            <meta property="og:type" content="website" />
            <meta name="description" content="Spirge is a machine learning software distribution platform and web design company started by teen developers Nathaniel Sun and Davis Miller." />
        </Head>
        <section className={`${homestyle.full_env}`}>
        <div className={`${homestyle.d_encompass} ${genstyle.div}`}>            
                <div className={`${homestyle.d_top} ${genstyle.div}`}>
                <Link href='#'><div className={`${homestyle.logo} ${genstyle.div}`}>
                        <div className={`${homestyle.logo_img} ${genstyle.div}`}/></div>
                </Link>
                    <div className={`${homestyle.title} ${genstyle.div}`}>
                        <h1 className={`${homestyle.title_text} ${genstyle.h1}`}>SPIRGE</h1>
                    </div>
                <div className={`${homestyle.dropdown} ${genstyle.div}`}><MobileMenu /></div>
                </div>
                <div className={`${homestyle.d_objects} ${genstyle.div}`}>
                    <div className={`${homestyle.d_sidenodes}`}>
                        <div className={`${homestyle.l_nodes} ${genstyle.div}`}>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                        </div>
                    </div>
                    <div className={`${homestyle.d_mainsign} ${genstyle.div}`}>
                        <div className={`${homestyle.sign} ${genstyle.div}`} id="scaler">
                            <h1 className={`${homestyle.h_sign} ${genstyle.h1}`}>SPIRGE SOFTWARE</h1>
                        </div>
                        <div className={`${homestyle.signsub} ${genstyle.div}`}>
                            <h3 className={`${homestyle.h_signsub} ${genstyle.h3}`}>Web Development and Machine Learning</h3>
                        </div>
                    </div>
                    <div className={`${homestyle.d_midnodes} ${genstyle.div}`}>
                        <div className={`${homestyle.m_nodes} ${genstyle.div}`}>
                            <Link className={`${homestyle.link_node} ${genstyle.link}`} href="/main/about"></Link>
                            <Link className={`${homestyle.link_node} ${genstyle.link}`} href="/main/products"></Link>
                            <Link className={`${homestyle.link_node} ${genstyle.link}`} href="/main/portfolio"></Link>
                            <Link className={`${homestyle.link_node} ${genstyle.link}`} href="/main/projects"></Link>
                            <Link className={`${homestyle.link_node} ${genstyle.link}`} href="/main/contact"></Link>
                        </div>
                    </div>
                    <div className={`${homestyle.d_mainlist} ${genstyle.div}`}>
                        <div className={`${homestyle.d_list} ${genstyle.div}`}>
                            <ul className={`${homestyle.list}`}>
                                <li className={`${homestyle.li_buttons}`}><Link className={`${homestyle.link_buttons} ${genstyle.link}`} href="/main/about">ABOUT</Link></li>
                                <li className={`${homestyle.li_buttons}`}><Link className={`${homestyle.link_buttons} ${genstyle.link}`} href="/main/products">PRODUCTS</Link></li>
                                <li className={`${homestyle.li_buttons}`}><Link className={`${homestyle.link_buttons} ${genstyle.link}`} href="/main/portfolio">PORTFOLIO</Link></li>
                                <li className={`${homestyle.li_buttons}`}><Link className={`${homestyle.link_buttons} ${genstyle.link}`} href="/main/projects">PROJECTS</Link></li>
                                <li className={`${homestyle.li_buttons}`}><Link className={`${homestyle.link_buttons} ${genstyle.link}`} href="/main/contact">CONTACT</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className={`${homestyle.d_sidenodes} ${genstyle.div}`}>
                        <div className={`${homestyle.r_nodes} ${genstyle.div}`}>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                            <div className={`${homestyle.node} ${genstyle.div}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${homestyle.d_bottom} ${genstyle.div}`}></div>
            </div>
        
        </section>
        </>
    )
}
Home.needsLayout = false;
export default Home;