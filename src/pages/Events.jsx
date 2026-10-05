import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const ALL = [
  { slug: '2026',            title: '2026 Odisha AI Conference',             date: '10 Oct 2026',    location: 'Hybrid',    img: '/images/conference-covers/2026.webp',      tag: 'Upcoming', desc: 'Vision to Impact — making Odisha the Intellectual AI Capital of the World.' },
  { slug: 'summit',          title: 'Odisha AI Summit 2025',                date: '21–22 Dec 2025',  location: 'Bhubaneshwar, India', img: '/images/summit.webp',                        tag: 'Past',     desc: 'Global gathering of educators, policy makers, and investors charting Odisha\'s AI implementation path.' },
  { slug: 'regional-summit', title: 'Odisha AI Regional Summit Series 2025', date: '14 Nov 2025',    location: 'Multiple Cities, Odisha', img: '/images/regional-summit-series.png',     tag: 'Past',     desc: 'Regional summits bringing the AI conference experience closer to communities across Odisha.' },
  { slug: '2025',            title: '2025 Odisha AI Conference',             date: '11 Oct 2025',    location: 'Online + Odisha, India', img: '/images/conference-covers/2025.webp',      tag: 'Past',     desc: 'Sixth annual international congregation — from first light of the day to the last.' },
  { slug: '2024',            title: '2024 Odisha AI Conference',             date: '2024',           location: 'Hybrid', img: '/images/conference-covers/2024.webp',                       tag: 'Past',     desc: 'Fifth annual conference on practical AI applications and community building.' },
  { slug: '2023',            title: '2023 Odisha AI Conference',             date: '2023',           location: 'Hybrid', img: '/images/conference-covers/2023.webp',                       tag: 'Past',     desc: 'Deep dives into ML research, NLP for Odia language, and AI innovation.' },
  { slug: '2022',            title: '2022 Odisha AI Conference',             date: '2022',           location: 'Virtual', img: '/images/conference-covers/2022.webp',                      tag: 'Past',     desc: 'Exploring AI/ML trends, the startup ecosystem, and opportunities for Odias worldwide.' },
  { slug: '2021',            title: '2021 Odisha AI Conference',             date: '2021',           location: 'Virtual', img: '/images/conference-covers/2021.png',                       tag: 'Past',     desc: 'Community-building milestone with mentorship, talks, and cross-industry collaboration.' },
  { slug: '2020',            title: '2020 Odisha AI Conference',             date: '2020',           location: 'Virtual', img: '/images/conference-covers/2020.webp',                      tag: 'Past',     desc: 'The inaugural Odisha AI conference — the beginning of a global movement.' },
];

export default function Conferences() {
  const { t } = useLanguage();
  usePageMeta({
    title: 'Conferences',
    path: '/conferences',
    description: 'Explore Odisha AI conferences and summits from 2020 to 2026 — annual international gatherings of Odias in Artificial Intelligence.',
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom:'1px solid var(--border)', paddingTop:'5rem', paddingBottom:'4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-60, left:-60, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger">
            <div className="section-label">{t('conferences.label')}</div>
            <h1 style={{ marginBottom:'1rem' }}>{t('conferences.title')}</h1>
            <p style={{ fontSize:'1.1rem', maxWidth:520 }}>
              {t('conferences.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'4rem' }}>
        {/* Upcoming banner */}
        <Link to="/conferences/2026" className="card" style={{ padding:'2rem 2.5rem', marginBottom:'3rem', background:'linear-gradient(135deg, rgba(48,209,88,0.06), rgba(0,212,255,0.04))', borderColor:'rgba(48,209,88,0.15)', display:'flex', gap:'2rem', alignItems:'center', flexWrap:'wrap', textDecoration:'none', color:'inherit', transition:'all var(--t)' }}
          onMouseOver={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.borderColor='rgba(48,209,88,0.3)'; }}
          onMouseOut={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='rgba(48,209,88,0.15)'; }}
        >
          <div style={{ flex:1 }}>
            <span className="tag tag-green" style={{ marginBottom:'0.75rem', display:'inline-flex' }}>{t('conferences.upcoming')}</span>
            <h3 style={{ fontSize:'1.4rem', marginBottom:'0.5rem' }}>2026 Odisha AI Conference</h3>
            <p style={{ fontSize:'0.9rem' }}>10 October 2026 • Hybrid — Vision to Impact: Making Odisha the Intellectual AI Capital of the World.</p>
          </div>
          <span style={{ display:'flex', alignItems:'center', gap:'0.4rem', color:'var(--c1)', fontWeight:700, fontSize:'0.9rem', whiteSpace:'nowrap' }}>
            {t('common.learnMore')} <ChevronRight size={16}/>
          </span>
        </Link>

        {/* Grid */}
        <div className="grid-2 stagger">
          {ALL.map((c, i) => (
            <Link key={i} to={`/conferences/${c.slug}`}
              className="card card-glow"
              style={{ textDecoration:'none', color:'inherit', overflow:'hidden', display:'flex', flexDirection:'column' }}
            >
              <div style={{ position:'relative', overflow:'hidden' }}>
                <img src={c.img} alt={c.title} loading="lazy" decoding="async"
                  style={{ width:'100%', height:220, objectFit:'cover', transition:'transform 0.5s ease' }}
                  onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'}
                  onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <div style={{ position:'absolute', bottom:'1rem', left:'1rem', right:'1rem', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                  <span className={`tag ${c.tag === 'Upcoming' ? 'tag-green' : ''}`} style={{ fontSize:'0.68rem' }}>{c.tag}</span>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', color:'rgba(255,255,255,0.6)' }}>{c.date}</span>
                </div>
              </div>
              <div style={{ padding:'1.5rem', flex:1, display:'flex', flexDirection:'column', gap:'0.6rem' }}>
                <h3 style={{ margin:0, fontSize:'1.05rem', lineHeight:1.3 }}>{c.title}</h3>
                <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', color:'var(--text3)', fontSize:'0.78rem' }}>
                  📍 {c.location}
                </div>
                <p style={{ fontSize:'0.85rem', lineHeight:1.7, flex:1 }}>{c.desc}</p>
                <span style={{ color:'var(--c1)', fontSize:'0.8rem', fontWeight:600, display:'flex', alignItems:'center', gap:'0.3rem', marginTop:'auto' }}>
                  {t('common.learnMore')} <ChevronRight size={13}/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
