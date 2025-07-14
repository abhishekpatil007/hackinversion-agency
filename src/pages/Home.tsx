import { Link } from "react-router-dom";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  BoltIcon, 
  CheckCircleIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';
import AnimatedBackground from '../components/layout/AnimatedBackground';

// Updated services with modern approach
const coreFeatures = [
  {
    icon: <RocketLaunchIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "MVP in 30 Days",
    description: "From concept to live product in weeks, not months. We build fast, test faster, and iterate based on real user feedback.",
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <CodeBracketIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Modern Tech Stack",
    description: "React, Next.js, TypeScript, and cutting-edge tools. Built for performance, scalability, and future growth.",
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Product Thinking",
    description: "We don't just code features. We think like product managers, asking the right questions to build what users actually want.",
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: <BoltIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Full-Stack Delivery",
    description: "Frontend, backend, database, deployment, and ongoing support. One team, complete solution, zero hassle.",
    gradient: 'from-orange-500 to-red-500'
  }
];

const buildTypes = [
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'Mobile Apps',
    description: 'Native iOS & Android apps with React Native. Cross-platform efficiency with native performance.',
    tech: ['React Native', 'Expo', 'iOS', 'Android'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: <CodeBracketIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'Web Applications',
    description: 'Responsive, fast, and scalable web apps built with modern frameworks and best practices.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <CloudIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'SaaS Platforms',
    description: 'Complete SaaS solutions with authentication, billing, analytics, and multi-tenant architecture.',
    tech: ['Authentication', 'Payments', 'Analytics', 'Multi-tenant'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'Analytics Dashboards',
    description: 'Data-rich dashboards with real-time updates, interactive charts, and actionable insights.',
    tech: ['Data Viz', 'Real-time', 'Charts', 'Reports'],
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'E-Commerce',
    description: 'Full-featured online stores with payment processing, inventory management, and order tracking.',
    tech: ['Payments', 'Inventory', 'Orders', 'Shipping'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <UserGroupIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    title: 'Internal Tools',
    description: 'Custom business tools and admin panels to streamline operations and boost productivity.',
    tech: ['Admin Panels', 'Workflows', 'Automation', 'Integration'],
    gradient: 'from-teal-500 to-blue-500'
  }
];

const successMetrics = [
  { number: '50+', label: 'MVPs Launched', icon: <RocketLaunchIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: '30', label: 'Days Average', icon: <BoltIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: '4.9', label: 'Client Rating', icon: <StarIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: '95%', label: 'Success Rate', icon: <TrophyIcon className="w-5 h-5 sm:w-6 sm:h-6" /> }
];

function HeroAnimatedBG() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full flex items-center justify-center pointer-events-none">
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-700/60 via-purple-600/40 to-transparent animate-gradient">
        <Canvas camera={{ position: [0, 0, 4] }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <Stars radius={30} depth={40} count={180} factor={1.2} saturation={1} fade speed={1.5} />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
            <Sphere args={[1.5, 64, 64]} scale={2.2} position={[0, 0, 0]}>
              <MeshDistortMaterial
                color="#a78bfa"
                attach="material"
                distort={0.55}
                speed={2.2}
                transparent
                opacity={0.95}
                emissive="#a78bfa"
                emissiveIntensity={0.7}
              />
            </Sphere>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>
    </div>
  );
}

// Core Features Section
function CoreFeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="font-medium">Why Choose HACKINVERSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Built for Speed, Designed for Scale
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We're not just developers. We're your technical co-founders who understand product, users, and market dynamics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 h-full text-center group-hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Metrics Section
function SuccessMetricsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Proven Results That Matter
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Numbers don't lie. We deliver results that help founders succeed.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {successMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{metric.number}</div>
              <div className="text-sm sm:text-base text-neutral-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// What We Build Section
function WhatWeBuildSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            What We Build
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            From mobile apps to enterprise platforms, we build digital products that users love and businesses depend on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {buildTypes.map((build, index) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${build.gradient} opacity-5 rounded-2xl sm:rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full group-hover:border-white/20 transition-all duration-500">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${build.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {build.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{build.title}</h3>
                <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">{build.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {build.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ready to Build Section
function ReadyToBuildSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8">
            <RocketLaunchIcon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="font-medium">Ready to Ship?</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Turn Your Idea Into Reality
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-neutral-300 mb-8 sm:mb-12 leading-relaxed"
        >
          Book a free 30-minute strategy call. We'll discuss your vision, understand your goals, and create a roadmap to bring your product to market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-base sm:text-lg"
          >
            Start Your Project <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            to="/enterprise"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-teal-500/25 text-base sm:text-lg"
          >
            Enterprise Solutions
          </Link>
          <Link
            to="/our-work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-base sm:text-lg"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-green-400" />
            <span>Custom roadmap included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter relative">
      <AnimatedBackground variant="default" intensity="medium" />
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <HeroAnimatedBG />
        <motion.span
          className="badge mb-4 sm:mb-6 font-satoshi z-10 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          ✨ Slot's Available for July 
        </motion.span>
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 leading-tight z-10 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-inter-tight italic block">Hackinverson</span>
          <span className="font-wdxl text-2xl sm:text-4xl lg:text-6xl xl:text-8xl block mt-2">Your First Technical Cofounder</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-inter z-10 max-w-3xl leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Your idea. Our code. The market's attention—yours first. <br className="hidden sm:block" />
          While they're still wireframing, your MVP is live. We build fast. You grow faster.
        </motion.p>
        <motion.div
          className="z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link to="/contact" className="btn inline-flex items-center gap-2 font-satoshi text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Book a Call <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </section>

      {/* NEW REDESIGNED SECTIONS BELOW */}
      <CoreFeaturesSection />
      <SuccessMetricsSection />
      <WhatWeBuildSection />
      <ReadyToBuildSection />
    </div>
  );
} 