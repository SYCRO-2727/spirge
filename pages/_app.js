import '../styles/global.css';
import Layout from '../components/layout';

function App({ Component, pageProps }) {
      const needsLayout = Component.needsLayout === true || Component.needsLayout;
      if (needsLayout) {
      return (
      <Layout mainData={<Component {...pageProps} />}></Layout>
      ); 
      } else if (!needsLayout) {
            return (<Component {...pageProps} />)
      }
  }
  
  export default App;