import Link from 'next/link';

const Layout = ({ isMobile }) => {
    if (isMobile) {
        return (
            <>
            
            </>
        );
    } else if (!isMobile) {
        return (
            <></>
        )
    }
};

export default Layout;