import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdownParser';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const blogFiles = import.meta.glob('../../content/blogs/**/*.md', { query: '?raw', import: 'default' });

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  usePageMeta({
    title: 'Blog',
    path: '/blogs',
    description: 'Stories, announcements, and writing from the Odisha AI community — chapter launches, events, research, and AI education across the globe.',
  });

  useEffect(() => {
    const load = async () => {
      const loaded = [];
      for (const path in blogFiles) {
        try {
          const raw = await blogFiles[path]();
          const { frontmatter, content } = parseMarkdown(raw);
          if (!path.includes('_index') && !path.includes('dup-and-rename')) {
            const slug = path.replace('../../content/blogs/', '').replace('.md', '').replace('/_index', '');
            loaded.push({
              slug, content,
              title: frontmatter.title || 'Untitled',
              date: frontmatter.date || '',
              description: frontmatter.description || '',
              tags: frontmatter.taxonomies?.tags || frontmatter.tags || [],
            });
          }
        } catch {}
      }
      loaded.sort((a,b) => new Date(b.date) - new Date(a.date));
      setBlogs(loaded);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return (
    <div style={{ minHeight:'50vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)', fontSize:'0.85rem' }}>// Loading...</div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <div style={{ borderBottom:'1px solid var(--border)', paddingTop:'5rem', paddingBottom:'4rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-60, right:-60, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative' }}>
          <div className="stagger">
            <div className="section-label">Community Voices</div>
            <h1 style={{ marginBottom:'1rem' }}>{t('nav.blog')}</h1>
            <p style={{ fontSize:'1.1rem', maxWidth:520 }}>
              Articles, case studies, and stories from the Odisha AI community — by Odias, for the world.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'3rem', paddingBottom:'4rem' }}>
        {blogs.length === 0 ? (
          <div style={{ textAlign:'center', padding:'5rem 0' }}>
            <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>📝</div>
            <h3 style={{ marginBottom:'0.5rem' }}>No blog posts yet</h3>
            <p>Check back soon for community stories and insights.</p>
          </div>
        ) : (
          <div className="grid-2 stagger">
            {blogs.map((b, i) => (
              <Link key={i} to={`/blogs/${b.slug}`}
                className="card card-glow"
                style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column', padding:'2rem', gap:'1rem' }}
              >
                {/* Decorative header */}
                <div style={{ height:4, borderRadius:2, background:'var(--grad)', marginBottom:'0.5rem' }} />
                <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
                  {(b.tags || []).map(t => (
                    <span key={t} className="tag tag-purple" style={{ fontSize:'0.65rem' }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontSize:'1.3rem', margin:0 }}>{b.title}</h3>
                {b.description && <p style={{ fontSize:'0.9rem', lineHeight:1.7 }}>{b.description}</p>}
                <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginTop:'auto', paddingTop:'0.75rem', borderTop:'1px solid var(--border)' }}>
                  {b.date && (
                    <span style={{ display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.78rem', color:'var(--text3)', fontFamily:"'JetBrains Mono',monospace" }}>
                      <Calendar size={12}/> {b.date}
                    </span>
                  )}
                  <span style={{ color:'var(--c1)', fontSize:'0.82rem', fontWeight:600, marginLeft:'auto', display:'flex', alignItems:'center', gap:'0.3rem' }}>
                    Read <ArrowRight size={13}/>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
