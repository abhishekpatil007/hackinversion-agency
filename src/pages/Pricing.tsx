import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const storyLines = [
  "I didn't start HackInversion to be an agency.",
  "I started it because founders were being f*cked.",
  "Quoted ₹1.85L for a client who thought ₹25K would cover everything.",
  "India doesn't need more agencies. It needs executors. Hackers.",
  "It needs HackInversion."
];

export default function TheStory() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6 md:px-20 font-sans">
      {/* Netflix documentary vibe intro */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-10 tracking-wide"
        >
          THE STORY
        </motion.h1>

        <div className="space-y-10">
          {storyLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed tracking-wide"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Founder Stack & Philosophy */}
      <section className="mt-32 max-w-6xl mx-auto text-left space-y-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6 border-b border-gray-700 pb-2">The Stack Behind the Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl text-gray-400">
            <div className="space-y-2">
              <p><strong className="text-white">Name:</strong> Abhishek Patil</p>
              <p><strong className="text-white">Role:</strong> Founder / Full-stack Dev</p>
              <p><strong className="text-white">Built on:</strong> Coffee, chaos, deadlines</p>
              <p><strong className="text-white">Stack:</strong> React, Next.js, Tailwind, MongoDB, Express</p>
            </div>
            <div className="space-y-2">
              <p><strong className="text-white">Side Quests:</strong> SaaS tools, LMS portals, invoice systems</p>
              <p><strong className="text-white">Engine:</strong> Pure build-mode + speed</p>
              <p><strong className="text-white">Philosophy:</strong> Launch fast, adapt faster</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6 border-b border-gray-700 pb-2">Impact So Far</h2>
          <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl space-y-2">
            <li>💼 15+ clients served</li>
            <li>🚀 MVPs delivered in under 10 days</li>
            <li>🌍 International reach & global founders</li>
            <li>🧠 Every project treated like our own startup</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want me to be your tech cofounder?</h2>
        <p className="text-xl text-gray-400 mb-8">
          DM "BUILD" or visit <Link to="/contact" className="text-cyan-400 underline">hackinversion.com</Link>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center gap-3 py-4 px-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <span>Let's Build Together</span>
          </Link>
          <Link 
            to="/our-work" 
            className="group inline-flex items-center justify-center gap-3 py-4 px-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            <span>See Our Work</span>
          </Link>
        </div>
      </motion.section>
    </main>
  );
} 