/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Moon, 
  Ghost, 
  Skull, 
  Clock, 
  MapPin, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronRight,
  Menu as MenuIcon,
  X
} from 'lucide-react';

const MENU_ITEMS = [
  {
    category: "The Dark Roast",
    items: [
      { name: "Midnight Espresso", price: "$4.50", desc: "Pure, intense, and dark as the soul." },
      { name: "Grave Digger Latte", price: "$5.50", desc: "Double shot with charcoal-infused vanilla." },
      { name: "Reaper's Cold Brew", price: "$5.00", desc: "Steeped for 24 hours in the shadows." },
    ]
  },
  {
    category: "Sweet Release",
    items: [
      { name: "Black Velvet Cake", price: "$6.00", desc: "Rich cocoa with a hint of mystery." },
      { name: "Soul Sucker Cookie", price: "$3.50", desc: "Dark chocolate chunks with sea salt." },
      { name: "Eternal Rest Brownie", price: "$4.50", desc: "Fudgy, dense, and dangerously good." },
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Skull className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase italic">Coffin</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#about" className="hover:text-white transition-colors">The Void</a>
            <a href="#location" className="hover:text-white transition-colors">Find Us</a>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold tracking-tighter uppercase italic">
              <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>The Void</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)}>Find Us</a>
              <button className="w-full py-4 bg-white text-black rounded-xl">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 grayscale"
            src="https://www.youtube.com/embed/0LvCSrp_470?autoplay=1&mute=1&loop=1&playlist=0LvCSrp_470&controls=0&showinfo=0&rel=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            title="Hero Background Video"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Est. 2024 • The Afterlife of Coffee
            </span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase italic mb-8">
              Coffee to <br />
              <span className="text-emerald-500">Die For</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-white/60 mb-12 font-light leading-relaxed">
              Step out of the light and into the rich, dark embrace of Coffin. 
              We brew spirits, not just beans.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                Enter the Menu
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter uppercase italic mb-4">The Rituals</h2>
              <p className="text-white/40 max-w-md">Our curated selection of brews and bites, crafted for those who prefer the shadows.</p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                <Coffee className="text-emerald-500" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Today's Special</div>
                  <div className="font-bold">Ghost Roast</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {MENU_ITEMS.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-emerald-500 mb-12 pb-4 border-b border-white/10">
                  {section.category}
                </h3>
                <div className="space-y-12">
                  {section.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">{item.name}</h4>
                        <div className="flex-1 mx-4 border-b border-dashed border-white/10" />
                        <span className="text-xl font-mono">{item.price}</span>
                      </div>
                      <p className="text-white/40 font-light">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=2070" 
                alt="Coffee Shop Interior" 
                className="w-full h-full object-cover grayscale brightness-50"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
          </div>
          <div>
            <span className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Void</span>
            <h2 className="text-6xl font-bold tracking-tighter uppercase italic mb-8 leading-none">
              Where Time <br />Stands Still
            </h2>
            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
              <p>
                Coffin isn't just a name; it's a philosophy. We believe the best moments are found in the quiet, 
                the dark, and the deep. Our shop is a sanctuary for the night owls, the dreamers, and the 
                restless souls seeking a perfect cup.
              </p>
              <p>
                Every bean is ethically sourced from high-altitude estates and roasted in small batches 
                until they reach their peak darkness. We don't just serve coffee; we serve an experience 
                that lingers long after the last drop.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold">Late Hours</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Open till 3 AM</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Ghost className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold">Quiet Zone</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">No Loud Spirits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
              <Clock className="w-8 h-8 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 uppercase italic">Hours</h3>
              <div className="space-y-2 text-white/60 font-light uppercase tracking-widest text-sm">
                <div className="flex justify-between"><span>Mon - Thu</span> <span>6PM - 1AM</span></div>
                <div className="flex justify-between"><span>Fri - Sat</span> <span>6PM - 3AM</span></div>
                <div className="flex justify-between"><span>Sunday</span> <span>Closed</span></div>
              </div>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
              <MapPin className="w-8 h-8 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 uppercase italic">Location</h3>
              <p className="text-white/60 font-light leading-relaxed">
                13 Shadow Lane<br />
                The Underworld District<br />
                Midnight City, 00000
              </p>
            </div>
            <div className="p-10 bg-emerald-500 rounded-3xl text-black">
              <Skull className="w-8 h-8 mb-6" />
              <h3 className="text-2xl font-bold mb-4 uppercase italic">Join Us</h3>
              <p className="font-medium mb-8">Subscribe to our newsletter for secret rituals and midnight deals.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/10 border-b-2 border-black/20 py-2 focus:outline-none focus:border-black transition-colors placeholder:text-black/40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <Skull className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold tracking-tighter uppercase italic">Coffin</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="text-white/20 text-xs uppercase tracking-[0.2em]">
            © 2024 Coffin Coffee Shop • All Souls Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
