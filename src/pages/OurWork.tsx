import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

import { Sparkles } from '../components/ui/sparkles';









// Browser mockup component
function BrowserMockup({ children, index }: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group flex-shrink-0 w-[900px] h-[600px]"
    >
      <motion.div
        className="w-full h-full bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Browser Chrome */}
        <div className="h-10 bg-neutral-800 flex items-center px-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 bg-neutral-700 rounded-md flex items-center px-3">
              <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
              <div className="h-1 bg-white/30 rounded flex-1"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-neutral-700 rounded"></div>
            <div className="w-6 h-6 bg-neutral-700 rounded"></div>
          </div>
        </div>

        {/* Website Content */}
        <div className="h-[calc(100%-40px)] relative overflow-hidden">
          {children}
      </div>
      </motion.div>
    </motion.div>
  );
}

// Mini Landing Pages with Amazing Animations
function BrandAILanding() {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

  return (
    <div 
      className="p-0 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 h-full relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({ 
          x: ((e.clientX - rect.left) / rect.width) * 100, 
          y: ((e.clientY - rect.top) / rect.height) * 100 
        });
      }}
    >
      {/* Dynamic background */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(168, 85, 247, 0.4) 0%, transparent 70%)`
        }}
      />

      {/* Floating AI Icons */}
      <div className="absolute inset-0">
        {['🤖', '✨', '🎨', '💡', '🚀'].map((icon, i) => (
                <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {icon}
                </motion.div>
              ))}
        </div>
        
      {/* Main Landing Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
        {/* Logo Animation */}
              <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mb-4"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl mb-2 mx-auto"
          >
            🤖
              </motion.div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl font-bold text-white mb-2 tracking-tight"
        >
          BrandAI
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm text-purple-200 mb-6 max-w-xs leading-relaxed"
        >
          Create stunning social media content with AI. Generate posts, captions, and visuals in seconds.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg"
        >
          Generate Content
        </motion.button>

        {/* Feature Pills */}
              <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-2 mt-6 flex-wrap justify-center"
        >
          {['AI-Powered', 'Instant Results', 'Multi-Platform'].map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1, type: "spring", bounce: 0.5 }}
              className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
            >
              {feature}
            </motion.span>
          ))}
              </motion.div>

        {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-purple-300"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-bold text-white"
            >
              50K+
            </motion.div>
            <div>Posts Generated</div>
                </div>
          <div className="text-center">
                    <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="font-bold text-white"
            >
              98%
            </motion.div>
            <div>Accuracy</div>
                      </div>
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="font-bold text-white"
            >
              2s
                    </motion.div>
            <div>Avg Time</div>
                </div>
              </motion.div>
      </div>
    </div>
  );
}

function MedConnectLanding() {
  const [floatingElements, setFloatingElements] = React.useState(
    Array.from({length: 6}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: ['🏥', '👨‍⚕️', '💊', '🩺', '❤️', '📋'][i]
    }))
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements(prev => prev.map(el => ({
        ...el,
        x: (el.x + 1) % 100,
        y: (el.y + 0.5) % 100
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 h-full relative overflow-hidden">
      {/* Floating Medical Icons */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-xl opacity-20"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + element.id,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {element.icon}
          </motion.div>
        ))}
            </div>

      {/* Heartbeat Line */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-emerald-400/30">
        <motion.div
          className="h-full bg-emerald-400"
          animate={{
            scaleX: [0, 1, 0],
            x: ['-100%', '100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
          </div>

      {/* Main Landing Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
        {/* Medical Cross Logo */}
            <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-4"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.3)",
                "0 0 40px rgba(16, 185, 129, 0.6)",
                "0 0 20px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-3xl mb-2 mx-auto relative"
            >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🏥
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl font-bold text-white mb-2 tracking-tight"
        >
          MedConnect
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm text-emerald-200 mb-6 max-w-xs leading-relaxed"
        >
          Connect with trusted doctors instantly. Get medical consultations, prescriptions, and health advice 24/7.
        </motion.p>

        {/* Action Buttons */}
            <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex gap-3 mb-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg"
          >
            Find Doctor
          </motion.button>
          <motion.button
              whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-semibold text-sm border border-white/20"
            >
            Emergency
          </motion.button>
            </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 w-full max-w-xs"
        >
          {[
            { value: '1000+', label: 'Doctors' },
            { value: '24/7', label: 'Available' },
            { value: '5⭐', label: 'Rating' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1, type: "spring", bounce: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="text-lg font-bold text-white"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-emerald-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pulse Animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-4 h-4 rounded-full bg-emerald-400/50" />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 text-xs text-emerald-300"
            >
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>HIPAA Compliant</span>
              </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Doctors</span>
              </div>
            </motion.div>
        </div>
            </div>
  );
}

function DarkPortfolioUI() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });


  const projects = [
    { 
      title: "Axiom Studios", 
      category: "Brand Identity", 
      year: "2024",
      color: "from-purple-500/20 to-pink-500/20",
      accent: "#a855f7"
    },
    { 
      title: "Lunar Interface", 
      category: "UI/UX Design", 
      year: "2024",
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "#3b82f6"
    },
    { 
      title: "Nexus Platform", 
      category: "Web Experience", 
      year: "2023",
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "#10b981"
    },
    { 
      title: "Quantum Labs", 
      category: "Creative Direction", 
      year: "2023",
      color: "from-orange-500/20 to-red-500/20",
      accent: "#f97316"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="h-full bg-black relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient that follows mouse */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />

        {/* Floating particles */}
        {Array.from({length: 20}).map((_, i) => (
              <motion.div
                key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
              />
            ))}
        </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="flex items-center justify-between">
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px rgba(255,255,255,0.1)", "0 0 40px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.1)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <span className="text-white text-2xl font-extralight tracking-[0.3em] font-mono">ALEX CHEN</span>
            </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-12 text-sm text-neutral-500"
          >
            {['WORK', 'STUDIO', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ 
                  color: '#ffffff',
                  y: -2
                }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-px bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
          ))}
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-full flex items-center px-16">
        <div className="max-w-7xl w-full grid grid-cols-12 gap-16 items-center">
          {/* Left Side - Text */}
          <div className="col-span-6">
        <motion.div 
              initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
        >
              <div className="mb-8">
                <motion.p 
                  className="text-neutral-400 text-xs mb-6 tracking-[0.2em] font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  CREATIVE DIRECTOR & DIGITAL ARTIST
                </motion.p>
                
                <motion.h1 
                  className="text-7xl font-extralight text-white mb-8 leading-[0.9]"
                  initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Crafting
                  <br />
                  <span className="italic font-light bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                  <br />
                  <span className="text-4xl text-neutral-600">that Matter</span>
                </motion.h1>
              </div>

              <motion.p 
                className="text-neutral-300 text-lg leading-relaxed mb-12 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Where minimalism meets innovation. I create digital experiences that transcend 
                the ordinary through purposeful design and meticulous attention to detail.
              </motion.p>
        
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex items-center gap-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden border border-white/30 text-white px-10 py-4 text-sm tracking-wide transition-all duration-300"

                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    VIEW PORTFOLIO
                  </span>
                </motion.button>

                <motion.div 
                  className="flex items-center gap-3 text-neutral-500 text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-px bg-neutral-500" />
                  <span>2024 COLLECTION</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Project Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-20"
            >
              <div className="space-y-6">
                <h3 className="text-neutral-500 text-xs tracking-[0.2em] font-mono mb-8">SELECTED WORKS</h3>
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }}
                    className={`group cursor-pointer transition-all duration-500 ${
                      currentProject === i ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'
                    }`}
                    onClick={() => setCurrentProject(i)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center justify-between py-4 border-b border-neutral-800/50">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: currentProject === i ? project.accent : '#404040' }}
                          animate={{ 
                            scale: currentProject === i ? [1, 1.5, 1] : 1,
                            opacity: currentProject === i ? [1, 0.7, 1] : 0.5
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div>
                          <span className="text-base font-light">{project.title}</span>
                          <div className="text-xs text-neutral-500 mt-1">{project.category}</div>
              </div>
                      </div>
                      <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
                    </div>
                    
                    {currentProject === i && (
                      <motion.div
                        layoutId="activeProjectLine"
                        className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-1"
                        style={{ 
                          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`
                        }}
                      />
                    )}
            </motion.div>
          ))}
              </div>
            </motion.div>
        </div>

          {/* Right Side - Enhanced Visual */}
          <div className="col-span-6 relative">
        <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Showcase */}
              <div className="relative">
                <motion.div
                  className="aspect-[3/4] bg-gradient-to-br from-neutral-900 to-black relative overflow-hidden rounded-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${projects[currentProject].color.split(' ')[1]} 0%, black 100%)`
                  }}
                  key={currentProject}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Project Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
        >
                      <motion.div
                        className="w-24 h-24 border border-white/20 rounded-full mb-8 mx-auto flex items-center justify-center relative"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-full"
                          style={{ backgroundColor: projects[currentProject].accent }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="absolute inset-0 border-t border-white/30 rounded-full" />
                      </motion.div>
                      
                      <motion.h4 
                        className="text-white text-xl font-light mb-2"
                        key={projects[currentProject].title}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        {projects[currentProject].title}
                      </motion.h4>
                      <p className="text-neutral-400 text-sm">{projects[currentProject].category}</p>
                    </motion.div>
            </div>

                  {/* Animated Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '60px 60px'
                    }}
                  />
                </motion.div>

                {/* Floating Geometric Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-32 h-32 border border-white/10 rounded-full"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                />
                <motion.div
                  className="absolute -bottom-12 -left-12 w-24 h-24 border border-white/5"
                  animate={{ 
                    rotate: -360,
                    y: [-5, 5, -5]
                  }}
                  transition={{ 
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity }
                  }}
                />
                <motion.div
                  className="absolute top-1/4 -left-4 w-3 h-3 bg-white/20 rounded-full"
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="absolute bottom-8 left-16 right-16">
        <motion.div 
          className="flex items-center justify-between text-xs text-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex items-center gap-8">
            <span className="font-mono">© 2024 ALEX CHEN STUDIO</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-500">AVAILABLE FOR PROJECTS</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-white">
            {[
              { name: 'INSTAGRAM', handle: '@alexchen.design' },
              { name: 'DRIBBBLE', handle: 'alexchen' },
              { name: 'BEHANCE', handle: 'alexchenstudio' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                className="group flex items-center gap-2"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="group-hover:text-white transition-colors">{social.name}</span>
                <span className="text-neutral-800 text-[10px]">{social.handle}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MinimalStudioLanding() {
  const [currentWord, setCurrentWord] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });


  const words = ["Beautiful", "Minimal", "Thoughtful", "Timeless"];
  const services = [
    { number: "01", title: "Brand Identity", desc: "Visual systems that define your essence" },
    { number: "02", title: "Digital Experience", desc: "Interfaces that feel intuitive and alive" },
    { number: "03", title: "Creative Direction", desc: "Strategies that shape lasting impressions" }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="h-full bg-white relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Mouse-following subtle gradient */}
        <div 
          className="absolute inset-0 opacity-[0.02] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #000000 0%, transparent 50%)`
          }}
        />

        {/* Minimal floating elements */}
        {Array.from({length: 8}).map((_, i) => (
              <motion.div
                key={i}
            className="absolute w-1 h-1 bg-black/5 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
              />
            ))}

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        </div>
        
      {/* Navigation */}
      <nav className="relative z-10 p-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
                <motion.div
              className="w-2 h-2 bg-black rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="text-black font-light text-xl tracking-wider">STUDIO MARE</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-12"
          >
            <div className="hidden md:flex gap-12 text-sm text-black/60">
              {['Work', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="relative group tracking-wide"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="group-hover:text-black transition-colors duration-300">{item}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-px bg-black"
                  initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                />
                </motion.a>
              ))}
              </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-3 text-sm tracking-wide font-light relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-black/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Project</span>
            </motion.button>
            </motion.div>
        </div>
      </nav>
        
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-8 h-[calc(100%-100px)]">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.p 
                  className="text-neutral-400 text-sm mb-8 tracking-[0.3em] font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  DESIGN STUDIO
                </motion.p>
                
                <div className="mb-8">
                  <h1 className="text-7xl font-light text-black leading-[0.9] tracking-tight">
                    We Create
                    <br />
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="italic text-black/70"
                    >
                      {words[currentWord]}
                    </motion.span>
                    <br />
                    <span className="text-5xl text-black/60">Experiences</span>
                  </h1>
            </div>

                <motion.p
                  className="text-black/60 text-lg leading-relaxed max-w-lg font-light mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  We believe in the power of simplicity. Our approach focuses on distilling 
                  complex ideas into elegant, purposeful design solutions.
                </motion.p>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex items-center gap-8"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "#000000"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group border border-black text-black px-12 py-4 text-sm tracking-wide font-light transition-all duration-300 hover:text-white"
                  >
                    View Our Work
                  </motion.button>

                  <motion.div 
                    className="flex items-center gap-3 text-black/40 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-px bg-black/20" />
                    <span className="tracking-wide">Since 2018</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="relative"
              >
                {/* Main geometric element */}
                <div className="aspect-square bg-black/5 relative">
                  <motion.div
                    className="absolute inset-8 border border-black/10"
                    animate={{ 
                      rotate: [0, 0.5, 0, -0.5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="absolute inset-8 bg-black/5"
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Floating accent */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-4 h-4 border border-black/30"
                    animate={{ 
                      rotate: [0, 45, 0],
                      y: [0, 4, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-24"
          >
            <div className="grid grid-cols-3 gap-12">
              {services.map((service, i) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.span 
                      className="text-xs text-black/30 font-mono tracking-wider"
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    >
                      {service.number}
                    </motion.span>
                    <div className="w-8 h-px bg-black/10 mt-2" />
                  </div>
                  <h3 className="text-black font-light text-lg mb-3 group-hover:text-black/70 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </motion.div>
                ))}
              </div>
          </motion.div>
            </div>
          </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-8 right-8">
        <motion.div 
          className="flex items-center justify-between text-xs text-black/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-8">
            <span className="tracking-wider">STUDIO MARE © 2024</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-600">Available for new projects</span>
        </div>
          </div>
          
          <div className="flex gap-8">
            {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="hover:text-black/60 transition-colors tracking-wider"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// NDA Note Component
function NDANote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-4xl mx-auto"
    >
      <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <LockClosedIcon className="w-4 h-4 text-neutral-400" />
          </div>
          <h3 className="text-base font-medium text-white">
            Protected Work
          </h3>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-neutral-400">
            🔐 Most of our real client work is protected under NDA.
          </p>
          <p className="text-sm text-neutral-400">
            What you see above are hand-crafted examples that reflect the level of design, code, and polish we bring to every build.
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
          <ShieldCheckIcon className="w-3 h-3" />
          <span>All client data and projects are strictly confidential</span>
        </div>
      </div>
    </motion.div>
  );
}

// CTA Section
function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-24 px-4 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
          Ready to Build Something <span className="text-indigo-400">Extraordinary</span>?
        </h2>
        <p className="text-neutral-300 text-lg mb-8 font-satoshi leading-relaxed">
          We've helped founders and teams launch successful products. From concept to deployment, 
          we handle the technical heavy lifting so you can focus on growing your business.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform text-lg w-full md:w-auto justify-center"
          >
            Start Your Project <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
                            to="/our-story"
            className="inline-flex items-center gap-2 bg-white/5 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-lg w-full md:w-auto justify-center"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

// Main Page Component
// Create a projects array for the mini mock websites
  const projects = [
  { ui: <BrandAILanding /> },
  { ui: <MedConnectLanding /> },
  { ui: <DarkPortfolioUI /> },
  { ui: <MinimalStudioLanding /> }
];

export default function OurWork() {

  return (
          <div className="min-h-screen py-16 px-4 relative">
      
      <Sparkles 
        density={400}
        className="absolute inset-0 pointer-events-none"
        color="#8b5cf6"
        size={1.5}
        speed={0.6}
        opacity={0.3}
      />
      <div className="max-w-7xl mx-auto space-y-16 mt-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Crafting Digital <span className="text-indigo-400">Excellence</span>
          </h1>
          <p className="text-neutral-300 text-lg mb-8 font-satoshi leading-relaxed">
            Explore our portfolio of handcrafted digital products. Each project represents our commitment 
            to quality, innovation, and user-centric design.
          </p>
        </motion.div>

        {/* Mobile-Responsive Portfolio Grid */}
        <div className="relative">
          {/* Mobile View - Stack vertically */}
          <div className="block lg:hidden space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="w-full">
                <BrowserMockup index={index}>
                  {project.ui}
                </BrowserMockup>
              </div>
            ))}
          </div>

          {/* Desktop View - Horizontal scroll */}
          <div className="hidden lg:block">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
              {projects.map((project, index) => (
                <div key={index} className="snap-center snap-always">
                  <BrowserMockup index={index}>
                    {project.ui}
                  </BrowserMockup>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
          
          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = document.querySelector('.scrollbar-hide');
                  if (container) {
                    container.scrollTo({
                        left: index * (900 + 24), // card width + gap
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
              />
            ))}
            </div>
          </div>
        </div>
        
        <NDANote />
        <CTASection />
      </div>
    </div>
  );
}