import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const WAYS = [
  { emoji:'💬', title:'WhatsApp Group', desc:'Join our active WhatsApp group to connect with members, share resources, and stay updated on events.', cta:'Join Now', href:'https://chat.whatsapp.com/GPJvjoB7cGt0nR68jvgrr1', color:'var(--c4)' },
  { emoji:'🐦', title:'Follow on Twitter/X', desc:'Get real-time updates on events, research, and community news from @odias_in_ai.', cta:'Follow Us', href:'https://twitter.com/odias_in_ai', color:'var(--c1)' },
  { emoji:'💼', title:'LinkedIn Community', desc:'Connect professionally with Odia AI practitioners, researchers, and industry leaders worldwide.', cta:'Connect', href:'https://www.linkedin.com/company/75029211', color:'var(--c1)' },
  { emoji:'📺', title:'YouTube Channel', desc:'Watch recorded sessions, conference talks, lectures, and tutorial videos on our YouTube channel.', cta:'Subscribe', href:'https://www.youtube.com/@OdiasInML', color:'var(--c3)' },
  { emoji:'📸', title:'Instagram', desc:'Visual stories, event highlights, and community moments — follow our Instagram.', cta:'Follow', href:'https://www.instagram.com/odias_in_ai/', color:'var(--c2)' },
  { emoji:'💻', title:'Contribute on GitHub', desc:'Open source is at our core. Contribute to Odia AI tools, datasets, and our website on GitHub.', cta:'View Repos', href:'https://github.com/odisha-ml', color:'var(--text2)' },
];

export default function Join() {
  const { t } = useLanguage();
  usePageMeta({
    title: 'Join',
    path: '/join',
    description: 'Join the Odisha AI community — connect on WhatsApp, Twitter/X, LinkedIn, YouTube, Instagram, and GitHub, and help build the future of AI for Odias.',
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom:'1px solid var(--border)', paddingTop:'5rem', paddingBottom:'4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-60, left:-40, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(191,90,242,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger" style={{ maxWidth:640 }}>
            <div className="section-label">{t('join.label')}</div>
            <h1 style={{ marginBottom:'1rem' }}>
              {t('join.title')}
            </h1>
            <p style={{ fontSize:'1.1rem', lineHeight:1.8 }}>
              {t('join.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'3.5rem', paddingBottom:'4rem' }}>
        {/* Primary CTA */}
        <div className="card" style={{ padding:'3rem 2.5rem', marginBottom:'3rem', background:'linear-gradient(135deg, rgba(48,209,88,0.08), rgba(0,212,255,0.04))', borderColor:'rgba(48,209,88,0.2)', display:'flex', gap:'3rem', alignItems:'center', flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>💬</div>
            <h2 style={{ marginBottom:'0.75rem', fontSize:'1.8rem' }}>{t('home.joinTitle')}</h2>
            <p style={{ fontSize:'1rem', lineHeight:1.8, marginBottom:'1.5rem' }}>
              {t('home.joinDesc')}
            </p>
            <a href="https://chat.whatsapp.com/GPJvjoB7cGt0nR68jvgrr1" target="_blank" rel="noopener noreferrer"
              className="btn btn-glow" style={{ fontSize:'1.05rem', padding:'0.85rem 2rem' }}>
              {t('home.joinAction')} <ArrowRight size={16}/>
            </a>
          </div>
          <div style={{ flex:'0 0 auto' }}>
            <div style={{ width:180, height:180, borderRadius:'var(--r3)', background:'var(--bg3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5rem', border:'1px solid var(--border)' }}>
              📱
            </div>
          </div>
        </div>

        {/* Ways to Connect */}
        <div style={{ marginBottom:'1rem' }}>
          <div className="section-label">Channels</div>
          <h2 style={{ marginBottom:'2rem' }}>Ways to Connect</h2>
        </div>
        <div className="grid-3 stagger">
          {WAYS.map((w, i) => (
            <a key={i} href={w.href} target="_blank" rel="noopener noreferrer"
              className="card"
              style={{ textDecoration:'none', color:'inherit', padding:'2rem', display:'flex', flexDirection:'column', gap:'0.75rem', transition:'all var(--t)' }}
              onMouseOver={e=>{ e.currentTarget.style.borderColor=`${w.color}44`; e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow=`0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${w.color}15`; }}
              onMouseOut={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
            >
              <div style={{ fontSize:'2.2rem' }}>{w.emoji}</div>
              <h3 style={{ margin:0, fontSize:'1.05rem' }}>{w.title}</h3>
              <p style={{ fontSize:'0.85rem', lineHeight:1.7, flex:1 }}>{w.desc}</p>
              <span style={{ color:w.color, fontSize:'0.82rem', fontWeight:700, display:'flex', alignItems:'center', gap:'0.3rem', letterSpacing:'0.02em' }}>
                {w.cta} <ExternalLink size={12}/>
              </span>
            </a>
          ))}
        </div>

        {/* Initiatives prompt */}
        <div className="card" style={{ padding:'2.5rem', marginTop:'3rem', textAlign:'center', background:'linear-gradient(135deg, rgba(191,90,242,0.04), rgba(0,212,255,0.04))', borderColor:'rgba(191,90,242,0.1)' }}>
          <h3 style={{ marginBottom:'0.75rem' }}>Want to Volunteer?</h3>
          <p style={{ maxWidth:500, margin:'0 auto 1.5rem', fontSize:'0.9rem' }}>
            We're always looking for passionate volunteers to help run events, create content, 
            and lead local chapters.
          </p>
          <Link to="/initiatives" className="btn btn-outline">
            {t('nav.initiatives')} <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
