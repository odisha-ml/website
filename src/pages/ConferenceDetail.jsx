import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, MapPin, Users, Mic } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta, breadcrumb } from '../utils/usePageMeta';
import Sponsorship from '../components/Sponsorship';

const ORIGIN = 'https://www.odishaai.org';

/* ISO 8601 dates for schema.org Event (the display `date` strings are
   human-readable and not machine-parseable). Year-only entries use the year,
   which is valid ISO 8601. Omitted slugs emit no Event schema. */
const CONF_DATES = {
  '2026': { start: '2026-10-10' },
  summit: { start: '2025-12-21', end: '2025-12-22' },
  'regional-summit': { start: '2025-11-14' },
  '2025': { start: '2025-10-11' },
  '2024': { start: '2024' },
  '2023': { start: '2023' },
  '2022': { start: '2022' },
  '2021': { start: '2021' },
  '2020': { start: '2020' },
};

/* ─── All conference data ─── */
const CONFERENCES = {
  '2026': {
    title: '2026 Odisha AI Conference',
    date: '10 October 2026',
    location: 'Odisha, India',
    img: '/images/conference-covers/2026.webp',
    status: 'Upcoming',
    hashtag: '#OAIConf2026',
    hashtagUrl: 'https://x.com/hashtag/OAIConf2026',
    theme: 'Continuing the journey of Odisha AI into the future',
    about: `The 2026 Odisha AI Conference marks the seventh annual gathering of the global Odia AI community. Scheduled for 10th October 2026, this event will bring together researchers, practitioners, policymakers, and entrepreneurs.`,
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
    <div style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', padding:'1rem 1.25rem', background:'var(--bg3)', borderRadius:'var(--r2)', border:'1px solid var(--border)' }}>
      <span style={{ color:'var(--c1)', marginTop:'0.1rem', flexShrink:0 }}>{icon}</span>
      <div>
        <div style={{ fontSize:'0.65rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'0.2rem' }}>{label}</div>
        <div style={{ fontWeight:600, fontSize:'0.9rem' }}>{value}</div>
      </div>
    </div>
  );
}

export default function ConferenceDetail() {
  const { slug } = useParams();
  const conf = CONFERENCES[slug];
  const { t } = useLanguage();
  usePageMeta({
    title: conf ? conf.title : 'Conference',
    path: `/conferences/${slug}`,
    description: conf?.about || conf?.theme,
    image: conf?.img,
    jsonLd: conf
      ? [
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Conferences', path: '/conferences' },
            { name: conf.title, path: `/conferences/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: conf.title,
            description: conf.about || conf.theme,
            startDate: CONF_DATES[slug]?.start,
            endDate: CONF_DATES[slug]?.end,
            eventStatus: 'https://schema.org/EventScheduled',
            image: conf.img ? `${ORIGIN}${conf.img}` : undefined,
            url: `${ORIGIN}/conferences/${slug}`,
            location: { '@type': 'Place', name: conf.location },
            organizer: { '@id': `${ORIGIN}/#organization` },
          },
        ]
      : undefined,
  });

  if (!conf) return (
    <div style={{ minHeight:'60vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1.5rem' }}>
      <div style={{ fontSize:'4rem' }}>🔍</div>
      <h2>{t('common.notFound')}</h2>
      <Link to="/conferences" className="btn btn-outline"><ArrowLeft size={15}/> {t('common.backConferences')}</Link>
    </div>
  );

  const isUpcoming = conf.status === 'Upcoming';

  return (
    <div>
      {/* ── Hero banner ── */}
      <div className="detail-hero" style={{ position:'relative', height: 420, overflow:'hidden' }}>
        <img src={conf.img} alt={conf.title}
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', filter:'brightness(0.18) saturate(0.6)' }}
        />
        {/* gradient overlay — heavier at bottom so text pops */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)' }} />

        {/* decorative glow */}
        {isUpcoming && (
          <div style={{ position:'absolute', top:'15%', right:'8%', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle, rgba(48,209,88,0.14) 0%, transparent 70%)', pointerEvents:'none' }} />
        )}
        <div style={{ position:'absolute', top:'15%', left:'5%', width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container" style={{ position:'relative', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:'3rem' }}>
          <Link to="/conferences"
            style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', color:'rgba(255,255,255,0.45)', fontSize:'0.8rem', fontWeight:500, marginBottom:'1.75rem', transition:'color var(--t)', width:'fit-content', letterSpacing:'0.02em' }}
            onMouseOver={e=>e.currentTarget.style.color='#fff'}
            onMouseOut={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}
          >
            <ArrowLeft size={14}/> {t('common.backConferences')}
          </Link>
          <div style={{ display:'flex', gap:'0.6rem', marginBottom:'1.1rem', flexWrap:'wrap' }}>
            <span className={`tag ${isUpcoming ? 'tag-green' : ''}`} style={{ fontSize:'0.68rem' }}>{conf.status}</span>
            <span className="tag" style={{ fontSize:'0.68rem' }}>Conference</span>
          </div>
          {/* ── TITLE — highly visible ── */}
          <h1 style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:'clamp(2rem,5vw,3.6rem)',
            fontWeight:800,
            color:'#ffffff',
            letterSpacing:'-0.025em',
            lineHeight:1.1,
            marginBottom:'0.85rem',
            textShadow:'0 2px 40px rgba(0,0,0,1), 0 0 80px rgba(0,0,0,0.8)',
          }}>{conf.title}</h1>
          {/* accent line */}
          <div style={{ width:64, height:3, borderRadius:2, background:'var(--grad)' }} />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'5rem' }}>
        {/* page title repeated for clarity */}
        <div style={{ marginBottom:'2.5rem', paddingBottom:'2rem', borderBottom:'1px solid var(--border)' }}>
          <div style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.5rem' }}>
            {conf.date} · {conf.location}
          </div>
          <h2 style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:800, margin:0 }}>{conf.title}</h2>
        </div>

        <div className="detail-layout" style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:'3rem', alignItems:'start' }}>

          {/* Left — main content */}
          <div>
            {/* Theme */}
            {conf.theme && (
              <div style={{ borderLeft:'3px solid var(--c1)', paddingLeft:'1.25rem', marginBottom:'2.5rem' }}>
                <div style={{ fontSize:'0.68rem', fontFamily:"'JetBrains Mono',monospace", color:'var(--c1)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'0.4rem' }}>{t('common.theme')}</div>
                <p style={{ fontSize:'1.1rem', fontStyle:'italic', color:'var(--text2)', margin:0, lineHeight:1.7 }}>"{conf.theme}"</p>
              </div>
            )}

            {/* About */}
            <div style={{ marginBottom:'3rem' }}>
              <h2 style={{ fontSize:'1.3rem', marginBottom:'1.25rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                {t('common.about')}
              </h2>
              {conf.about.split('\n\n').map((para, i) => (
                <p key={i} style={{ lineHeight:1.85, marginBottom:'1rem', color:'var(--text2)' }}>{para}</p>
              ))}
            </div>

            {/* Organizing Committee */}
            {conf.organizers.length > 0 && (
              <div style={{ marginBottom:'3rem' }}>
                <h2 style={{ fontSize:'1.3rem', marginBottom:'1.25rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                  <Users size={20} style={{ color:'var(--c2)' }}/> {t('common.committee')}
                </h2>
                <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
                  {conf.organizers.map((o, i) => (
                    <div key={i} className="card" style={{ padding:'1rem 1.25rem', display:'flex', alignItems:'center', gap:'1rem' }}>
                      <div style={{ width:36, height:36, borderRadius:'50%', background:'var(--grad)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'0.8rem', fontWeight:700, color:'#000', fontFamily:"'Syne',sans-serif" }}>
                        {o.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight:600, fontSize:'0.9rem' }}>{o.name}</div>
                        <div style={{ fontSize:'0.78rem', color:'var(--text3)' }}>{o.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Invited Speakers */}
            {conf.speakers.length > 0 && (
              <div style={{ marginBottom:'3rem' }}>
                <h2 style={{ fontSize:'1.3rem', marginBottom:'1.25rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
                  <Mic size={20} style={{ color:'var(--c3)' }}/> {t('common.speakers')}
                </h2>
                <div className="grid-2" style={{ gap:'0.75rem' }}>
                  {conf.speakers.map((s, i) => (
                    <div key={i} className="card" style={{ padding:'1.25rem', borderLeft:`3px solid var(--c3)` }}>
                      <div style={{ fontWeight:600, fontSize:'0.9rem', marginBottom:'0.2rem' }}>{s.name}</div>
                      <div style={{ fontSize:'0.78rem', color:'var(--text3)' }}>{s.org}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sponsorship section */}
            <Sponsorship sectionName={conf.title} accentColor="var(--c1)" />
          </div>

          {/* Right — sidebar */}
          <div className="detail-sidebar" style={{ display:'flex', flexDirection:'column', gap:'0.75rem', position:'sticky', top:'84px' }}>
            <InfoPill icon={<Calendar size={16}/>} label={t('common.started')} value={conf.date} />
            <InfoPill icon={<MapPin size={16}/>} label="Location" value={conf.location} />
            <InfoPill icon={<span style={{ fontSize:'0.9rem' }}>📋</span>} label="Status" value={conf.status} />

            <div style={{ height:1, background:'var(--border)', margin:'0.5rem 0' }} />

            <Link to="/conferences" className="btn btn-outline" style={{ justifyContent:'center' }}>
              <ArrowLeft size={14}/> {t('common.backConferences')}
            </Link>
            <Link to="/join" className="btn btn-glow" style={{ justifyContent:'center' }}>
              {t('nav.join')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
