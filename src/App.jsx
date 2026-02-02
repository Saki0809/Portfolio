import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntigravityBackground from './components/effects/AntigravityBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Social from './components/sections/Social';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Admin from './pages/Admin';

const HomePage = () => (
  <div className="relative min-h-screen">
    {/* Antigravity floating background */}
    <AntigravityBackground />
    
    {/* Navigation */}
    <Navbar />
    
    {/* Main content */}
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Contact />
    </main>
    
    {/* Footer */}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
