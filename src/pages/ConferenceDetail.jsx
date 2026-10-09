import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, MapPin, Users, Mic, Ticket, Video, Copy, Check, Clock, X } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';
import Sponsorship from '../components/Sponsorship';

const SCHEDULE_2026 = [
  { day: 'Friday, 9 October', items: [
    ['9:00 PM', 'Prayers at the Sree Jagannatha Temple'],
    ['9:13 PM', 'Program Begins — First Ray on Earth'],
    ['9:15 PM', 'Mun Sei Kalinga'],
    ['9:18 PM', 'Making Odisha AI the Intellectual AI Capital of the World'],
    ['9:30 PM', 'Keynote 1: End to End AI — Sovereign AI'],
    ['10:30 PM', 'End to End AI — Big Business'],
    ['11:30 PM', 'End to End AI — Small Business'],
  ]},
  { day: 'Saturday, 10 October', items: [
    ['12:30 AM', 'End to End AI — Startups'],
    ['1:30 AM', 'End to End AI — Science'],
    ['2:30 AM', 'International — End to End AI: Frontier Tech'],
    ['3:30 AM', 'International — End to End AI: Usage Tech'],
    ['4:30 AM', 'International — End to End AI: Society'],
    ['5:30 AM', 'Puri: Mangala Alati'],
    ['6:30 AM', 'Keynote 2'],
    ['6:31 AM', 'From the Gateway of India: Making Odisha AI the Intellectual AI Capital of the World'],
    ['7:30 AM', 'International — Europe: Sofia & Germany Panel'],
    ['8:30 AM', 'International Panel — AI for Children'],
    ['8:55 AM', 'Odisha Districts — Angul: Making Odisha the Intellectual AI Capital of the World'],
    ['9:00 AM', 'Odisha Districts — Angul'],
    ['9:30 AM', 'End to End AI — Frontier Tech Research'],
    ['10:00 AM', 'End to End AI — Use Case to Unicorn Case'],
    ['10:05 AM', 'Vision: Odisha as AI Capital — Digital Infrastructure Along Corridors to Support AI Growth'],
    ['10:40 AM', 'AI for a Climate-Resilient Odisha: From Local Knowledge to Global Implements'],
    ['11:25 AM', 'End to End AI — Stories: Feeds from Fields'],
    ['11:35 AM', 'AI: Upskilling and Upscaling'],
    ['11:50 AM', 'Intelligence Management at Scale, Leveraging AI'],
    ['12:05 PM', 'Transformations in Civil Engineering'],
    ['12:05 PM', 'Panel: Emerging Superhighways in AI Times'],
    ['12:25 PM', 'Energy Intelligence'],
    ['12:35 PM', 'AI: Manufacturing in Chemical Industries'],
    ['12:35 PM', 'Transition: Feeds from Fields'],
    ['1:00 PM', 'National — Transforming the Talent Pool'],
    ['1:10 PM', 'Odisha — Engineering: VSSUT'],
    ['1:20 PM', 'Specialization: End to End AI — Math'],
    ['3:30 PM', 'National — Feeds from Fields'],
    ['3:33 PM', 'International — Netherlands: AI Expressway, Angul to Amsterdam'],
    ['4:00 PM', 'International — Netherlands: The Superhighway Design Details'],
    ['4:30 PM', 'National Session'],
    ['4:45 PM', 'Odisha Districts — Balangir: Making Odisha the Intellectual AI Capital of the World'],
    ['5:00 PM', 'Jajpur: AI Vision for Odisha from the Jajpur Soccer Field'],
    ['5:05 PM', 'Jajpur Representatives'],
    ['5:30 PM', 'Odisha Districts — Representatives'],
    ['5:31 PM', 'From Marine Drive, Mumbai: Making Odisha the Intellectual AI Capital of the World'],
    ['6:30 PM', 'Odisha Hackathon Feeds'],
    ['7:30 PM', 'Odisha Districts — Hackathon Feeds'],
    ['8:30 PM', 'Odisha — Ministerial Messages'],
    ['9:30 PM', 'International — Dubai Panel'],
    ['10:30 PM', 'Keynote 3: Engineering Superintelligence Superhighways from Odisha to Everywhere in the World'],
    ['11:30 PM', 'International — UK'],
  ]},
  { day: 'Sunday, 11 October', items: [
    ['12:30 AM', 'International — Hawaii & Africa'],
    ['1:30 AM', 'International — USA: Engineering AI Superhighways from Odisha to USA with Love'],
    ['2:30 AM', 'International — Sweden: Making Odisha the Intellectual AI Capital of the World'],
    ['3:30 AM', 'International — Dubai Panel'],
    ['4:30 AM', 'International — Singapore Panel'],
    ['5:16 AM', 'Odisha — Day First Light: Building Unicorns from Odisha'],
    ['5:30 AM', 'Keynote 4: Superhighways to Superintelligence and Abundance'],
    ['5:30 AM', 'International — South America Panel'],
    ['6:30 AM', 'International — Europe 3 Panel'],
    ['7:30 AM', 'International — Australia & NZ Panel'],
    ['8:30 AM', 'National — Delhi: The Policy Paradigms from the Capital'],
    ['9:30 AM', 'National Session'],
    ['10:30 AM', 'General Body Meeting — Impact and Scoping the Future of Odisha AI'],
    ['10:44 AM', 'Conclusion — Vote of Thanks · Last Ray on Earth'],
  ]},
];

