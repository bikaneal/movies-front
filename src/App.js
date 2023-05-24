import { Layout } from 'antd';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Content from './layout/Main.jsx';


function App() {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
    
  );
};

export default App;
