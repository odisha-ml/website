import React from 'react';
import { ExternalLink, FileText, Globe, BookOpen, Code } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const SECTIONS = [
  {
    label: 'Language AI',
    title: 'Odia Language AI Resources',
    icon: <Code size={20} style={{ color:'var(--c1)' }}/>,
    color: 'var(--c1)',
    items: [
      {
        title: 'Awesome Odia AI',
        desc: 'A curated list of awesome resources — text, audio, images, datasets, language models, and more for Odia language AI.',
        url: 'https://github.com/odisha-ml/Awesome-Odia-AI/',
        icon: '⭐',
      },
    ],
  },
  {
    label: 'Government',
    title: 'Odisha Govt Vision',
    icon: <Globe size={20} style={{ color:'var(--c2)' }}/>,
    color: 'var(--c2)',
    items: [
      { title: 'Odisha Vision Document', desc: 'The comprehensive Odisha state vision document outlining the roadmap for development.', url: 'https://files.odishaai.org/odisha_vision_document.pdf', icon: '📄' },
      { title: 'Odisha AI Policy 2025', desc: 'Resolution on the Odisha AI Policy 2025 — the state\'s official AI policy framework and priorities.', url: 'https://files.odishaai.org/resolution_on_odisha_ai_policy_2025.pdf', icon: '🏛️' },
    ],
  },
  {
    label: 'Knowledge',
    title: 'Miscellaneous',
    icon: <BookOpen size={20} style={{ color:'var(--c4)' }}/>,
    color: 'var(--c4)',
    items: [
      { title: 'AI Glossary', desc: 'A comprehensive glossary of terms used in the field of Artificial Intelligence — from A to Z.', url: 'https://glossary.odishaai.org/', icon: '📚' },
    ],
  },
];

function ResourceCard({ item, color }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
      className="card"
      style={{
        textDecoration:'none', color:'inherit', display:'flex', gap:'1.25rem', padding:'1.5rem',
        alignItems:'flex-start', transition:'all var(--t)',
      }}
      onMouseOver={e=>{ e.currentTarget.style.borderColor=`${color}33`; e.currentTarget.style.transform='translateY(-3px)'; }}
      onMouseOut={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=''; }}
    >
      <div style={{ fontSize:'1.8rem', flexShrink:0, lineHeight:1 }}>{item.icon}</div>
      <div style={{ flex:1 }}>
        <h3 style={{ fontSize:'1rem', marginBottom:'0.4rem' }}>{item.title}</h3>
        <p style={{ fontSize:'0.85rem', lineHeight:1.7, marginBottom:'0.75rem' }}>{item.desc}</p>
        <span style={{ color, fontSize:'0.8rem', fontWeight:600, display:'flex', alignItems:'center', gap:'0.3rem' }}>
          Access Resource <ExternalLink size={12}/>
        </span>
      </div>
    </a>
  );
}


export default function Resources() {
  const { t } = useLanguage();
  usePageMeta({
    title: 'Resources',
    path: '/resources',
    description: 'Curated Odia language AI resources, datasets, tools, the AI Glossary, and policy documents from the Odisha AI community.',
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom:'1px solid var(--border)', paddingTop:'5rem', paddingBottom:'4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', bottom:-80, left:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(48,209,88,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger">
            <div className="section-label">{t('resources.label')}</div>
            <h1 style={{ marginBottom:'1rem' }}>{t('resources.title')}</h1>
            <p style={{ fontSize:'1.1rem', maxWidth:540 }}>
              {t('resources.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'4rem' }}>
        {SECTIONS.map((sec, si) => (
          <div key={si} style={{ marginBottom:'3.5rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:36, height:36, borderRadius:'var(--r2)', background:`${sec.color}10`, border:`1px solid ${sec.color}22` }}>
                {sec.icon}
              </div>
              <div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', color:sec.color, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.1rem' }}>
                  {sec.label}
                </div>
                <h2 style={{ fontSize:'1.3rem', margin:0 }}>{sec.title}</h2>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {sec.items.map((item, ii) => (
                <ResourceCard key={ii} item={item} color={sec.color} />
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter/Contribute prompt */}
        <div className="card" style={{ padding:'2.5rem', background:'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(191,90,242,0.04))', borderColor:'rgba(0,212,255,0.1)', textAlign:'center' }}>
          <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>🤝</div>
          <h3 style={{ marginBottom:'0.75rem' }}>Want to contribute a resource?</h3>
          <p style={{ maxWidth:480, margin:'0 auto 1.5rem', fontSize:'0.9rem' }}>
            If you have AI resources relevant to the Odia community, we'd love to include them here.
          </p>
          <a href="https://github.com/odisha-ml/website" target="_blank" rel="noopener noreferrer" className="btn btn-glow">
            Contribute on GitHub <ExternalLink size={14}/>
          </a>
        </div>
      </div>
    </div>
  );
}
