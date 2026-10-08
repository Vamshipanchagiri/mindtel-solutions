import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/site';
export function IndustriesSection(){return <section className="section reveal"><div className="editorial-grid"><div><span className="eyebrow">04 / INDUSTRIES</span><h2>Different worlds.<br/>The same care.</h2><p>Context matters. We shape technology around the challenges, people and priorities of your industry.</p><Link className="underlined-link" to="/industries">Explore industries <ArrowUpRight size={18}/></Link></div><div className="industry-list">{industries.map(([name],i)=><Link to="/industries" key={name}><small>0{i+1}</small><span>{name}</span><ArrowUpRight size={18}/></Link>)}</div></div></section>}
