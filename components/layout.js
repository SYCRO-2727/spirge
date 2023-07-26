import Link from 'next/link';
import lstyles from '../components/component-styles/layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react';
import genstyles from '../styles/gen.module.css'

const Layout = ({ isMobile, mainData }) => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    if (windowSize.width>769) {
        isMobile=false;
    } else if (windowSize.width<770) {
        isMobile=true;
    }

    if (isMobile) {
        return(
            <>
            </>
        )
    } else if (!isMobile) {
            return (
                <>
                <Header isMobile={false}/>
                <main>{mainData}</main>
                <Footer></Footer>
                </>
            );
    }
}

export default Layout;