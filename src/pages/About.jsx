import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import JourneyTimeline from '../components/JourneyTimeline';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const TASK_FORCE = [
  { name: 'Abhijeet Parida', url: 'https://www.linkedin.com/in/a-parida/' },
  { name: 'Swaroop Mishra', url: 'https://www.linkedin.com/in/swarooprm7/' },
];

const ADVISORS = [
  { name: 'Dr. Damodar Sahu', url: 'https://www.linkedin.com/in/damodarsahu/' },
  { name: 'Neelima Mishra', url: 'https://www.linkedin.com/in/neelimamisra/' },
  { name: 'Dr. Subhadarshi Panda', url: 'https://www.linkedin.com/in/subhadarshi-panda-1ba5091a/' },
];

const CHAPTERS = [
  { name: "Kumarika Mohanty", role: "Women's Chapter", url: 'https://www.linkedin.com/in/kumarika-mohanty-09582815' },
  { name: "Soumendra Kumar Sahoo", role: "Bengaluru, India", url: 'https://www.linkedin.com/in/soumendrak/' },
  { name: "Manmath Sahoo", role: "Singapore", url: null },
  { name: "Dr. Sukanta Kumar Jena", role: "UK", url: 'https://www.linkedin.com/in/drsukantakumarjena/' },
  { name: "Col. Aditya Parida & Neelima Mishra", role: "Sweden", url: 'https://www.linkedin.com/in/ap1950/' },
  { name: "Dr. Sofen Kumar Jena", role: "France", url: 'https://www.linkedin.com/in/sofen/' },
  { name: "Dr. Shantipriya Parida", role: "Finland", url: 'https://www.linkedin.com/in/shantipriya-parida-9781a9127/' },
  { name: "Saswat Mohanty", role: "Germany", url: 'https://www.linkedin.com/in/ersaswatmohanty/' },
  { name: "Saroj Mahanta", role: "South Africa", url: 'https://www.linkedin.com/in/saroj-mahanta-83a37813/' },
  { name: "Dr. Sitansu Sekhar Nanda", role: "South Korea", url: 'https://www.linkedin.com/in/dr-sitansu-sekhar-nanda-73b62212/' },
  { name: "Manas Ranjan Kar", role: "Canada", url: 'https://www.linkedin.com/in/manas-kar/' },
  { name: "Debendra Mahanta", role: "Japan", url: 'https://www.linkedin.com/in/debendra-mohanta-7445423/' },
  { name: "Shayani Parida", role: "CT, USA", url: 'https://www.linkedin.com/in/shayani-parida/' },
  { name: "Sudhir Sahu", role: "CA, USA", url: 'https://www.linkedin.com/in/susahu/' },
  { name: "Madhusmita Nayak", role: "UAE", url: 'https://www.linkedin.com/in/madhusmita-nayak-75a0a215/' },
  { name: "A K Mohanty", role: "BBSR, India", url: 'https://www.linkedin.com/in/akmohantytatwa/' },
];

const ACTIVITIES = [
  { emoji: '🏆', text: 'Celebrating the achievements of Odias in AI/ML' },
  { emoji: '📚', text: 'Enhancing skills through structured learning programs' },
  { emoji: '💼', text: 'Creating entrepreneurial and career opportunities' },
  { emoji: '🏛️', text: 'Catalyzing AI/ML adoption by engaging with policymakers' },
  { emoji: '🗄️', text: 'Building a knowledge repository in AI/ML' },
  { emoji: '🤝', text: 'Connecting with global technology leaders' },
];

