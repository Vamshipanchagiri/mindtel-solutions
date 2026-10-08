import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { Purpose } from '@/components/home/purpose';
import { ServicesGrid } from '@/components/services-grid';
import { Approach } from '@/components/home/approach';
import { IndustriesSection } from '@/components/home/industries-section';
import { WorkGrid } from '@/components/work-grid';
import { FinalCta } from '@/components/final-cta';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Mindtel Solutions — Software with purpose',description:'Software, digital products and technology solutions built around your business. Explore Mindtel Solutions’ design and engineering capabilities.',jsonLd:{'@context':'https://schema.org','@type':'Organization',name:'Mindtel Solutions',email:'info@mindtelsolutions.in'}})}
export default function Home(){return <><Hero/><Purpose/><ServicesGrid/><Approach/><IndustriesSection/><WorkGrid/><FinalCta/></>}