/* ─── All conference data ─── */
export const CONFERENCES = {
  '2026': {
    title: '2026 Odisha AI Conference',
    eyebrow: 'Vision to Impact',
    tagline: 'Making Odisha the Intellectual AI Capital of the World',
    heroCta: { label: 'Explore the Conference', target: 'conference-details' },
    register: '/conferences/2026/register',
    meetUrl: 'https://meet.google.com/xwb-tjjh-pip',
    meetStart: '9 October 2026 · 9:00 PM IST',
    schedule: SCHEDULE_2026,
    date: '10 October 2026',
    location: 'Hybrid',
    img: '/images/conference-covers/2026.webp',
    poster: '/images/conference-covers/2026-poster.jpg',
    status: 'Upcoming',
    hashtag: '#OAIConf2026',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2026',
    theme: 'Vision to Impact — Making Odisha the Intellectual AI Capital of the World',
    about: `A global platform bringing together visionaries, innovators, entrepreneurs, researchers, businesses, policymakers and young minds to explore how Artificial Intelligence can transform Odisha, India and the world.`,
    sections: [
      {
        kicker: 'About the Conference',
        heading: 'From Vision to Impact',
        paragraphs: [
          'Artificial Intelligence is reshaping how the world builds, discovers, works and lives.',
          'Vision to Impact is a conference built around a larger question:',
        ],
        callout: 'How do we transform AI from an emerging technology into meaningful impact for people, businesses, science and society?',
        after: [
          'The conference brings together perspectives from Odisha, India and the international technology ecosystem to explore the complete AI landscape — from sovereign AI and frontier research to startups, enterprises, industries and society.',
          'The program connects global technology conversations with Odisha\'s own aspirations, talent and opportunities — creating a platform for ideas that can move from vision to execution and ultimately to impact.',
        ],
      },
      {
        kicker: 'The Vision',
        heading: 'Making Odisha the Intellectual AI Capital of the World',
        paragraphs: [
          'The conference looks beyond simply adopting AI.',
          'It asks how Odisha can become a place where AI ideas are imagined, researched, built, deployed and scaled.',
          'From young students and researchers to entrepreneurs, businesses and policymakers, the conference aims to create a broader ecosystem around AI.',
        ],
      },
      {
        kicker: 'From Odisha to the World',
        heading: 'A Global AI Conversation with Odisha at the Centre',
        paragraphs: ['The conference connects multiple levels of participation:'],
        flow: ['Odisha', 'India', 'Global'],
        after: [
          'The program includes dedicated sessions for Odisha districts, national perspectives and international participation, creating a platform where local ideas can connect with national and global technology ecosystems.',
        ],
      },
      {
        kicker: 'Who Should Attend?',
        heading: 'Built for the whole AI ecosystem',
        items: [
          { title: 'Students & Young Minds', desc: 'Discover opportunities in AI, research, entrepreneurship and technology.' },
          { title: 'Founders & Startups', desc: 'Explore AI applications, opportunities, partnerships and the path from use case to scalable company.' },
          { title: 'Businesses', desc: 'Understand how AI is transforming enterprises, industries and business models.' },
          { title: 'Researchers & Scientists', desc: 'Connect AI with scientific discovery and frontier research.' },
          { title: 'Technology Leaders', desc: 'Engage with conversations around sovereign AI, deep tech and the future of intelligent systems.' },
          { title: 'Policymakers & Institutions', desc: 'Explore how AI can contribute to national, state and societal transformation.' },
          { title: 'Global Technology Community', desc: 'Connect international expertise with India\'s and Odisha\'s emerging AI ecosystem.' },
        ],
      },
      {
        kicker: 'Why This Conference Matters',
        heading: 'The Future Is Not Just About AI. It\'s About What We Do With It.',
        paragraphs: ['The real opportunity lies beyond algorithms and models. It lies in:'],
        steps: [
          'Ideas becoming research.',
          'Research becoming technology.',
          'Technology becoming businesses.',
          'Businesses creating opportunities.',
          'Innovation reaching communities.',
          'And technology creating measurable impact.',
        ],
        after: ['That is the journey from Vision to Impact.'],
      },
      {
        kicker: 'Coming Soon',
        heading: 'More details will be announced',
        paragraphs: ['The programme is being finalised. The following will be published here once confirmed:'],
        items: [
          { title: 'Speaker Lineup', desc: 'Keynote, national and international speakers.' },
          { title: 'Partners', desc: 'Institutional, industry and community partners.' },
          { title: 'Registration', desc: 'How to register and attend in Bhubaneswar.' },
          { title: 'Session Details', desc: 'Detailed descriptions for each session and track.' },
        ],
      },
    ],
    closing: {
      heading: 'From Odisha to the World. From Vision to Impact.',
      paragraphs: [
        'The next chapter of AI will not be written by technology alone.',
        'It will be shaped by the people who imagine new possibilities, build new systems, create new businesses, advance scientific discovery and apply technology to real problems.',
        'Vision to Impact brings these conversations together with one ambitious aspiration:',
      ],
      highlight: 'Make Odisha the Intellectual AI Capital of the World.',
      meta: '10 October 2026 • Hybrid',
      cta: { label: 'Be Part of the Vision — Register', to: '/conferences/2026/register' },
    },
    organizers: [],
    speakers: [],
    links: [],
  },
  'summit': {
    title: 'Odisha AI Summit 2025',
    date: '21–22 December 2025',
    location: 'Bhubaneshwar, Odisha, India',
    img: '/images/summit.webp',
    status: 'Past',
    hashtag: '#OAISummit2025',
    hashtagUrl: 'https://x.com/hashtag/OAISummit2025',
    theme: 'Odisha and Odia community for success in an AI-first, AI-everywhere era',
    about: `The global journey of Odisha AI reaches a crescendo in Bhubaneshwar on 21st December 2025, enriched from the annual first-light-of-the-day-to-the-last-light conference on 11th October 2025 and regional summits on 14th November 2025.

Higher Education division of The Odisha Society of the Americas along with Odisha AI community presents Odisha AI Summit 2025, setting up Odisha and the Odia community for success in an inevitable AI-first, AI-everywhere time.

A gathering of educators, policy makers, industry practitioners, entrepreneurs, and investors meet to chart out Odisha's AI implementation path aligned with Odisha AI policy, Odisha Vision, India AI policy priorities, and global realities.`,
    organizers: [
      { name: 'Prof. Prashant Mohapatra', org: 'University of South Florida, USA' },
      { name: 'Prof. Ashutosh Dutta', org: 'Johns Hopkins University, USA' },
      { name: 'Prof. Abani Patra', org: 'TUFTS, USA' },
      { name: 'Prof. Durga Madhab Mishra', org: 'NJIT, USA' },
      { name: 'Prof. Prasant Panigrahi', org: 'SOA, Odisha, India' },
      { name: 'Dr. Sukanta Mohapatra', org: 'NIST, Odisha, India' },
      { name: 'Dr. Ajay Kumar Mohanty', org: 'Deloitte (Retired), Washington DC, USA' },
      { name: 'Mr. Anjan Kumar Panda', org: 'Odisha AI, Dublin AI, San Francisco, USA' },
    ],
    speakers: [
      { name: 'Prof. Chitta Baral', org: 'Arizona State University, Tempe, Arizona' },
      { name: 'Dr. Dhanada Mishra', org: 'RaSpect AI, Hong Kong' },
      { name: 'Pranav Khaitan', org: 'Google, Mountain View, California, USA' },
    ],
    links: [],
  },
  'regional-summit': {
    title: 'Odisha AI Regional Summit Series 2025',
    date: '14 November 2025',
    location: 'Multiple Cities, Odisha',
    img: '/images/regional-summit-series.png',
    status: 'Past',
    hashtag: null,
    theme: 'Bringing the AI summit experience to every corner of Odisha',
    about: `The Odisha AI Regional Summit Series 2025 brings the conference experience closer to communities across Odisha, making AI conversations accessible to more people in more places.

A precursor to the Odisha AI Summit 2025, the regional summit series consists of events held across multiple cities in Odisha, enabling local participation and grassroots AI engagement.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2025': {
    title: '2025 Odisha AI Conference',
    date: '11 October 2025',
    location: 'Online + Odisha, India',
    img: '/images/conference-covers/2025.webp',
    status: 'Past',
    hashtag: '#OAIConf2025',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2025',
    theme: 'Imagining Odisha as the intellectual AI capital of the globe',
    about: `Odisha AI Conference 2025 is the sixth annual international congregation of Odias in AI, academicians, policymakers, linguists, business executives, investors, entrepreneurs and those working towards positively intervening in people's lives through AI.

Conference Date: 11th October, 2025.
Time: From the first light of the day to the last.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2024': {
    title: '2024 Odisha AI Conference',
    date: '2024',
    location: 'Hybrid (Online + Odisha)',
    img: '/images/conference-covers/2024.webp',
    status: 'Past',
    hashtag: '#OAIConf2024',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2024',
    theme: 'Practical AI: From Research to Real-World Applications',
    about: `The 2024 Odisha AI Conference was the fifth edition of the annual international gathering of Odias in AI. The event brought together researchers, practitioners, policymakers, and entrepreneurs to discuss the latest trends in AI and how they can benefit Odisha and the broader Odia community.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2023': {
    title: '2023 Odisha AI Conference',
    date: '2023',
    location: 'Hybrid (Online + Odisha)',
    img: '/images/conference-covers/2023.webp',
    status: 'Past',
    hashtag: '#OAIConf2023',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2023',
    theme: 'AI for Odia Language: NLP, Machine Translation, and Beyond',
    about: `The 2023 Odisha AI Conference featured deep dives into ML research, NLP for Odia language, and innovation in AI. The conference also highlighted the growing ecosystem of Odia AI projects and startups.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2022': {
    title: '2022 Odisha AI Conference',
    date: '2022',
    location: 'Virtual',
    img: '/images/conference-covers/2022.webp',
    status: 'Past',
    hashtag: '#OAIConf2022',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2022',
    theme: 'Exploring the AI/ML Frontier',
    about: `The 2022 Odisha AI Conference explored AI/ML trends, the startup ecosystem, and opportunities for Odias worldwide. The event featured panel discussions, workshops, and networking sessions.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2021': {
    title: '2021 Odisha AI Conference',
    date: '2021',
    location: 'Virtual',
    img: '/images/conference-covers/2021.png',
    status: 'Past',
    hashtag: '#OAIConf2021',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2021',
    theme: 'Building the Odia AI Community',
    about: `The 2021 Odisha AI Conference was a community-building milestone featuring mentorship sessions, inspiring talks, and cross-industry collaboration opportunities. It helped cement the Odisha AI community as a global movement.`,
    organizers: [],
    speakers: [],
    links: [],
  },
  '2020': {
    title: '2020 Odisha AI Conference',
    date: '2020',
    location: 'Virtual',
    img: '/images/conference-covers/2020.webp',
    status: 'Past',
    hashtag: '#OAIConf2020',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2020',
    theme: 'The Beginning of a Global Movement',
    about: `The inaugural Odisha AI Conference in 2020 marked the beginning of what would become a global movement of Odias in AI. Held virtually, it brought together Odia AI practitioners and enthusiasts from around the world for the very first time under a unified banner.`,
    organizers: [],
    speakers: [],
    links: [],
  },
};

/* ─── Shared stat box ─── */
function InfoPill({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem 1.25rem', background: 'var(--bg3)', borderRadius: 'var(--r2)', border: '1px solid var(--border)' }}>
      <span style={{ color: 'var(--c1)', marginTop: '0.1rem', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: '0.65rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{label}</div>
        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{value}</div>
      </div>
    </div>
  );
}

/* ─── Prominent "join online" banner for the live meeting link ─── */
function MeetBanner({ url, start }) {
  const [copied, setCopied] = React.useState(false);
  const display = url.replace(/^https?:\/\//, '');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable — link is still visible to copy manually */ }
  };

  return (
    <div className="meet-banner">
      <div className="meet-banner-inner">
        <div className="meet-banner-icon"><Video size={26} /></div>
        <div className="meet-banner-text">
          <div className="meet-banner-kicker"><span className="live-dot" /> Join Online</div>
          <div className="meet-banner-title">Attend the conference live on Google Meet</div>
          {start && (
            <div className="meet-banner-time"><Clock size={15} /> Starts {start}</div>
          )}
          <a href={url} target="_blank" rel="noopener noreferrer" className="meet-banner-link">{display}</a>
        </div>
        <div className="meet-banner-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-glow meet-banner-join">
            <Video size={18} /> Join Google Meet <ExternalLink size={14} />
          </a>
          <button type="button" className="btn btn-outline" onClick={copy} aria-live="polite">
            {copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy link</>}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Structured content section (kicker, heading, paragraphs, callout, flow, steps, items) ─── */
const paraStyle = { lineHeight: 1.85, marginBottom: '1rem', color: 'var(--text2)' };

function ContentSection({ section }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{section.kicker}</div>
      <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>{section.heading}</h2>

      {section.paragraphs?.map((p, i) => <p key={i} style={paraStyle}>{p}</p>)}

      {section.callout && (
        <p style={{ borderLeft: '3px solid var(--c1)', paddingLeft: '1.25rem', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.6, margin: '0.5rem 0 1.5rem' }}>{section.callout}</p>
      )}

      {section.flow && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', margin: '0.5rem 0 1.5rem' }}>
          {section.flow.map((f, i) => (
            <React.Fragment key={f}>
              {i > 0 && <ArrowRight size={18} style={{ color: 'var(--c1)' }} />}
              <span className="tag tag-green" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>{f}</span>
            </React.Fragment>
          ))}
        </div>
      )}

      {section.steps && (
        <ol style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {section.steps.map((step, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontWeight: 600 }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--grad)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      )}

      {section.items && (
        <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1rem' }}>
          {section.items.map((it, i) => (
            <div key={i} className="card" style={{ padding: '1.25rem', borderLeft: '3px solid var(--c2)' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{it.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.6 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      )}

      {section.after?.map((p, i) => <p key={i} style={paraStyle}>{p}</p>)}
    </div>
  );
}

function ScheduleModal({ schedule, title, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div role="dialog" aria-modal="true" aria-labelledby="schedule-title" onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 720, maxHeight: '88vh', display: 'flex', flexDirection: 'column', background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 'var(--r3)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', padding: '1.5rem 1.5rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
          <div>
            <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Program Schedule · All times IST</div>
            <h2 id="schedule-title" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 800, margin: 0 }}>{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close schedule"
            style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border2)', background: 'transparent', color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ overflowY: 'auto', padding: '0.5rem 1.5rem 1.5rem' }}>
          {schedule.map(group => (
            <div key={group.day} style={{ marginTop: '1.25rem' }}>
              <div style={{ position: 'sticky', top: 0, zIndex: 1, background: 'var(--bg2)', padding: '0.5rem 0', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: 'var(--c2)' }}>{group.day}</div>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderLeft: '2px solid var(--border2)', marginLeft: '0.35rem' }}>
                {group.items.map(([time, event], i) => (
                  <li key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '5.5rem 1fr', gap: '1rem', padding: '0.6rem 0 0.6rem 1.25rem' }}>
                    <span style={{ position: 'absolute', left: -6, top: '0.95rem', width: 10, height: 10, borderRadius: '50%', background: 'var(--c1)', boxShadow: '0 0 10px var(--c1)' }} />
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', color: 'var(--c1)', paddingTop: '0.1rem', whiteSpace: 'nowrap' }}>{time}</span>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.5 }}>{event}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConferenceDetail() {
  const { slug } = useParams();
  const conf = CONFERENCES[slug];
  const { t } = useLanguage();
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const closeSchedule = React.useCallback(() => setScheduleOpen(false), []);
  usePageMeta({
    title: conf ? conf.title : 'Conference',
    path: `/conferences/${slug}`,
    description: conf?.desc,
    image: conf?.img,
  });

  if (!conf) return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
      <div style={{ fontSize: '4rem' }}>🔍</div>
      <h2>{t('common.notFound')}</h2>
      <Link to="/conferences" className="btn btn-outline"><ArrowLeft size={15} /> {t('common.backConferences')}</Link>
    </div>
  );

  const isUpcoming = conf.status === 'Upcoming';

  return (
    <div>
      {/* ── Hero banner ── */}
      <div className="detail-hero" style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
        <img src={conf.img} alt={conf.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.18) saturate(0.6)' }}
        />
        {/* gradient overlay — heavier at bottom so text pops */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)' }} />

        {/* decorative glow */}
        {isUpcoming && (
          <div style={{ position: 'absolute', top: '15%', right: '8%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(48,209,88,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        )}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem' }}>
          <Link to="/conferences"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontWeight: 500, marginBottom: '1.75rem', transition: 'color var(--t)', width: 'fit-content', letterSpacing: '0.02em' }}
            onMouseOver={e => e.currentTarget.style.color = '#fff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
          >
            <ArrowLeft size={14} /> {t('common.backConferences')}
          </Link>
          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.1rem', flexWrap: 'wrap' }}>
            <span className={`tag ${isUpcoming ? 'tag-green' : ''}`} style={{ fontSize: '0.68rem' }}>{conf.status}</span>
            <span className="tag" style={{ fontSize: '0.68rem' }}>Conference</span>
          </div>
          {conf.eyebrow && (
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', fontWeight: 600, color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.6rem' }}>{conf.eyebrow}</div>
          )}
          {/* ── TITLE — highly visible ── */}
          <h1 style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 'clamp(2rem,5vw,3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: '0.85rem',
            textShadow: '0 2px 40px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.8)',
          }}>{conf.title}</h1>
          {conf.tagline && (
            <p style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 600, color: 'rgba(255,255,255,0.85)', margin: '0 0 1rem', maxWidth: 720, textShadow: '0 2px 20px rgba(0,0,0,1)' }}>{conf.tagline}</p>
          )}
          {/* accent line */}
          <div style={{ width: 64, height: 3, borderRadius: 2, background: 'var(--grad)' }} />
          {(conf.register || conf.heroCta) && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {conf.register && (
                <Link to={conf.register} className="btn btn-glow"
                  style={{ padding: '0.85rem 2rem', fontSize: '1rem', fontWeight: 700, boxShadow: '0 0 32px rgba(0,212,255,0.35)' }}
                >
                  <Ticket size={18} /> Register Now <ArrowRight size={16} />
                </Link>
              )}
              {conf.heroCta && (
                <button type="button" className={`btn ${conf.register ? 'btn-outline' : 'btn-glow'}`}
                  style={conf.register ? { background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)' } : undefined}
                  onClick={() => document.getElementById(conf.heroCta.target)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {conf.heroCta.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div id="conference-details" className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', scrollMarginTop: '72px' }}>
        {conf.meetUrl && <MeetBanner url={conf.meetUrl} start={conf.meetStart} />}

        {/* page title repeated for clarity */}
        <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            {conf.date} · {conf.location}
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, margin: 0 }}>{conf.title}</h2>
        </div>
        {scheduleOpen && conf.schedule && (
          <ScheduleModal schedule={conf.schedule} title={conf.title} onClose={closeSchedule} />
        )}

        <div className="detail-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '3rem', alignItems: 'start' }}>

          {/* Left — main content */}
          <div>
            {/* Theme */}
            {conf.theme && (
              <div style={{ borderLeft: '3px solid var(--c1)', paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>{t('common.theme')}</div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text2)', margin: 0, lineHeight: 1.7 }}>"{conf.theme}"</p>
              </div>
            )}

            {/* About */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {t('common.about')}
              </h2>
              {conf.about.split('\n\n').map((para, i) => (
                <p key={i} style={{ lineHeight: 1.85, marginBottom: '1rem', color: 'var(--text2)' }}>{para}</p>
              ))}
            </div>

            {/* Structured content sections */}
            {conf.sections?.map((s, i) => <ContentSection key={i} section={s} />)}

            {/* Closing call-to-action */}
            {conf.closing && (
              <div className="card" style={{ padding: '2.25rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(48,209,88,0.07), rgba(0,212,255,0.05))', borderColor: 'rgba(48,209,88,0.18)' }}>
                <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.7rem)', marginBottom: '1.25rem' }}>{conf.closing.heading}</h2>
                {conf.closing.paragraphs.map((p, i) => (
                  <p key={i} style={{ lineHeight: 1.85, marginBottom: '0.9rem', color: 'var(--text2)' }}>{p}</p>
                ))}
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.2rem', fontWeight: 800, margin: '1.25rem 0 0.75rem' }}>{conf.closing.highlight}</p>
                <div style={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>{conf.closing.meta}</div>
                <Link to={conf.closing.cta.to} className="btn btn-glow">{conf.closing.cta.label}</Link>
              </div>
            )}

            {/* Organizing Committee */}
            {conf.organizers.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={20} style={{ color: 'var(--c2)' }} /> {t('common.committee')}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {conf.organizers.map((o, i) => (
                    <div key={i} className="card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.8rem', fontWeight: 700, color: '#000', fontFamily: "'Syne',sans-serif" }}>
                        {o.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{o.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{o.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Invited Speakers */}
            {conf.speakers.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mic size={20} style={{ color: 'var(--c3)' }} /> {t('common.speakers')}
                </h2>
                <div className="grid-2" style={{ gap: '0.75rem' }}>
                  {conf.speakers.map((s, i) => (
                    <div key={i} className="card" style={{ padding: '1.25rem', borderLeft: `3px solid var(--c3)` }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{s.org}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sponsorship section */}
            <Sponsorship sectionName={conf.title} accentColor="var(--c1)" />
          </div>

          {/* Right — sidebar */}
          <div className="detail-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'sticky', top: '84px' }}>
            {conf.meetUrl && (
              <a href={conf.meetUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glow" style={{ justifyContent: 'center', width: '100%', padding: '0.85rem 1.2rem', fontWeight: 700 }}>
                <span className="live-dot live-dot-dark" /> Join Live on Google Meet
              </a>
            )}
            {conf.register && (
              <div className="card" style={{ padding: '1.5rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, rgba(0,212,255,0.10), rgba(191,90,242,0.08))', borderColor: 'rgba(0,212,255,0.25)' }}>
                <span className="tag tag-green" style={{ fontSize: '0.65rem' }}>Registration Open</span>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.15rem', margin: '0.85rem 0 0.4rem' }}>Reserve your place</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6, margin: '0 0 1.1rem' }}>{conf.date} · {conf.location}</p>
                <Link to={conf.register} className="btn btn-glow" style={{ justifyContent: 'center', width: '100%' }}>
                  <Ticket size={16} /> Register Now
                </Link>
                {conf.schedule && (
                  <button type="button" className="btn btn-outline" onClick={() => setScheduleOpen(true)}
                    style={{ justifyContent: 'center', width: '100%', marginTop: '0.75rem' }}
                  >
                    <Clock size={16} /> View Schedule
                  </button>
                )}
              </div>
            )}
            <InfoPill icon={<Calendar size={16} />} label={t('common.started')} value={conf.date} />
            {conf.meetStart && <InfoPill icon={<Clock size={16} />} label="Online Start" value={conf.meetStart} />}
            <InfoPill icon={<MapPin size={16} />} label="Location" value={conf.location} />
            <InfoPill icon={<span style={{ fontSize: '0.9rem' }}>📋</span>} label="Status" value={conf.status} />

            <div style={{ height: 1, background: 'var(--border)', margin: '0.5rem 0' }} />

            <Link to="/conferences" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              <ArrowLeft size={14} /> {t('common.backConferences')}
            </Link>
            <Link to="/join" className="btn btn-glow" style={{ justifyContent: 'center' }}>
              {t('nav.join')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
