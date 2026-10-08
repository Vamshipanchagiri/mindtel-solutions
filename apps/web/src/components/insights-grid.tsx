import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/site';
export function InsightsGrid(){const [filter,setFilter]=useState('All');return <section className="section"><div className="filters">{['All','Software','Design','Engineering','Cloud','AI','Data','Security'].map(c=><button key={c} className={filter===c?'selected':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="insights-grid">{articles.filter(a=>filter==='All'||a.category===filter).map((a,i)=><Link className="article-card" to={'/insights/'+a.slug} key={a.slug}><div className={'article-art art-'+i%3}><span>{String(i+1).padStart(2,'0')}</span><div/><i/></div><span className="eyebrow">{a.category}</span><h2>{a.title}</h2><p>{a.description}</p><span className="underlined-link">Read article <ArrowUpRight size={18}/></span></Link>)}</div></section>}
