import Link from 'next/link';

export default function Layout({ isMobile, mainData }) {
    if (isMobile) {
        return (
            <>
            
            </>
        );
    } else if (!isMobile) {
        return (
            <>
            </>
        )
    }
}