function Section({ label, title, children }) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <div className="section-label">{label}</div>
      <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
      {children}
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  usePageMeta({
    title: 'About',
    path: '/about',
    description: 'Our mission, story, and the global task force, advisors, and chapter leads behind Odisha AI — a not-for-profit community uniting Odias in Artificial Intelligence.',
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom: '1px solid var(--border)', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position:'absolute', top:-80, right:-80, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger">
            <div className="section-label">{t('about.label')}</div>
            <h1 style={{ marginBottom:'1.25rem' }}>
              {t('about.heroTitle')}
            </h1>
            <p style={{ fontSize:'1.15rem', maxWidth:660, lineHeight:1.85 }}>
              {t('about.desc')}
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'4rem', paddingBottom:'4rem' }}>

        {/* Vision & Mission */}
        <div className="grid-2" style={{ marginBottom:'5rem', gap:'1.5rem' }}>
          <div className="card card-glow" style={{ padding:'2.5rem' }}>
            <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>🔭</div>
            <h3 style={{ fontSize:'1.3rem', marginBottom:'1rem' }}>{t('about.vision')}</h3>
            <p style={{ lineHeight:1.8 }}>
              {t('about.visionDesc')}
            </p>
          </div>
          <div className="card card-glow-purple" style={{ padding:'2.5rem' }}>
            <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>🎯</div>
            <h3 style={{ fontSize:'1.3rem', marginBottom:'1rem' }}>{t('about.mission')}</h3>
            <p style={{ lineHeight:1.8 }}>
              {t('about.missionDesc')}
            </p>
          </div>
        </div>

        {/* Timeline image */}
        <div style={{ marginBottom:'5rem', textAlign:'center' }}>
          <div className="section-label" style={{ textAlign:'center', display:'flex', justifyContent:'center' }}>{t('about.journeyLabel')}</div>
          <h2 style={{ textAlign:'center', marginBottom:'2rem' }}>{t('about.journeyTitle')}</h2>
          <JourneyTimeline />
        </div>

        {/* Activities */}
        <Section label={t('about.helpLabel')} title={t('about.helpTitle')}>
          <div className="grid-3">
            {t('about.activities').map((text,i) => (
              <div key={i} className="card" style={{ padding:'1.75rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.6rem', flexShrink:0 }}>{ACTIVITIES[i]?.emoji || '✦'}</span>
                <p style={{ margin:0, lineHeight:1.7, fontSize:'0.9rem' }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop:'1.5rem', color:'var(--text3)', fontSize:'0.9rem' }}>
            {t('about.detailedAct').split('initiatives').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <Link to="/initiatives" style={{ color:'var(--c1)' }}>{t('nav.initiatives')}</Link>}
              </React.Fragment>
            ))}
          </p>
        </Section>

        {/* Challenges */}
        <div className="card" style={{ padding:'2.5rem', marginBottom:'5rem', background:'linear-gradient(135deg, rgba(0,212,255,0.03), rgba(191,90,242,0.03))', borderColor:'rgba(0,212,255,0.1)' }}>
          <div className="section-label">{t('about.milestonesLabel')}</div>
          <h3 style={{ fontSize:'1.3rem', marginBottom:'1.25rem' }}>{t('about.milestonesTitle')}</h3>
          <ul style={{ paddingLeft:'1.5rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            <li style={{ color:'var(--text2)', lineHeight:1.7 }}>
              {t('about.milestone1')}
            </li>
            <li style={{ color:'var(--text2)', lineHeight:1.7 }}>
              {t('about.milestone2')}
            </li>
          </ul>
        </div>

        {/* Task Force */}
        <Section label={t('about.teamLabel')} title={t('about.teamTitle')}>
          <p style={{ marginBottom:'1.5rem', color:'var(--text3)', fontStyle:'italic', fontSize:'0.85rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('about.alpha')}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
            {TASK_FORCE.map((m,i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className="member-chip">
                {m.name} <ExternalLink size={11}/>
              </a>
            ))}
          </div>
        </Section>

        {/* Advisors */}
        <Section label={t('about.advisorsLabel')} title={t('about.advisorsTitle')}>
          <p style={{ marginBottom:'1.5rem', color:'var(--text3)', fontStyle:'italic', fontSize:'0.85rem', fontFamily:"'JetBrains Mono',monospace" }}>{t('about.alpha')}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
            {ADVISORS.map((m,i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className="member-chip">
                {m.name} <ExternalLink size={11}/>
              </a>
            ))}
          </div>
        </Section>

        {/* Chapter Leaders */}
        <Section label={t('about.chaptersLabel')} title={<><MapPin size={22} style={{ verticalAlign:'middle', marginRight:'0.4rem', color:'var(--c2)' }}/>{t('about.chaptersTitle')}</>}>
          <div className="grid-2">
            {CHAPTERS.map((c,i) => (
              <div key={i} className="card" style={{ padding:'1.25rem 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem' }}>
                {c.url
                  ? <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight:600, color:'var(--text)', fontSize:'0.9rem' }}>{c.name}</a>
                  : <span style={{ fontWeight:600, fontSize:'0.9rem' }}>{c.name}</span>
                }
                <span className="tag tag-purple" style={{ flexShrink:0, fontSize:'0.68rem' }}>{c.role}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}
