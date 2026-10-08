import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
export function FinalCta(){return <section className="final-cta reveal"><div><span className="eyebrow">HAVE A TECHNOLOGY CHALLENGE?</span><h2>Let’s build<br/>something useful<span>.</span></h2></div><Link className="button dark" to="/contact">Talk to Mindtel Solutions <ArrowUpRight size={20}/></Link></section>}
