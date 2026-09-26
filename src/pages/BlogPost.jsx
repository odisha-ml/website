import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parseMarkdown } from '../utils/markdownParser';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { usePageMeta } from '../utils/usePageMeta';

const blogFiles = import.meta.glob('../../content/blogs/**/*.md', { query: '?raw', import: 'default' });

export default function BlogPost() {
  const params = useParams();
  const slug = params['*'];
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  usePageMeta({
    title: blog ? blog.title : 'Blog',
    path: `/blogs/${slug}`,
  });

  useEffect(() => {
    const load = async () => {
      const matchPath = Object.keys(blogFiles).find(p => {
        const s = p.replace('../../content/blogs/', '').replace('.md', '').replace('/_index', '');
        return s === slug;
      });
      if (matchPath) {
        try {
          const raw = await blogFiles[matchPath]();
          const { frontmatter, content } = parseMarkdown(raw);
          setBlog({ content, title: frontmatter.title || 'Untitled', date: frontmatter.date || '', tags: frontmatter.taxonomies?.tags || frontmatter.tags || [] });
        } catch {}
      }
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) return <div style={{ minHeight:'50vh', display:'flex', alignItems:'center', justifyContent:'center' }}><span style={{ fontFamily:"'JetBrains Mono',monospace", color:'var(--text3)' }}>// Loading...</span></div>;

  if (!blog) return (
    <div style={{ minHeight:'50vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'1.5rem' }}>
      <div style={{ fontSize:'3rem' }}>404</div>
      <h2>{t('common.notFound')}</h2>
      <Link to="/blogs" className="btn btn-outline"><ArrowLeft size={15}/> {t('common.back')}</Link>
    </div>
  );

  return (
    <div className="container" style={{ paddingTop:'4rem', paddingBottom:'5rem', maxWidth:780 }}>
      <Link to="/blogs" style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', color:'var(--text3)', fontSize:'0.85rem', marginBottom:'2.5rem', fontWeight:500, transition:'color var(--t)' }}
        onMouseOver={e=>e.currentTarget.style.color='var(--text)'}
        onMouseOut={e=>e.currentTarget.style.color='var(--text3)'}
      >
        <ArrowLeft size={15}/> {t('common.back')}
      </Link>

      <div style={{ marginBottom:'0.75rem', display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
        {blog.tags.map(t => <span key={t} className="tag tag-purple" style={{ fontSize:'0.65rem' }}>{t}</span>)}
      </div>
      <h1 style={{ marginBottom:'1rem', fontSize:'clamp(1.8rem,4vw,2.8rem)' }}>{blog.title}</h1>
      {blog.date && (
        <div style={{ display:'flex', alignItems:'center', gap:'0.4rem', color:'var(--text3)', fontSize:'0.82rem', fontFamily:"'JetBrains Mono',monospace", marginBottom:'2.5rem' }}>
          <Calendar size={13}/> {blog.date}
        </div>
      )}

      <div style={{ height:1, background:'var(--border)', marginBottom:'2.5rem' }} />

      <div className="md">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
      </div>

      <div style={{ marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid var(--border)' }}>
        <Link to="/blogs" className="btn btn-outline">
          <ArrowLeft size={15}/> {t('common.back')}
        </Link>
      </div>
    </div>
  );
}
