import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';
import Sponsorship from '../components/Sponsorship';

/* ─── All initiative data ─── */
const INITIATIVES = {
  'rfs-s2s': {
    title: '🎤 RFS: Speech-to-Speech',
    tagline: 'New Request for Software — exclusively open to Odisha AI Fundamentals S2S and Odisha AI Community.',
    date: 'Open — 2026',
    img: '/images/initiatives/rfs-s2s.png',
    tags: ['rfs', 'hackathon', 'odia'],
    accentColor: 'var(--c2)',
    sections: [
      {
        heading: 'About the RFS',
        emoji: '🎤',
        content: `A new Request for Software (RFS) is now open, exclusive to the S2S vehicle of the AI Fundamentals Series and the Odisha AI Community.

RFS stands for Request for Software — it is a formal call to builders within the Odisha AI ecosystem to create a specific software solution. This RFS is accessible only to participants of the AI Fundamentals Series (S2S track) and members of the Odisha AI community.`,
      },
      {
        heading: 'The Challenge',
        emoji: '🧑‍💻',
        content: `Build a speech translation system that takes Odia Speech as an input language and converts it into English, Mandarin, and Hindi.

The system should be capable of real-time or near-real-time translation, preserving tone and meaning across all three output languages. Teams are encouraged to leverage open-source models, fine-tuned Odia speech datasets, and any AI frameworks of their choice.`,
      },
      {
        heading: 'Demo Day — June 14th 2026',
        emoji: '🏆',
        content: `All teams must submit a working demonstration by Demo Day on June 14th 2026.

• Top 10 teams will each receive a $100 award — total prize pool of $1,000.
• The Top 1 team will receive investor interest with an investment of $1,000 into their product.
• Enquiries of Sponsorship are Welcome — reach out to info@odishaai.org to discuss sponsorship opportunities.`,
      },
      {
        heading: 'Who Can Participate',
        emoji: '🌐',
        content: `This RFS is exclusive to:
• Participants currently enrolled in the Odisha AI Fundamentals Series (S2S vehicle)
• Members of the Odisha AI Community

If you are not yet a member, join the community and the AI Foundation Series to become eligible.`,
      },
    ],
    links: [
      { label: 'Join the Community', url: 'https://odishaai.org' },
    ],
  },
  'rathathon': {
    title: 'Rathathon',
    tagline: 'A perpetual hackathon focused on AI and its applications.',
    date: '27 June 2025',
    img: '/images/initiatives/rathathon.webp',
    tags: ['event', 'education', 'hackathon'],
    accentColor: 'var(--c3)',
    sponsor: {
      name: 'Deep Surge AI',
      logo: '/images/deepsurge_logo.png',
      url: 'https://deepsurge.ai/',
      desc: 'This perpetual hackathon is made possible by the generous support and sponsorship of Deep Surge AI.'
    },
    sections: [
      {
        heading: 'About the Initiative',
        emoji: '🚀',
        content: `Rathathon is a perpetual hackathon focused on AI and its applications. It is designed to provide a continuous platform for developers, data scientists, and AI enthusiasts to collaborate, innovate, and build AI solutions that can address real-world challenges. A coding platform remains open to Odisha AI participants all the time 24/7.

Perpetual Hackathon is a special technology vehicle created by the students of the Odisha AI Foundation Series, to streamline their vehicles of choice to collaborate and work together. Designed as a continuum to encourage builders to build their desired products in inspired ways — no barrier to entry, no barrier to exit, socially intelligent, building value for builders, Odisha, India, and the Globe.`,
      },
      {
        heading: 'How to Apply / Join',
        emoji: '📝',
        content: `The platform is open in a no-barrier-to-entry manner to every willing coder and wannabe builder in AI. The floor anchors are responsible for communications and are reachable at rathathon@odishaai.org.

In the unlikely case of no response within 48 hours, info@odishaai.org may be used for resolution of the open request.`,
      },
      {
        heading: 'Benefits',
        emoji: '🎯',
        content: `Participants get an opportunity to build AI products, services, and platforms of their own, in a friendly, Odia-speaking, no-judgment, socially intelligent community that believes in the "build to finish" motto — oftentimes solving the problems they are facing or the opportunity they are creating.`,
      },
      {
        heading: 'Partners',
        emoji: '🤝',
        content: `Deep Surge AI has sponsored this initiative for Odisha AI.`,
      },
    ],
    links: [{ label: 'Official Website', url: 'https://perpetualhackathon.com/' }],
  },
  'ai-foundation-series': {
    title: 'AI Foundation Series',
    tagline: 'AI Foundation Series runs in a continuum, each series consisting of 20 sessions covering different aspects of AI fundamentals.',
    date: '15 February 2025',
    img: '/images/initiatives/ai-foundation-series.webp',
    tags: ['event', 'education'],
    accentColor: 'var(--c1)',
    sponsor: {
      name: 'Deep Surge AI',
      logo: '/images/deepsurge_logo.png',
      url: 'https://deepsurge.ai/',
      desc: 'This continuous educational program is made possible by the generous support and sponsorship of Deep Surge AI.'
    },
    sections: [
      {
        heading: 'About the Initiative',
        emoji: '📚',
        content: `To build AI skills in the Odia community in a no-barrier-to-entry fashion, the AI Foundation Series was started. It runs in a continuum, with each series consisting of 20 sessions each covering different aspects of AI fundamentals — from linear algebra and statistics to neural networks and transformers.`,
      },
      {
        heading: 'How to Apply / Join',
        emoji: '📝',
        content: `Every series beginning is advertised in the Odisha AI community, on social media, and in other channels. Interested participants can register for the series through the provided links when a new series is announced.`,
      },
      {
        heading: 'Benefits',
        emoji: '🎓',
        content: `At the end of each series, completing participants are given a completion certificate and given the choice to be on board in a designated vehicle to specialize and hone their learnt skills towards industry usage.`,
      },
      {
        heading: 'Partners',
        emoji: '🤝',
        content: `Deep Surge AI has sponsored this AI fundamentals series for Odisha AI.`,
      },
    ],
    links: [],
  },
  'odiagenai': {
    title: 'Odia Generative AI',
    tagline: 'A collaborative initiative to conduct research on GenAI and LLMs for Indic Languages.',
    date: '22 March 2023',
    img: '/images/initiatives/odiagenai.webp',
    tags: ['odia', 'genai'],
    accentColor: 'var(--c2)',
    sections: [
      {
        heading: 'About the Project',
        emoji: '🧠',
        content: `Post the revolution of Generative AI by ChatGPT, community members led by Dr. Shantipriya Parida started a project to create a community around Generative AI in Odia.

The project is called Odia Generative AI (OdiaGenAI) and is a community of AI enthusiasts, researchers, and developers who are passionate about exploring the potential of Generative AI in the Odia language.`,
      },
      {
        heading: 'Mission',
        emoji: '🎯',
        content: `OdiaGenAI aims to utilize the power of AI in building Generative AI and LLM-based technologies and solutions for the overall development of Odisha and the Odia language through collaboration among Odia technologists.`,
      },
    ],
    links: [
      { label: 'Main Website', url: 'https://www.odiagenai.org/' },
      { label: 'OdiaGenAI Llama2 Fine-tuned Model', url: 'https://www.odiagenai.org/blog/odiagenai-released-llama2-fine-tuned-model-for-odia' },
      { label: 'First LLM for Odia Language', url: 'https://www.odiagenai.org/blog/odiagenai-released-the-first-llm-for-the-low-resource-odia-language' },
      { label: 'Models & Datasets on HuggingFace', url: 'https://huggingface.co/OdiaGenAI' },
    ],
    highlight: { name: 'Dr. Shantipriya Parida', url: 'https://www.linkedin.com/in/shantipriya-parida-9781a9127/', role: 'Project Lead' },
  },
  'fdp': {
    title: 'AI/ML Faculty Development Program',
    tagline: 'A joint collaboration of OdiaML and VSSUT bringing international experts to enrich faculty members with AI/ML skills.',
    date: '29 October 2022',
    img: '/images/initiatives/fdp.webp',
    tags: ['event', 'education'],
    accentColor: 'var(--c1)',
    sponsor: {
      name: 'Deep Surge AI',
      logo: '/images/deepsurge_logo.png',
      url: 'https://deepsurge.ai/',
      desc: 'This faculty development program was made possible by the generous support and sponsorship of Deep Surge AI.'
    },
    sections: [
      {
        heading: 'About the Program',
        emoji: '🎓',
        content: `On the 29th of October 2022, the Odisha AI community organized a faculty development program to teach the faculties of Odisha about AI/ML. At AI for Global Goals, we (Odias in AI/ML) aim to provide nextGEN participants with best-in-class training on a broad range of advanced topics and developments in AI and ML — including deep learning.

The Faculty Development Program (FDP) is a joint collaboration of OdiaML and VSSUT bringing international experts from academics and industries, aiming to enrich faculty members of any streams with AI/ML skills. This FDP focused on the hands-on implementation of various subjects in terms of mini-projects exercised by the participants and the assigned mentors.`,
      },
    ],
    links: [
      { label: 'Main Website', url: 'https://sites.google.com/view/vssut-oiml-fdp/home' },
      { label: 'FDP Website', url: 'https://odisha-ml.github.io/FDP/' },
      { label: 'Mini Projects', url: 'https://odisha-ml.github.io/OdishaMLSchool/' },
    ],
    highlight: { name: 'Dr. Shantipriya Parida', url: 'https://www.linkedin.com/in/shantipriya-parida-9781a9127/', role: 'Program Lead' },
  },
  'summer-school': {
    title: 'AI/ML Summer School',
    tagline: 'AI/ML Summer School to teach students about AI/ML.',
    date: '2022',
    img: '/images/initiatives/summer_school.webp',
    tags: ['education'],
    accentColor: 'var(--c4)',
    sections: [
      {
        heading: 'About the Program',
        emoji: '☀️',
        content: `The AI/ML Summer School is a structured educational program designed for students to learn AI/ML in a practical, hands-on manner. The school brings together students from Odisha and other regions to learn from industry experts and researchers, covering topics from machine learning fundamentals to advanced deep learning and real-world applications.`,
      },
    ],
    links: [],
  },
  'ml-lecture-series': {
    title: 'AI/ML Lecture Series',
    tagline: 'Machine Learning Lecture Series is a series of lectures on Machine Learning.',
    date: '2021',
    img: '/images/initiatives/lectures.webp',
    tags: ['education'],
    accentColor: 'var(--c1)',
    sections: [
      {
        heading: 'About the Series',
        emoji: '🎤',
        content: `The AI/ML Lecture Series is a curated series of lectures on Machine Learning, featuring talks from global experts in academia and industry. The series covers a wide range of topics from foundational ML concepts to cutting-edge research, making advanced AI knowledge accessible to the Odia community.`,
      },
    ],
    links: [],
  },
  'childrens-day': {
    title: "Children's Day 2021 Special Event",
    tagline: "A special event to educate children about AI/ML.",
    date: '2021',
    img: '/images/initiatives/sishu_divas_2021.webp',
    tags: ['event', 'education'],
    accentColor: 'var(--c4)',
    sections: [
      {
        heading: 'About the Event',
        emoji: '🧒',
        content: `The Children's Day 2021 Special Event was organized by the Odisha AI community to educate and inspire children about AI/ML. The event aimed to spark curiosity in young minds about technology and artificial intelligence, presenting concepts in a fun, engaging, and age-appropriate way to encourage the next generation of AI innovators.`,
      },
    ],
    links: [],
  },
  'openodia': {
    title: 'OpenOdia PyPi Package',
    tagline: 'Open Source Odia Python Package with powerful tools for Odia language processing.',
    date: '19 September 2021',
    img: '/images/initiatives/openodia.webp',
    tags: ['tools', 'python', 'odia'],
    accentColor: 'var(--c2)',
    sections: [
      {
        heading: 'About the Project',
        emoji: '🐍',
        content: `OpenOdia is an open source Python programming language package built for Odia language. Developed by Soumendra Kumar Sahoo and Abhijeet Parida, it provides a comprehensive toolkit for working with Odia text programmatically.`,
      },
    ],
    features: ['Odia Alphabets', 'Generate random Odia names', 'Detect Odia Language', 'Word Tokenizer', 'Remove stopwords', 'Google Translate', 'Automatic extractive text summarization', 'Offline Dictionary'],
    links: [
      { label: 'Main Website', url: 'https://openodia.soumendrak.com/' },
      { label: 'GitHub Repository', url: 'https://github.com/soumendrak/openodia' },
    ],
  },
  'twitter-spaces': {
    title: 'Twitter Spaces Series in AI/ML',
    tagline: 'A series of live audio discussions on the latest trends and research in AI/ML.',
    date: '2021',
    img: '/images/initiatives/podcasts.webp',
    tags: ['discussion', 'twitter'],
    accentColor: 'var(--c3)',
    sections: [
      {
        heading: 'About the Series',
        emoji: '🎙️',
        content: `The Twitter Spaces Series in AI/ML is a series of live audio discussions on the latest trends, research, and developments in Artificial Intelligence and Machine Learning. These sessions bring together Odia AI practitioners, researchers, and thought leaders for open, engaging conversations that are accessible to the entire community.`,
      },
    ],
    links: [],
  },
};

