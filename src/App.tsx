import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import OurWork from './pages/OurWork';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import WhoWeHelp from './pages/WhoWeHelp';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/WhyUs" element={<WhyUs />} />
            <Route path="/OurWork" element={<OurWork />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/who-we-help" element={<WhoWeHelp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
