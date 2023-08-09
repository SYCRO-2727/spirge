import '../styles/global.css';
import Layout from '../components/layout';

function App({ Component, pageProps }) {
      const needsLayout = Component.needsLayout === true || Component.needsLayout;
      const title = Component.title ? Component.title : "Spirge | Needs title lol";
      const meta = Component.metadata
      if (needsLayout) {
      return (
      <Layout pageTitle={title} metadata={meta} mainData={<Component {...pageProps} />}></Layout>
      ); 
      } else if (!needsLayout) {
            return (<Component {...pageProps} />)
      }
  }
  
  export default App;