const TAG_COLORS = {
  education:'var(--c1)', genai:'var(--c2)', hackathon:'var(--c3)',
  odia:'var(--c2)', python:'var(--c4)', tools:'var(--c4)',
  discussion:'var(--c3)', event:'var(--c1)', twitter:'var(--c3)',
  rfs:'var(--c2)',
};

export default function InitiativeDetail() {
  const { slug } = useParams();
  const init = INITIATIVES[slug];
  const { t } = useLanguage();
  usePageMeta({
    title: init ? init.title : 'Initiative',
    path: `/initiatives/${slug}`,
    description: init?.desc,
    image: init?.img,
  });

  if (!init) return (
    <div style={{ minHeight:'60vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1.5rem' }}>
      <div style={{ fontSize:'4rem' }}>🔍</div>
      <h2>{t('common.notFound')}</h2>
      <Link to="/initiatives" className="btn btn-outline"><ArrowLeft size={15}/> {t('common.backInitiatives')}</Link>
    </div>
  );

  return (
    <div>
      {/* ── Hero ── */}
      <div className="detail-hero" style={{ position:'relative', height:420, overflow:'hidden' }}>
        <img src={init.img} alt={init.title}
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'brightness(0.18) saturate(0.6)' }}
        />
        {/* heavier gradient so title stands out */}
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)` }} />
        {/* Colored glow matching accent */}
        <div style={{ position:'absolute', top:'10%', right:'5%', width:350, height:350, borderRadius:'50%', background:`radial-gradient(circle, ${init.accentColor}18 0%, transparent 70%)`, pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'20%', left:'3%', width:250, height:250, borderRadius:'50%', background:`radial-gradient(circle, ${init.accentColor}0a 0%, transparent 70%)`, pointerEvents:'none' }} />

        <div className="container" style={{ position:'relative', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:'3rem' }}>
          <Link to="/initiatives"
            style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', color:'rgba(255,255,255,0.45)', fontSize:'0.8rem', fontWeight:500, marginBottom:'1.75rem', transition:'color var(--t)', width:'fit-content', letterSpacing:'0.02em' }}
            onMouseOver={e=>e.currentTarget.style.color='#fff'}
            onMouseOut={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}
          >
            <ArrowLeft size={14}/> {t('common.backInitiatives')}
          </Link>
          <div style={{ display:'flex', gap:'0.5rem', marginBottom:'1.1rem', flexWrap:'wrap' }}>
            {init.tags.map(tag => (
              <span key={tag} style={{
                display:'inline-flex', alignItems:'center', padding:'0.25rem 0.7rem', borderRadius:'999px',
                fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
                border:`1px solid ${(TAG_COLORS[tag]||'var(--c1)')}55`,
                background:`${(TAG_COLORS[tag]||'var(--c1)')}15`,
                color: TAG_COLORS[tag]||'var(--c1)',
              }}>{tag}</span>
            ))}
          </div>
          {/* ── TITLE — high contrast ── */}
          <h1 style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:'clamp(2rem,5vw,3.6rem)',
            fontWeight:800,
            color:'#ffffff',
            letterSpacing:'-0.025em',
            lineHeight:1.1,
            marginBottom:'0.75rem',
            textShadow:'0 2px 40px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.9)',
          }}>{init.title}</h1>
          {/* tagline */}
          <p style={{ color:'rgba(255,255,255,0.6)', maxWidth:580, fontSize:'0.95rem', lineHeight:1.6, margin:'0 0 1rem' }}>{init.tagline}</p>
          {/* accent underline bar */}
          <div style={{ width:64, height:3, borderRadius:2, background:init.accentColor, boxShadow:`0 0 12px ${init.accentColor}` }} />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'5rem' }}>
        {/* Title header in content area */}
        <div style={{ marginBottom:'2.5rem', paddingBottom:'2rem', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'1rem', flexWrap:'wrap', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:init.accentColor, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.5rem' }}>{t('initiatives.label')}</div>
            <h2 style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:800, margin:0, lineHeight:1.2 }}>{init.title}</h2>
            <p style={{ margin:'0.5rem 0 0', fontSize:'0.9rem', color:'var(--text3)', maxWidth:520 }}>{init.tagline}</p>
          </div>
          <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap', alignSelf:'center' }}>
            {init.tags.map(tag => (
              <span key={tag} style={{
                display:'inline-flex', alignItems:'center', padding:'0.25rem 0.7rem', borderRadius:'999px',
                fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase',
                border:`1px solid ${(TAG_COLORS[tag]||'var(--c1)')}33`,
                background:`${(TAG_COLORS[tag]||'var(--c1)')}0d`,
                color: TAG_COLORS[tag]||'var(--c1)',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="detail-layout" style={{ display:'grid', gridTemplateColumns:'1fr 300px', gap:'3rem', alignItems:'start' }}>

          {/* Left */}
          <div>
            {/* Lead highlight person */}
            {init.highlight && (
              <a href={init.highlight.url} target="_blank" rel="noopener noreferrer"
                className="card"
                style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'1rem 1.5rem', marginBottom:'2rem', textDecoration:'none', color:'inherit', borderLeft:`3px solid ${init.accentColor}` }}
              >
                <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--grad)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:'0.9rem', color:'#000', fontFamily:"'Syne',sans-serif", flexShrink:0 }}>
                  {init.highlight.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight:600, fontSize:'0.9rem' }}>{init.highlight.name}</div>
                  <div style={{ fontSize:'0.75rem', color:'var(--text3)' }}>{init.highlight.role}</div>
                </div>
                <ExternalLink size={14} style={{ color:'var(--text3)', marginLeft:'auto' }} />
              </a>
            )}

            {/* Content sections */}
            {init.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom:'2.5rem' }}>
                <h2 style={{ fontSize:'1.3rem', marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.6rem' }}>
                  <span>{sec.emoji}</span> {sec.heading}
                </h2>
                {sec.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ color:'var(--text2)', lineHeight:1.85, marginBottom:'0.9rem' }}>{para}</p>
                ))}
              </div>
            ))}

            {/* Sponsorship section */}
            <Sponsorship sponsor={init.sponsor} sectionName={init.title} accentColor={init.accentColor} />
          </div>

          {/* Right sidebar */}
          <div className="detail-sidebar" style={{ display:'flex', flexDirection:'column', gap:'0.75rem', position:'sticky', top:'84px' }}>
            <div style={{ padding:'1.25rem', background:'var(--bg3)', borderRadius:'var(--r2)', border:'1px solid var(--border)' }}>
              <div style={{ fontSize:'0.65rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.4rem' }}>{t('common.started')}</div>
              <div style={{ fontWeight:600 }}>{init.date}</div>
            </div>
            <div style={{ padding:'1.25rem', background:'var(--bg3)', borderRadius:'var(--r2)', border:`1px solid ${init.accentColor}33` }}>
              <div style={{ fontSize:'0.65rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.4rem' }}>{t('common.category')}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', marginTop:'0.25rem' }}>
                {init.tags.map(tag => (
                  <span key={tag} style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:TAG_COLORS[tag]||'var(--c1)' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* External links */}
            {init.links?.length > 0 && (
              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', marginTop:'0.25rem' }}>
                <div style={{ fontSize:'0.65rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.1rem' }}>{t('common.links')}</div>
                {init.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent:'space-between', fontSize:'0.8rem', padding:'0.6rem 1rem' }}
                  >
                    {l.label} <ExternalLink size={12}/>
                  </a>
                ))}
              </div>
            )}

            <div style={{ height:1, background:'var(--border)', margin:'0.25rem 0' }} />
            <Link to="/initiatives" className="btn btn-ghost" style={{ justifyContent:'center', fontSize:'0.85rem' }}>
              <ArrowLeft size={13}/> {t('common.backInitiatives')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
