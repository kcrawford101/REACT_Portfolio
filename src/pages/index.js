import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>      
      <Hero />        
      <Projects />    
    </Layout>
  );
};

export default Home;
