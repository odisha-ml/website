import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

/* ── Animated counter ── */
function Counter({ end, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let s = 0; const dur = 1400; const step = 16;
        const timer = setInterval(() => {
          s += step; setVal(Math.min(Math.round(end * s / dur), end));
          if (s >= dur) clearInterval(timer);
        }, step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const CONFERENCES = [
  { year: '2026', slug: '2026', title: '2026 Odisha AI Conference', date: '10 Oct 2026', desc: 'Upcoming annual conference bringing together the Odia AI community for talks, workshops, and networking.', img: '/images/conference-covers/2026.webp', tag: 'Upcoming' },
  { year: '2025', slug: 'summit', title: 'Odisha AI Summit 2025', date: '21 Dec 2025', desc: 'Global gathering in Bhubaneshwar — educators, policy makers, industry leaders, and investors charting Odisha\'s AI path.', img: '/images/summit.webp', tag: 'Past' },
  { year: '2024', slug: '2024', title: '2024 Odisha AI Conference', date: '2024', desc: 'Annual conference bringing together the Odia AI community for talks, workshops, and networking.', img: '/images/conference-covers/2024.webp', tag: 'Past' },
];

const INITIATIVES = [
  { title: 'Rathathon', desc: 'A perpetual hackathon focused on AI and its real-world applications.', img: '/images/initiatives/rathathon.webp', tag: 'hackathon', color: 'var(--c3)' },
  { title: 'AI Foundation Series', desc: '20-session continuum covering every aspect of AI fundamentals — from theory to practice.', img: '/images/initiatives/ai-foundation-series.webp', tag: 'education', color: 'var(--c1)' },
  { title: 'Odia Generative AI', desc: 'Research on GenAI and LLMs for Indic Languages — making AI accessible to Odias.', img: '/images/initiatives/odiagenai.webp', tag: 'genai', color: 'var(--c2)' },
];

const STATS = [
  { num: 5, suffix: '+', label: 'Years of Impact' },
  { num: 1000, suffix: '+', label: 'Global Members' },
  { num: 16, suffix: '', label: 'Chapter Countries' },
  { num: 8, suffix: '', label: 'Annual Conferences' },
];

/* ── FAQ: visible answers that mirror the FAQPage schema in index.html ── */
const FAQS = [
  { q: 'What is Odisha AI?', a: 'Odisha AI (also known as Odias in AI/ML) is a not-for-profit global community that unites Odia people working in Artificial Intelligence. It runs conferences, hackathons, mentoring programs, and education series, and builds open-source AI for the Odia language.' },
  { q: 'How can I join the Odisha AI community?', a: 'Anyone interested in AI and connected to Odisha or the Odia diaspora can join for free. The fastest way is the Odisha AI WhatsApp community, or email info@odishaai.org. The Join page lists every channel.' },
  { q: 'Is Odisha AI free to join?', a: 'Yes. Odisha AI is a not-for-profit initiative and membership is free and open to researchers, students, engineers, educators, and enthusiasts worldwide.' },
  { q: 'What initiatives does Odisha AI run?', a: 'Initiatives include the Rathathon perpetual hackathon, the AI Foundation Series, Odia Generative AI (OdiaGenAI) research, the AI/ML Faculty Development Program, the AI/ML Summer School, lecture series, and the OpenOdia open-source Python package.' },
  { q: 'When is the next Odisha AI conference?', a: 'The 2026 Odisha AI Conference — the seventh annual international congregation of Odias in AI — is scheduled for 10 October 2026 in Odisha, India. See the Conferences page for details.' },
];

export default function Home() {
  const { t } = useLanguage();
  usePageMeta({
    path: '/',
    description: 'Uniting Odias in AI across the globe. A not-for-profit initiative for sharing ideas, fostering collaborations, and increasing the presence of Odia people in Artificial Intelligence.',
    keywords: 'Odisha AI, Odias in AI, Odia in ML, AI community, Machine Learning, Generative AI, Odia language AI, OdiaGenAI, Rathathon, AI conference Odisha',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  });

  return (
    <div>
      {/* ─────── HERO ─────── */}
      <section style={{ position:'relative', minHeight:'92vh', display:'flex', alignItems:'center', overflow:'hidden' }}>
        {/* BG image with overlay */}
        <div style={{ position:'absolute', inset:0, zIndex:0 }}>
          <img src="/images/index.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'brightness(0.18) saturate(0.7)' }}
          />
          {/* gradient overlay */}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0.3))' }} />
          {/* bottom fade */}
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:200, background:'linear-gradient(to top, #000, transparent)' }} />
        </div>

        {/* Floating blobs */}
        <div style={{ position:'absolute', top:'15%', right:'8%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents:'none', animation:'float 6s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:'20%', right:'20%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle, rgba(191,90,242,0.07) 0%, transparent 70%)', pointerEvents:'none', animation:'float 8s ease-in-out 2s infinite' }} />

        <div className="container hero-content" style={{ position:'relative', zIndex:1, paddingTop:'4rem', paddingBottom:'4rem' }}>
          <div style={{ maxWidth:720 }} className="stagger">
            <div className="section-label" style={{ marginBottom:'1.5rem' }}>Odisha AI Community</div>
            <h1 style={{ fontSize:'clamp(3rem,7vw,5.5rem)', marginBottom:'0.5rem' }}>
              {t('hero.title')}
            </h1>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:400, fontSize:'clamp(1.5rem,3vw,2.2rem)', color:'var(--text2)', marginBottom:'2rem', letterSpacing:'-0.01em' }}>
              {t('hero.subtitle')}
            </h2>
            <p style={{ fontSize:'1.05rem', color:'var(--text2)', lineHeight:1.8, marginBottom:'2.5rem', maxWidth:580 }}>
              {t('hero.desc')}
            </p>
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Link to="/join" className="btn btn-glow" style={{ fontSize:'0.95rem', padding:'0.75rem 1.8rem' }}>
                {t('hero.join')} <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-outline" style={{ fontSize:'0.95rem', padding:'0.75rem 1.8rem' }}>
                {t('hero.mission')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── STATS ─────── */}
      <div style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container" style={{ padding:'3rem 2rem' }}>
          <div className="grid-4">
            <div style={{ textAlign:'center', padding:'1.5rem' }}>
              <div className="stat-num gradient-text"><Counter end={5} suffix="+" /></div>
              <div style={{ fontSize:'0.8rem', color:'var(--text3)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'0.4rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('stats.years')}</div>
            </div>
            <div style={{ textAlign:'center', padding:'1.5rem' }}>
              <div className="stat-num gradient-text"><Counter end={1000} suffix="+" /></div>
              <div style={{ fontSize:'0.8rem', color:'var(--text3)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'0.4rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('stats.members')}</div>
            </div>
            <div style={{ textAlign:'center', padding:'1.5rem' }}>
              <div className="stat-num gradient-text"><Counter end={16} suffix="" /></div>
              <div style={{ fontSize:'0.8rem', color:'var(--text3)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'0.4rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('stats.chapters')}</div>
            </div>
            <div style={{ textAlign:'center', padding:'1.5rem' }}>
              <div className="stat-num gradient-text"><Counter end={8} suffix="" /></div>
              <div style={{ fontSize:'0.8rem', color:'var(--text3)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginTop:'0.4rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('stats.conf')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────── CONFERENCES ─────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'2.5rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <div className="section-label">{t('home.eventsLabel')}</div>
              <h2 className="section-title">{t('home.eventsTitle')}</h2>
            </div>
            <Link to="/conferences" className="btn btn-ghost" style={{ fontSize:'0.85rem' }}>
              {t('common.viewAll')} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid-3 stagger">
            {CONFERENCES.map((c,i) => (
              <Link to="/conferences" key={i} className="card card-glow" style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column' }}>
                <div style={{ overflow:'hidden', borderRadius:'var(--r3) var(--r3) 0 0' }}>
                  <img src={c.img} alt={c.title} className="img-card-cover" style={{ height:200 }} loading="lazy" decoding="async" />
                </div>
                <div style={{ padding:'1.5rem', display:'flex', flexDirection:'column', gap:'0.75rem', flex:1 }}>
                  <div style={{ display:'flex', gap:'0.5rem', alignItems:'center' }}>
                    <span className={`tag ${c.tag === 'Upcoming' ? 'tag-green' : ''}`}>{c.tag}</span>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'var(--text3)' }}>{c.date}</span>
                  </div>
                  <h3 style={{ margin:0 }}>{c.title}</h3>
                  <p style={{ fontSize:'0.875rem', flex:1 }}>{c.desc}</p>
                  <span style={{ color:'var(--c1)', fontSize:'0.82rem', fontWeight:600, display:'flex', alignItems:'center', gap:'0.3rem' }}>
                    {t('common.learnMore')} <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── INITIATIVES ─────── */}
      <section className="section" style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'2.5rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <div className="section-label">{t('home.initiativesLabel')}</div>
              <h2 className="section-title">{t('home.initiativesTitle')}</h2>
            </div>
            <Link to="/initiatives" className="btn btn-ghost" style={{ fontSize:'0.85rem' }}>
              {t('common.viewAll')} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid-3 stagger">
            {INITIATIVES.map((init,i) => (
              <Link to="/initiatives" key={i} className="card card-glow-purple" style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column' }}>
                <div style={{ overflow:'hidden', borderRadius:'var(--r3) var(--r3) 0 0', position:'relative' }}>
                  <img src={init.img} alt={init.title} className="img-card-cover" style={{ height:180 }} loading="lazy" decoding="async" />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                </div>
                <div style={{ padding:'1.5rem', flex:1, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                  <span className="tag" style={{ borderColor:`rgba(${init.color === 'var(--c1)' ? '0,212,255' : init.color === 'var(--c2)' ? '191,90,242' : '255,107,53'},0.3)`, background:`rgba(${init.color === 'var(--c1)' ? '0,212,255' : init.color === 'var(--c2)' ? '191,90,242' : '255,107,53'},0.07)`, color:init.color, alignSelf:'flex-start' }}>
                    {init.tag}
                  </span>
                  <h3 style={{ margin:0 }}>{init.title}</h3>
                  <p style={{ fontSize:'0.875rem', flex:1 }}>{init.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── MISSION BANNER ─────── */}
      <section className="section">
        <div className="container">
          <div className="card mission-card" style={{ padding:'4rem 3rem', background:'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(191,90,242,0.04))', borderColor:'rgba(0,212,255,0.1)', position:'relative', overflow:'hidden' }}>
            {/* decorative rings */}
            <div style={{ position:'absolute', top:-100, right:-100, width:400, height:400, borderRadius:'50%', border:'1px solid rgba(0,212,255,0.06)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', top:-60, right:-60, width:280, height:280, borderRadius:'50%', border:'1px solid rgba(191,90,242,0.06)', pointerEvents:'none' }} />
            <div style={{ maxWidth:640, position:'relative', zIndex:1 }}>
              <div className="section-label">{t('home.missionLabel')}</div>
              <h2 style={{ marginBottom:'1.25rem' }}>
                {t('home.missionTitle')}
              </h2>
              <p style={{ fontSize:'1.05rem', lineHeight:1.8, marginBottom:'2rem' }}>
                {t('home.missionDesc')}
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <Link to="/about" className="btn btn-glow">{t('home.missionStory')} <ArrowRight size={15}/></Link>
                <Link to="/resources" className="btn btn-outline">{t('home.missionExplore')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── LATEST BLOG ─────── */}
      <section className="section" style={{ background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'2.5rem', flexWrap:'wrap', gap:'1rem' }}>
            <div>
              <div className="section-label">{t('home.blogLabel')}</div>
              <h2 className="section-title">{t('home.blogTitle')}</h2>
            </div>
            <Link to="/blogs" className="btn btn-ghost" style={{ fontSize:'0.85rem' }}>
              {t('common.viewAll')} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="card blog-feature" style={{ display:'flex', gap:0, overflow:'hidden' }}>
            <div className="blog-feature-img" style={{ flex:'0 0 45%', background:'var(--bg3)' }}>
              <img src="/images/blogs/gscc-chapter.webp"
                alt="GSCC Chapter"
                loading="lazy"
                decoding="async"
                onError={e => { e.currentTarget.src='https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80'; }}
                style={{ width:'100%', height:'100%', objectFit:'cover', minHeight:280 }}
              />
            </div>
            <div style={{ flex:1, padding:'2.5rem', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div>
                <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1rem' }}>
                  <span className="tag tag-purple">chapter</span>
                  <span className="tag tag-purple">education</span>
                </div>
                <h3 style={{ fontSize:'1.5rem', marginBottom:'1rem' }}>Inauguration of GSCC Chapter</h3>
                <p>The GSCC Chapter of Odisha AI was inaugurated, marking a new milestone for the community — bringing AI education and collaboration closer to students.</p>
              </div>
              <Link to="/blogs" className="btn btn-outline" style={{ alignSelf:'flex-start', marginTop:'1.5rem' }}>
                {t('home.blogAction')} <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── SPONSORS ─────── */}
      <section className="section" style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom:'2.5rem' }}>
            <div className="section-label">Sponsors & Partners</div>
            <h2 className="section-title">Empowering the Ecosystem Together</h2>
            <p className="section-desc">
              Odisha AI is supported by organizations that share our vision of making advanced AI education accessible and fostering innovation.
            </p>
          </div>

          <div className="stagger" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Call to Action Card */}
            <div 
              className="card card-glow-purple" 
              style={{ 
                padding: '3rem', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                background: 'linear-gradient(180deg, var(--bg3) 0%, rgba(13,13,13,0.7) 100%)' 
              }}
            >
              <div>
                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', marginBottom: '1rem' }}>Become a Partner</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.7, margin: 0, maxWidth: '600px' }}>
                  We invite businesses, foundations, and institutions to sponsor our events, hackathons, and educational series. Partnering with Odisha AI offers brand visibility to premium tech talent while helping build the future of AI.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="mailto:info@odishaai.org?subject=Sponsorship%20Inquiry%20-%20Landing%20Page&body=Hi%20Odisha%20AI%20Team%2C%0A%0AWe%20are%20interested%20in%20discussing%20sponsorship%20and%20partnership%20opportunities%20with%20Odisha%20AI.%0A%0ABest%20regards%2C%0A%5BYour%20Name%2FCompany%5D" 
                  className="btn btn-outline" 
                  style={{ borderColor: 'var(--c2)', color: 'var(--c2)', fontSize: '0.9rem', padding: '0.75rem 1.8rem', background: 'transparent' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(191,90,242,0.08)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--c2)'; }}
                >
                  Discuss Sponsorship
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── FAQ (Answer Engine Optimized) ─────── */}
      <section className="section" style={{ borderTop:'1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom:'2.5rem', maxWidth:720 }}>
            <div className="section-label">Frequently Asked</div>
            <h2 className="section-title">Questions, answered</h2>
            <p className="section-desc">
              The essentials about Odisha AI — for newcomers, partners, and the AI agents reading this page.
            </p>
          </div>

          <div style={{ maxWidth:820, display:'grid', gap:'0.85rem' }}>
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="faq-item"
                style={{
                  background:'var(--bg-card)',
                  border:'1px solid var(--border)',
                  borderRadius:14,
                  padding:'1.15rem 1.4rem',
                }}
              >
                <summary
                  style={{
                    cursor:'pointer',
                    listStyle:'none',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    gap:'1rem',
                    fontFamily:"'Syne', sans-serif",
                    fontWeight:600,
                    fontSize:'1.05rem',
                    color:'var(--text)',
                  }}
                >
                  <span>{f.q}</span>
                  <ChevronRight size={18} className="faq-chevron" style={{ flexShrink:0, color:'var(--c1)' }} />
                </summary>
                <p style={{ margin:'0.9rem 0 0', color:'var(--text2)', lineHeight:1.7, fontSize:'0.97rem' }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── JOIN CTA ─────── */}
      <section className="section">
        <div className="container" style={{ textAlign:'center' }}>
          <div className="section-label" style={{ display:'flex', justifyContent:'center' }}>{t('home.joinLabel')}</div>
          <h2 style={{ marginBottom:'1rem' }}>
            {t('home.joinTitle')}
          </h2>
          <p style={{ maxWidth:480, margin:'0 auto 2.5rem', fontSize:'1.05rem' }}>
            {t('home.joinDesc')}
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="https://chat.whatsapp.com/I5lG1GiGBboGjaD9P6c87t" target="_blank" rel="noopener noreferrer" className="btn btn-glow" style={{ fontSize:'1rem', padding:'0.85rem 2rem' }}>
              {t('home.joinAction')} <ArrowUpRight size={16}/>
            </a>
            <Link to="/about" className="btn btn-outline" style={{ fontSize:'1rem', padding:'0.85rem 2rem' }}>
              {t('home.joinTeam')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
