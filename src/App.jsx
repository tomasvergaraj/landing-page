import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import SEO from './components/SEO';
import Trust from './components/Trust';
import ProjectGallery from './components/ProjectGallery';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <Trust />
        <ProjectGallery />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
