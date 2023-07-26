import Link from 'next/link';
import lstyles from '../components/component-styles/layout.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react';
import genstyles from '../styles/gen.module.css'

const Layout = ({ mainData }) => {
    return (
        <>
            <Header isMobile={false}/>
            <main>{mainData}</main>
            <Footer></Footer>
        </>
        );
    }

export default Layout;