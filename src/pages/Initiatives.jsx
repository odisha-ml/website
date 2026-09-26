import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const ALL_INITIATIVES = [
  { slug:'rfs-s2s',            title:'🎤 RFS: Speech-to-Speech',           desc:'New RFS open exclusively to Odisha AI Fundamentals S2S and Odisha AI community — build an Odia Speech translation system converting to English, Mandarin and Hindi.', img:'/images/initiatives/rfs-s2s.png', tags:['rfs','hackathon','odia'], color:'var(--c2)' },
  { slug:'rathathon',          title:'Rathathon',                          desc:'A perpetual hackathon focused on AI and its applications — 24/7 open to all builders.', img:'/images/initiatives/rathathon.webp',           tags:['hackathon','event','education'], color:'var(--c3)' },
  { slug:'ai-foundation-series', title:'AI Foundation Series',            desc:'20-session continuum covering AI fundamentals — from linear algebra to transformers.', img:'/images/initiatives/ai-foundation-series.webp', tags:['education','event'],             color:'var(--c1)' },
  { slug:'odiagenai',           title:'Odia Generative AI',                desc:'Research on GenAI and LLMs for Indic Languages, making AI accessible in Odia.', img:'/images/initiatives/odiagenai.webp',            tags:['genai','odia'],                  color:'var(--c2)' },
  { slug:'fdp',                 title:'AI/ML Faculty Development Program', desc:'Joint collaboration of OdiaML and VSSUT enriching faculty members with AI/ML skills.', img:'/images/initiatives/fdp.webp',              tags:['education','event'],             color:'var(--c1)' },
  { slug:'summer-school',       title:'AI/ML Summer School',              desc:'Practical, hands-on AI/ML learning for students from Odisha and across India.', img:'/images/initiatives/summer_school.webp',       tags:['education'],                     color:'var(--c4)' },
  { slug:'ml-lecture-series',   title:'AI/ML Lecture Series',             desc:'Curated lectures on Machine Learning from foundational concepts to cutting-edge research.', img:'/images/initiatives/lectures.webp',     tags:['education'],                     color:'var(--c1)' },
  { slug:'childrens-day',       title:"Children's Day 2021 Special Event",desc:"Inspiring the next generation about AI/ML on Children's Day.", img:'/images/initiatives/sishu_divas_2021.webp',       tags:['event','education'],             color:'var(--c4)' },
  { slug:'openodia',            title:'OpenOdia PyPi Package',             desc:'Open Source Odia Python Package — transliteration, tokenization, dictionaries, and more.', img:'/images/initiatives/openodia.webp',   tags:['python','tools','odia'],         color:'var(--c2)' },
  { slug:'twitter-spaces',      title:'Twitter Spaces Series in AI/ML',   desc:'Live audio discussions on latest trends and research in Artificial Intelligence and ML.', img:'/images/initiatives/podcasts.webp',      tags:['discussion','twitter'],          color:'var(--c3)' },
];

const ALL_TAGS = ['All','rfs','education','genai','hackathon','odia','python','tools','discussion','event','twitter'];

const TAG_COLORS = {
  education:'var(--c1)', genai:'var(--c2)', hackathon:'var(--c3)',
  odia:'var(--c2)', python:'var(--c4)', tools:'var(--c4)',
  discussion:'var(--c3)', event:'var(--c1)', twitter:'var(--c3)',
  rfs:'var(--c2)',
};

export default function Initiatives() {
  const { t } = useLanguage();
  const [active, setActive] = useState('All');
  usePageMeta({
    title: 'Initiatives',
    path: '/initiatives',
    description: 'Hackathons, education series, research, and open-source tools from Odisha AI — Rathathon, AI Foundation Series, OdiaGenAI, OpenOdia, and more.',
  });
  const filtered = active === 'All' ? ALL_INITIATIVES : ALL_INITIATIVES.filter(i => i.tags.includes(active));

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom:'1px solid var(--border)', paddingTop:'5rem', paddingBottom:'4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger">
            <div className="section-label">{t('initiatives.label')}</div>
            <h1 style={{ marginBottom:'1rem' }}>{t('initiatives.title')}</h1>
            <p style={{ fontSize:'1.1rem', maxWidth:560 }}>
              {t('initiatives.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'4rem' }}>
        {/* Filter tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'2.5rem' }}>
          {ALL_TAGS.map(t_tag => (
            <button key={t_tag} onClick={() => setActive(t_tag)} style={{
              padding:'0.35rem 0.9rem', borderRadius:'999px', border:'1px solid',
              fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:'0.78rem',
              cursor:'pointer', letterSpacing:'0.04em', textTransform: t_tag === 'All' ? 'none' : 'uppercase',
              transition:'all 0.25s ease',
              background: active === t_tag ? 'var(--grad)' : 'transparent',
              color: active === t_tag ? '#000' : 'var(--text3)',
              borderColor: active === t_tag ? 'transparent' : 'var(--border)',
            }}>
              {t_tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid-3 stagger">
          {filtered.map((init, i) => (
            <Link key={i} to={`/initiatives/${init.slug}`}
              className="card card-glow"
              style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column', overflow:'hidden' }}
            >
              <div style={{ overflow:'hidden', position:'relative', flexShrink:0 }}>
                <img src={init.img} alt={init.title} className="img-card-cover" style={{ height:195 }} loading="lazy" decoding="async"
                  onError={e=>{ e.currentTarget.style.display='none'; }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }} />
                {/* color dot */}
                <div style={{ position:'absolute', top:'1rem', right:'1rem', width:8, height:8, borderRadius:'50%', background:init.color, boxShadow:`0 0 12px ${init.color}` }} />
              </div>
              <div style={{ padding:'1.5rem', flex:1, display:'flex', flexDirection:'column', gap:'0.7rem' }}>
                <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
                  {init.tags.map(tag => (
                    <span key={tag} style={{
                      display:'inline-block', padding:'0.18rem 0.55rem', borderRadius:'999px',
                      fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
                      border:`1px solid ${(TAG_COLORS[tag]||'var(--c1)')}33`,
                      background:`${(TAG_COLORS[tag]||'var(--c1)')}0f`,
                      color: TAG_COLORS[tag]||'var(--c1)',
                    }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ margin:0, fontSize:'1.05rem', lineHeight:1.3 }}>{init.title}</h3>
                <p style={{ fontSize:'0.85rem', lineHeight:1.7, flex:1 }}>{init.desc}</p>
                <span style={{ color:init.color, fontSize:'0.8rem', fontWeight:600, display:'flex', alignItems:'center', gap:'0.3rem', marginTop:'auto' }}>
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
