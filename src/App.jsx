
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyLivo from "./components/WhyLivo";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Calculator from "./components/calculator";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SimplePage from "./components/simple";
function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      {/* <section id="simple"> */}
        {/* <SimplePage />
      </section>

      <section id="why">
        <WhyLivo />
      </section> */}

      <section id="why">
        <WhyLivo />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="calculator">
        <Calculator />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="download">
        <Download />
      </section>
      

      <Footer />
    </>
    
  );
}

export default App;