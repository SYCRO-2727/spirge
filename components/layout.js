import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react';
const Layout = ({ pageTitle, metadata, mainData }) => {
    return (
        <>  
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.png"></link>
                <meta property="og:type" content="website" />
                <meta property="og:site-name" content="Spirge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Spirge is a machine learning software distribution platform and web design company started by teen developers Nathaniel Sun and Davis Miller." />
                <meta name="keywords" content="LLC, machine learning, artificial intelligence, AI, tensorflow, web design, software, software development, sql, freelance, nextjs" />
                <meta name="author" content="Spirge" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:image" content="https://spirge.com/images/logo/spirge-1024" />
                <meta name="twitter:image" content="https://spirge.com/images/logo/spirge-1024" />
                {metadata}
            </Head>
            <Header />
            <main>{mainData}</main>
            <Footer></Footer>
        </>
        );
    }

export default Layout;