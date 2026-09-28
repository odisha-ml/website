import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { IconGithub, IconTwitter, IconLinkedin, IconYoutube, IconInstagram } from './SocialIcons';
import { useLanguage } from '../utils/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: '6rem', background: 'var(--bg2)' }}>
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(2)].map((_, ri) =>
            ['AI Foundation Series','Rathathon Hackathon','Odia GenAI','Annual Conference 2026','AI Summit','Faculty Dev Program','Regional Summit Series','OpenOdia PyPi'].map((text,i) => (
              <span key={`${ri}-${i}`} className="ticker-item">
                <span>✦</span> {text}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="container footer-wrap" style={{ padding: '4rem 2rem 2rem' }}>
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'3rem', marginBottom:'3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <img src="/images/odisha-ai-logo.svg" alt="Odisha AI logo" style={{ width:34, height:34, objectFit:'contain', flexShrink:0 }} />
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:'1.3rem', fontWeight:800 }}>Odisha AI</span>
            </div>
            <p style={{ fontSize:'0.875rem', color:'var(--text3)', lineHeight:1.8, maxWidth:280 }}>
              {t('footer.brandDesc')}
            </p>
            <div style={{ display:'flex', gap:'0.5rem', marginTop:'1.5rem' }}>
              {[
                { href:'https://github.com/odisha-ml', Icon:IconGithub, label:'GitHub' },
                { href:'https://twitter.com/odias_in_ai', Icon:IconTwitter, label:'Twitter' },
                { href:'https://www.linkedin.com/company/75029211', Icon:IconLinkedin, label:'LinkedIn' },
                { href:'https://www.youtube.com/@OdiasInML', Icon:IconYoutube, label:'YouTube' },
                { href:'https://www.instagram.com/odias_in_ai/', Icon:IconInstagram, label:'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', width:34, height:34, borderRadius:'var(--r2)', border:'1px solid var(--border)', color:'var(--text3)', transition:'all var(--t)' }}
                  onMouseOver={e=>{e.currentTarget.style.borderColor='rgba(0,212,255,0.4)';e.currentTarget.style.color='var(--c1)';}}
                  onMouseOut={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--text3)';}}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text3)', marginBottom:'1rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('footer.pages')}</div>
            {[
              ['/',  t('nav.home')],
              ['/blogs', t('nav.blog')],
              ['/conferences', t('nav.conferences')],
              ['/initiatives', t('nav.initiatives')],
              ['/resources', t('nav.resources')]
            ].map(([to,lbl]) => (
              <Link key={to} to={to} style={{ display:'block', color:'var(--text3)', fontSize:'0.875rem', marginBottom:'0.5rem', transition:'color var(--t)' }}
                onMouseOver={e=>e.currentTarget.style.color='var(--text)'}
                onMouseOut={e=>e.currentTarget.style.color='var(--text3)'}
              >{lbl}</Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text3)', marginBottom:'1rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('footer.community')}</div>
            {[
              ['/about', t('nav.about')],
              ['/join', t('nav.join')],
              ['https://chat.whatsapp.com/HEfoBJHKqjzJIDMfoTsAZp', t('home.joinAction')],
              ['https://umami.ekathi.com/share/CAyEwBULBAzB4DCB/www.odishaai.org/', 'Analytics'],
            ].map(([to,lbl]) => {
              const ext = to.startsWith('http');
              return ext
                ? <a key={to} href={to} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'0.3rem', color:'var(--text3)', fontSize:'0.875rem', marginBottom:'0.5rem', transition:'color var(--t)' }}
                    onMouseOver={e=>e.currentTarget.style.color='var(--text)'}
                    onMouseOut={e=>e.currentTarget.style.color='var(--text3)'}
                  >{lbl} <ExternalLink size={10}/></a>
                : <Link key={to} to={to} style={{ display:'block', color:'var(--text3)', fontSize:'0.875rem', marginBottom:'0.5rem', transition:'color var(--t)' }}
                    onMouseOver={e=>e.currentTarget.style.color='var(--text)'}
                    onMouseOut={e=>e.currentTarget.style.color='var(--text3)'}
                  >{lbl}</Link>;
            })}
          </div>

          {/* Resources */}
          <div>
            <div style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text3)', marginBottom:'1rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('nav.resources')}</div>
            {[
              ['https://github.com/odisha-ml/Awesome-Odia-AI/','Awesome Odia AI'],
              ['https://glossary.odishaai.org/','AI Glossary'],
              ['https://files.odishaai.org/odisha_vision_document.pdf','Odisha Vision'],
              ['https://files.odishaai.org/resolution_on_odisha_ai_policy_2025.pdf','AI Policy 2025'],
            ].map(([href,lbl]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'0.3rem', color:'var(--text3)', fontSize:'0.875rem', marginBottom:'0.5rem', transition:'color var(--t)' }}
                onMouseOver={e=>e.currentTarget.style.color='var(--text)'}
                onMouseOut={e=>e.currentTarget.style.color='var(--text3)'}
              >{lbl} <ExternalLink size={10}/></a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
          <p style={{ fontSize:'0.78rem', color:'var(--text3)' }}>
            Odisha AI © 2020–{new Date().getFullYear()} Odisha AI Incorporated • Made by{' '}
            {[
              ['https://www.linkedin.com/in/anishaswain/','Anisha'],
              ['https://www.linkedin.com/in/goutam-samal/','Goutam'],
              ['https://www.linkedin.com/in/subhadarshi-panda-1ba5091a/','Subhadarshi'],
              ['https://www.soumendrak.com','Soumendra'],
            ].map(([href,name],i,arr) => (
              <span key={href}><a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--text2)' }}>{name}</a>{i < arr.length-1 ? ', ' : ''}</span>
            ))}
          </p>
          <a href="https://github.com/odisha-ml/website" target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.78rem', color:'var(--text3)', display:'flex', alignItems:'center', gap:'0.3rem' }}>
            <IconGithub size={12}/> View source
          </a>
        </div>
      </div>
    </footer>
  );
}
