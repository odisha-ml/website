import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IconGithub, IconTwitter, IconLinkedin, IconYoutube } from './SocialIcons';
import './Navbar.css';
import { useLanguage } from '../utils/LanguageContext';

const NAV_LINKS = [
  { to: '/blogs', key: 'blogs' },
  { to: '/conferences', key: 'conferences' },
  { to: '/initiatives', key: 'initiatives' },
  { to: '/resources', key: 'resources' },
  { to: '/about', key: 'about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className="navbar" style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent' }}>
      <div className="navbar-inner">
        <Link to="/" className="nav-brand">
          <img src="/images/odisha-ai-logo.svg" alt="Odisha AI logo" className="nav-brand-logo" />
          Odisha AI
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname.startsWith(l.to) ? 'active' : ''}`}
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'or' : 'en')}
            className="nav-social" 
            style={{ width: 'auto', padding: '0 0.6rem', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--c1)' }}
          >
            {lang === 'en' ? 'OR' : 'EN'}
          </button>

          <a href="https://github.com/odisha-ml" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="GitHub">
            <IconGithub size={14} />
          </a>
          <a href="https://twitter.com/odias_in_ai" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Twitter">
            <IconTwitter size={14} />
          </a>
          <a href="https://www.linkedin.com/company/75029211" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="LinkedIn">
            <IconLinkedin size={14} />
          </a>
          <a href="https://www.youtube.com/@OdiasInML" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="YouTube">
            <IconYoutube size={14} />
          </a>
          <Link to="/join" className="btn btn-glow" style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem' }}>
            {t('nav.join')}
          </Link>
          <button className="nav-mobile-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
