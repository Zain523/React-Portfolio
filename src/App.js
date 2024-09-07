import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <>
      <div className="App">
        <Header />
        <HeroSection />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
