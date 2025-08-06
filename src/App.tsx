import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/layout/ScrollToTop';
import { Sparkles } from './components/ui/sparkles';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import OurWork from './pages/OurWork';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import WhoWeHelp from './pages/WhoWeHelp';
import Enterprise from './pages/Enterprise';
import TestimonialsDemo from './pages/TestimonialsDemo';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black text-white font-inter">
        <Sparkles 
          density={200}
          className="fixed inset-0 pointer-events-none"
          color="#a78bfa"
          size={1.5}
          speed={0.3}
          opacity={0.4}
        />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/WhyUs" element={<WhyUs />} />
            <Route path="/OurWork" element={<OurWork />} />
            <Route path="/our-story" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/who-we-help" element={<WhoWeHelp />} />
            <Route path="/testimonials-demo" element={<TestimonialsDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
