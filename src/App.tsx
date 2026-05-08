/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bolt, 
  Rocket, 
  ShieldCheck, 
  Sparkles, 
  Database, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Twitter, 
  Github,
  Component,
  Layers,
  Cpu
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505E0] backdrop-blur-md py-6' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-baseline space-x-2">
          <div className="text-2xl font-black tracking-tighter text-white font-display">
            VIVID
          </div>
          <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Engine v4.0</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 font-display text-[11px] font-bold tracking-[0.2em] uppercase">
          {[
            { label: 'Gallery', id: 'features' },
            { label: 'Studio', id: 'services' },
            { label: 'Heritage', id: 'about' },
            { label: 'Curiosities', id: 'faq' }
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-white/60 hover:text-white transition-opacity">
              {item.label}
            </a>
          ))}
          <button className="px-6 py-2 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-black transition-all">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-44 pb-32 overflow-hidden px-12">
    <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-12 gap-0 items-center">
      <div className="col-span-12 lg:col-span-7 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-label mb-8"
        >
          Rendering 84% Complete
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100, mass: 0.8 }}
          className="text-title-huge mb-12 mix-blend-difference"
        >
          BEYOND<br/>PIXELS
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-white/50 text-lg max-w-lg mb-12 leading-relaxed font-light"
        >
          Unlocking human potential through latent space. Cybernetic flora in a limestone valley at dusk, intricate bioluminescent patterns.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-primary-hover text-white rounded-2xl font-black text-xs tracking-[0.3em] uppercase transition-all shadow-2xl shadow-primary/20 group">
            <span className="flex items-center space-x-4">
              <span>Generate Masterpiece</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-5 mt-20 lg:mt-0 relative group">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full aspect-square bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] rounded-2xl border border-white/10 shadow-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4/5 h-4/5 border border-white/5 rounded-full animate-pulse"></div>
            <div className="absolute w-1/2 h-1/2 bg-primary/10 blur-[100px] rounded-full"></div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1280&h=1280" 
            alt="Canvas" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="max-w-7xl mx-auto px-12 py-32 border-t border-white/5">
    <div className="mb-20">
      <p className="text-label mb-4">Core Foundations</p>
      <h2 className="font-display text-4xl md:text-6xl text-white font-black tracking-tighter">THE ENGINE</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <motion.div 
        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
        className="md:col-span-8 art-card p-12 overflow-hidden relative"
      >
        <div className="text-label mb-8">Systems / 01</div>
        <h3 className="font-display text-4xl text-white mb-6 font-black tracking-tighter">Warp-Speed Infrastructure</h3>
        <p className="text-white/40 max-w-lg mb-12 text-sm leading-relaxed">Deploy globally in milliseconds with our edge-optimized network. Minimal latency, maximum throughput.</p>
        <div className="w-full h-64 bg-[#111] rounded-xl overflow-hidden grayscale group hover:grayscale-0 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=300" 
            alt="Network" 
            className="w-full h-full object-cover" 
          />
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
        className="md:col-span-4 art-card p-12 flex flex-col justify-between"
      >
        <div>
          <div className="text-label mb-8">Security / 02</div>
          <h3 className="font-display text-4xl text-white mb-6 font-black tracking-tighter">Encrypted Flow</h3>
          <p className="text-white/40 text-sm leading-relaxed">End-to-end cryptographic security that protects your assets from day one.</p>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-primary group cursor-pointer">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Documentation</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
        className="md:col-span-4 art-card p-12"
      >
        <div className="text-label mb-8">AI / 03</div>
        <h3 className="font-display text-4xl text-white mb-6 font-black tracking-tighter">Neural Design</h3>
        <p className="text-white/40 text-sm leading-relaxed">Adaptive UI that learns from user behavior to optimize conversion paths.</p>
      </motion.div>

      <motion.div 
        whileHover={{ borderColor: 'rgba(168, 85, 247, 0.4)' }}
        className="md:col-span-8 art-card p-12 flex items-center gap-8 overflow-hidden bg-[#0A0A0A]"
      >
        <div className="flex-1">
          <div className="text-label mb-8">Data / 04</div>
          <h3 className="font-display text-4xl text-white mb-6 font-black tracking-tighter">Quantum Storage</h3>
          <p className="text-white/40 text-sm leading-relaxed">Infinite scalability for your data lakes with redundant shards across five dimensions.</p>
        </div>
        <div className="hidden lg:block w-48 h-48 bg-primary/10 rounded-full blur-[100px]" />
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-[#0A0A0A] py-32 border-y border-white/5 px-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <div className="text-label mb-4 opacity-50">Expertise</div>
          <h2 className="font-display text-5xl md:text-7xl text-white font-black tracking-tighter">FULL SPECTRUM</h2>
        </div>
        <div className="text-right">
          <p className="text-white/30 text-xs mb-4 uppercase tracking-widest font-black italic italic">Prices starting at 12k</p>
          <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
            Inquire Studio
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {[
          {
            title: "Systems Architecture",
            desc: "Blueprint development for complex microservices and distributed databases.",
            tags: ["SCALABILITY", "CLOUD", "IAC"],
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600&h=400",
          },
          {
            title: "Experience Strategy",
            desc: "Psychology-driven design that creates deep emotional resonance with users.",
            tags: ["PSYCHOLOGY", "INTERACTIVE", "BRAND"],
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
          },
          {
            title: "Rapid Prototyping",
            desc: "Accelerated development cycles to move from idea to MVP in record time.",
            tags: ["AGILE", "API", "QA"],
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400",
          }
        ].map((service, index) => (
          <motion.div 
            key={index}
            className="group"
          >
            <div className="mb-10 aspect-[4/3] bg-[#111] rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary/40 transition-colors">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>
            <h4 className="font-display text-2xl text-white mb-4 font-black tracking-tight">{service.title}</h4>
            <p className="text-white/40 mb-8 text-sm leading-relaxed">{service.desc}</p>
            <div className="flex flex-wrap gap-4">
              {service.tags.map(tag => (
                <span key={tag} className="text-[9px] font-black tracking-widest text-primary/60 border-b border-primary/20 pb-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="art-card rounded-2xl overflow-hidden mb-4 bg-transparent border-white/10 hover:border-primary/40">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-display text-xl font-black italic italic uppercase tracking-tighter">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-white/40 leading-relaxed pt-2 text-sm max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="mesh-gradient min-h-screen selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        <Services />
        
        <section id="about" className="max-w-7xl mx-auto px-12 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[100px]" />
              <div className="art-card aspect-square relative z-10 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Our Team" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute bottom-12 left-12 flex items-center space-x-4">
                  <div className="h-px w-12 bg-primary"></div>
                  <span className="text-[10px] tracking-widest uppercase opacity-50 font-black">EST. 2012</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-label mb-6">Heritage</div>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-8 font-black tracking-tighter leading-none italic italic">BORN FROM THE VOID.</h2>
              <p className="text-lg text-white/50 mb-12 leading-relaxed font-light">
                VortexLabs began as a clandestine research collective focused on decentralized computing. Today, we are a global agency at the intersection of AI, design, and performance.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-2">Precision Driven</h5>
                    <p className="text-white/30 text-sm leading-relaxed">We don't believe in "good enough". Every pixel and every line of code is optimized.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-12 py-32">
          <div className="text-center mb-20">
            <div className="text-label mb-4 opacity-50">Discovery</div>
            <h2 className="font-display text-4xl md:text-7xl text-white mb-4 font-black tracking-tighter uppercase italic italic">Curiosities</h2>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="How long does a typical project take?" 
              answer="Most core infrastructure builds take 8-12 weeks from strategy to deployment. Smaller design sprints can be completed in as little as 3 weeks."
            />
            <FAQItem 
              question="Do you offer post-launch support?" 
              answer="Yes, every project includes a 24-month maintenance cycle with 24/7 technical oversight and regular performance audits."
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-12 bg-[#050505] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-8">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border border-black bg-purple-500"></div>
              <div className="w-6 h-6 rounded-full border border-black bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full border border-black bg-pink-500"></div>
            </div>
            <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">4.2k active creators online</span>
          </div>
          <div className="text-[9px] opacity-20 uppercase tracking-[0.4em] text-center md:text-right">
            Unlocking Human Potential through Latent Space
          </div>
        </div>
      </footer>
    </div>
  );
}
