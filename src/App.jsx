import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';

const App = () => {
  return (
    <>
      <header id='home'>
        <Navbar />
        <Hero />
      </header>
      <About />
      <Services />
      <Tours />
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
