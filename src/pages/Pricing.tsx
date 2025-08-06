import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { Sparkles } from '../components/ui/sparkles';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BentoGridThirdDemo } from '../components/ui/bento-grid-demo';



const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Started with a simple mission: build fast, build right, build for founders."
  },
  {
    year: "2024",
    title: "First 10 Clients",
    description: "Proved that speed doesn't compromise quality. Every project a success story."
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "From India to Silicon Valley, founders worldwide trust HackInversion."
  },
  {
    year: "2025",
    title: "The Future",
    description: "Building the next generation of tech companies, one founder at a time."
  }
];

export default function Pricing() {

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Black Background with Sparkles */}
      <div className="absolute inset-0 bg-black" />
      <Sparkles 
        density={250}
        className="absolute inset-0 pointer-events-none"
        color="#f59e0b"
        size={1.2}
        speed={0.4}
        opacity={0.4}
      />

      {/* Netflix Documentary Intro */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title with dramatic reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-20"
          >
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
              style={{
                background: 'linear-gradient(45deg, #ffffff, #cccccc, #ffffff)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
            >
              THE STORY
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
            />
          </motion.div>

          {/* Text Generate Effect - Compelling Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl mx-auto text-center"
          >
            <TextGenerateEffect
              words="I didn’t start HackInversion to be just another agency.
I started it because founders were getting wrecked — by bloated quotes, missed deadlines, and devs who ghost mid-project.

India doesn’t need more agencies. It needs executors.
Hackers. Builders. People who turn vision into working product — fast.

We ship MVPs in 30 days, not 6 months.
We think like cofounders, not consultants.
We launch. We iterate. We don’t stop until your product is live and making money.

This isn’t just about clean code.
It’s about flipping the script for every founder who’s ever heard,
“That’ll take forever.”
“That’s not possible.”

Welcome to HackInversion —
Where speed meets execution.
And ideas become internet-breaking products.

"
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide text-white"
              duration={0.8}
              filter={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="relative py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-400">
              Our proven approach to MVP development
            </p>
          </motion.div>
          
          <BentoGridThirdDemo />
        </div>
      </section>

      {/* Impact Section - Cinematic */}
      <section className="relative py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-12 tracking-tight text-center"
              style={{
                background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Impact So Far
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: "💼", text: "15+ clients served", delay: 0.6 },
                { icon: "🚀", text: "MVPs delivered in under 10 days", delay: 0.8 },
                { icon: "🌍", text: "International reach & global founders", delay: 1.0 },
                { icon: "🧠", text: "Every project treated like our own startup", delay: 1.2 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-lg text-gray-300 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 tracking-tight text-center"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #cccccc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The Journey
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 to-white/5" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-2">{item.year}</div>
                    <div className="text-xl font-semibold text-gray-300 mb-3">{item.title}</div>
                    <div className="text-gray-400">{item.description}</div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-4 h-4 bg-white rounded-full border-4 border-black" />
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Founder Section */}
      <section className="relative py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-16 tracking-tight text-center"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #cccccc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet The Founder
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                
                {/* Clean photo container */}
                <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
                  
                  {/* Photo with minimal frame */}
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-500 p-1 shadow-lg">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img 
                        src="/Abhishek.jpg" 
                        alt="Abhishek - Founder of HackInversion"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Simple corner accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-cyan-400 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full" />
                </div>
              </div>
            </motion.div>
            
            {/* Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Abhishek
                </h3>
                <p className="text-xl text-cyan-400 font-semibold mb-4">
                  Tech Founder & Full-Stack Developer
                </p>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  From coding in coffee shops to building MVPs that raise millions, I've lived the founder's journey. 
                  Every line of code I write comes from a place of understanding what it takes to build, launch, and scale.
                </p>
                <p>
                  I don't just build software—I build companies. With 50+ successful MVPs under my belt, I've learned 
                  that speed, quality, and founder empathy are the holy trinity of successful product development.
                </p>
                <p>
                  When I'm not coding, you'll find me mentoring other founders, exploring new technologies, or 
                  planning the next big thing. Because in this world, the best founders are the ones who never stop building.
                </p>
              </div>
              
                             {/* Social Links */}
               <div className="flex flex-wrap gap-4 pt-4">
                 <motion.a
                   href="https://www.linkedin.com/in/abhishek-patil-38032b1b4/"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                   LinkedIn
                 </motion.a>
                 
                 <motion.a
                   href="https://www.instagram.com/abhishek.patil_/"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 12.435c-2.026 0-3.744-.875-5.076-2.207C2.207 15.103 1.332 13.385 1.332 11.359s.875-3.744 2.207-5.076C4.871 4.951 6.589 4.076 8.615 4.076s3.744.875 5.076 2.207c1.332 1.332 2.207 3.05 2.207 5.076s-.875 3.744-2.207 5.076c-1.332 1.332-3.05 2.207-5.076 2.207z"/>
                   </svg>
                   Instagram
                 </motion.a>
               </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">MVPs Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">30</div>
                  <div className="text-sm text-gray-400">Days Avg</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-32 px-6 md:px-20 text-center"
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #cccccc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Want me to be your tech cofounder?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-400 mb-12"
          >
            {/* DM "BUILD" or visit{' '}
            <Link 
              to="/contact" 
              className="text-cyan-400 underline hover:text-cyan-300 transition-colors duration-300"
            >
              hackinversion.com
            </Link> */}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 py-4 px-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Building</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom CSS for shimmer effect */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </main>
  );
} 