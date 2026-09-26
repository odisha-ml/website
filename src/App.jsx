import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Events from './pages/Events';
import ConferenceDetail from './pages/ConferenceDetail';
import Initiatives from './pages/Initiatives';
import InitiativeDetail from './pages/InitiativeDetail';
import Resources from './pages/Resources';
import Join from './pages/Join';
import { LanguageProvider } from './utils/LanguageContext';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/*" element={<BlogPost />} />
              <Route path="/conferences" element={<Events />} />
              <Route path="/conferences/:slug" element={<ConferenceDetail />} />
              <Route path="/initiatives" element={<Initiatives />} />
              <Route path="/initiatives/:slug" element={<InitiativeDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
