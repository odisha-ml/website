import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Globe, Sparkles, Mail, ExternalLink } from 'lucide-react';
import { usePageMeta } from '../utils/usePageMeta';

const FORM_ID = 'yPVEa8';
const FORM_SRC = `https://tally.so/embed/${FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1`;
const FORM_DIRECT = `https://tally.so/r/${FORM_ID}`;
const TALLY_SCRIPT = 'https://tally.so/widgets/embed.js';

const HIGHLIGHTS = [
  { title: 'Keynotes & Panels', desc: 'Sovereign AI, frontier research, startups and industry — from Odisha, India and the world.' },
  { title: 'District to Global', desc: 'Dedicated sessions connecting Odisha districts with national and international ecosystems.' },
  { title: 'Network', desc: 'Meet students, founders, researchers, businesses and policymakers building with AI.' },
];

/* Load Tally's embed script once, then hydrate any data-tally-src iframes. */
function useTallyEmbed() {
  useEffect(() => {
    const hydrate = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        // Script blocked: no auto-resize, so give the form room instead of cropping it.
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(el => { el.height = '1400'; el.src = el.dataset.tallySrc; });
      }
    };
    if (window.Tally) {
      hydrate();
      return;
    }
    // Script may already be in-flight (e.g. StrictMode remount) — wait for it
    // rather than falling back, so Tally's auto-resize is set up.
    const existing = document.querySelector(`script[src="${TALLY_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener('load', hydrate);
      existing.addEventListener('error', hydrate);
      return () => {
        existing.removeEventListener('load', hydrate);
        existing.removeEventListener('error', hydrate);
      };
    }
    const s = document.createElement('script');
    s.src = TALLY_SCRIPT;
    s.async = true;
    s.onload = hydrate;
    s.onerror = hydrate;
    document.body.appendChild(s);
  }, []);
}

function DetailRow({ icon, label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', color: 'var(--c1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: '0.62rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{value}</div>
      </div>
    </div>
  );
}

export default function ConferenceRegister() {
  const [loaded, setLoaded] = useState(false);
  useTallyEmbed();
  usePageMeta({
    title: 'Register — 2026 Odisha AI Conference',
    path: '/conferences/2026/register',
    description: 'Register for the 2026 Odisha AI Conference — Vision to Impact. 10 October 2026, Hybrid.',
    image: '/images/conference-covers/2026.webp',
  });

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ── Background glows ── */}
      <div aria-hidden style={{ position: 'absolute', top: -120, left: '-10%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', top: 200, right: '-12%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,90,242,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* ── Header ── */}
      <div className="container" style={{ position: 'relative', paddingTop: '3rem', paddingBottom: '2.5rem' }}>
        <Link to="/conferences/2026"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text2)', fontSize: '0.8rem', fontWeight: 500, marginBottom: '2rem', letterSpacing: '0.02em', transition: 'color var(--t)' }}
          onMouseOver={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--text2)'}
        >
          <ArrowLeft size={14} /> Back to 2026 Conference
        </Link>

        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.1rem', flexWrap: 'wrap' }}>
          <span className="tag tag-green" style={{ fontSize: '0.68rem' }}>Registration Open</span>
          <span className="tag" style={{ fontSize: '0.68rem' }}>#OAIConf2026</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.8rem', fontWeight: 600, color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '0.6rem' }}>Vision to Impact</div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.6rem,3.6vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', maxWidth: 820 }}>
          Register for the{' '}
          <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>2026 Odisha AI Conference</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem,1.8vw,1.15rem)', color: 'var(--text2)', maxWidth: 640, lineHeight: 1.7, margin: 0 }}>
          Join visionaries, researchers, founders and young minds exploring how AI can make Odisha the intellectual AI capital of the world.
        </p>
        <div style={{ width: 64, height: 3, borderRadius: 2, background: 'var(--grad)', marginTop: '1.5rem' }} />
      </div>

      {/* ── Form + sidebar ── */}
      <div className="container" style={{ position: 'relative', paddingBottom: '5rem' }}>
        <div className="detail-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }}>

          {/* Form card — gradient border */}
          <div style={{ padding: 1, borderRadius: 'var(--r3)', background: 'linear-gradient(135deg, rgba(0,212,255,0.45), rgba(191,90,242,0.35) 50%, rgba(255,255,255,0.06))' }}>
            <div style={{ background: 'var(--bg2)', borderRadius: 'calc(var(--r3) - 1px)', padding: 'clamp(1.25rem,3vw,2.25rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                <Sparkles size={18} style={{ color: 'var(--c1)' }} />
                <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Registration Form</h2>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text3)', margin: '0 0 1.5rem' }}>Fill in your details below to reserve your place.</p>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.5rem' }} />

              <div style={{ position: 'relative', minHeight: loaded ? 0 : 420 }}>
                <iframe
                  data-tally-src={FORM_SRC}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  title="Odisha AI Conference 2026 Registration"
                  onLoad={e => { if (e.currentTarget.src) setLoaded(true); }}
                  style={{ display: 'block', border: 0, width: '100%', overflow: 'hidden' }}
                />
                {!loaded && (
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'var(--bg2)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[40, 100, 40, 100, 40, 100].map((w, i) => (
                      <div key={i} className="reg-skeleton" style={{ height: w === 100 ? 44 : 14, width: `${w}%`, borderRadius: w === 100 ? 10 : 6 }} />
                    ))}
                  </div>
                )}
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text3)', margin: '1.25rem 0 0', textAlign: 'center' }}>
                Trouble viewing the form?{' '}
                <a href={FORM_DIRECT} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c1)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  Open it in a new tab <ExternalLink size={12} />
                </a>
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '84px' }}>
            <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(191,90,242,0.05))' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--c1)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Event Details</div>
              <DetailRow icon={<Calendar size={16} />} label="Date" value="10 October 2026" />
              <DetailRow icon={<MapPin size={16} />} label="Format" value="Hybrid — Bhubaneswar & Online" />
              <DetailRow icon={<Globe size={16} />} label="Audience" value="Odisha · India · Global" />
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: 'var(--c2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>What to Expect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {HIGHLIGHTS.map((h, i) => (
                  <div key={h.title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--grad)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>{i + 1}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem' }}>{h.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text3)', lineHeight: 1.55 }}>{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <Mail size={18} style={{ color: 'var(--c3)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.5 }}>
                Questions about registering? <Link to="/join" style={{ color: 'var(--c1)' }}>Get in touch with the community</Link>.
              </div>
            </div>

            <Link to="/conferences/2026" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              <ArrowLeft size={14} /> Conference Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
