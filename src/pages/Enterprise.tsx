import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  StarIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  TrophyIcon,
  PhoneIcon,
  VideoCameraIcon
} from '@heroicons/react/24/solid';


// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(79,70,229,0.04),transparent_70%)]" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 text-sm font-medium text-gray-300 mb-12 shadow-2xl shadow-black/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
            </motion.div>
            <span className="tracking-wide">Enterprise-Grade Development Partnership</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white leading-tight font-inter"
        >
          Your Tech Team.
          <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent mt-4 font-light italic">
            No Hiring Required.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto mb-16 leading-relaxed font-light"
        >
          We design, build, and ship your MVP — from idea to launch. 
          <span className="text-blue-300 font-medium"> No recruitment headaches, no equity dilution</span>, 
          just world-class execution by senior engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center z-10"
        >
                     <Link
             to="/contact"
             className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-3">
              <RocketLaunchIcon className="w-6 h-6" />
              Start Your Enterprise Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

                     <Link
             to="/contact"
             className="group inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
          >
            <CalendarDaysIcon className="w-6 h-6" />
            Contact Us
          </Link>
        </motion.div>


      </div>
    </section>
  );
}

// What You Get Section
function WhatYouGetSection() {
  const offerings = [
    {
      icon: <CodeBracketIcon className="w-10 h-10" />,
      title: "Full-Stack Development",
      description: "Complete web & mobile applications built with modern frameworks, scalable architecture, and industry best practices.",
      highlight: "React, Next.js, TypeScript"
    },
    {
      icon: <CpuChipIcon className="w-10 h-10" />,
      title: "Admin Panels & Dashboards",
      description: "Custom control panels with real-time analytics, data visualization, and comprehensive management interfaces.",
      highlight: "Real-time Analytics"
    },
    {
      icon: <CloudIcon className="w-10 h-10" />,
      title: "API Architecture & Integrations",
      description: "Scalable backend systems with RESTful APIs, third-party integrations, and robust database architecture.",
      highlight: "Enterprise APIs"
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Authentication & Security",
      description: "Enterprise-grade user management, role-based access control, and comprehensive security implementations.",
      highlight: "Enterprise Security"
    },
    {
      icon: <BoltIcon className="w-10 h-10" />,
      title: "Payments & Subscriptions",
      description: "Complete billing systems with Stripe integration, subscription management, and automated invoicing.",
      highlight: "Automated Billing"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-10 h-10" />,
      title: "Collaborative Workflow",
      description: "Seamless team integration with Slack, comprehensive Notion documentation, and weekly progress demos.",
      highlight: "Weekly Demos"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 text-sm font-medium text-blue-300 mb-8">
            <SparklesIcon className="w-4 h-4" />
            <span>What You Get</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-inter">
            Everything You Need
            <span className="block text-2xl md:text-4xl lg:text-5xl text-blue-400 font-light mt-2">
              To Launch & Scale
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            A dedicated team of senior engineers delivering production-ready solutions 
            with enterprise-grade quality and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700 blur-xl" />
              
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-10 h-full group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/20">
                  <div className="text-white">
                    {offering.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-500/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {offering.highlight}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight font-inter">
                    {offering.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-lg font-light">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Enterprise Section
function WhyEnterpriseSection() {
  const reasons = [
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "50+ enterprise clients, 99.9% uptime, zero security breaches",
      stat: "50+"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "24/7 Critical Support",
      description: "Round-the-clock monitoring and instant response for mission-critical issues",
      stat: "24/7"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Dedicated Teams",
      description: "Senior engineers exclusively assigned to your project with domain expertise",
      stat: "100%"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "ROI Guaranteed",
      description: "Average 300% ROI within 12 months or money-back guarantee",
      stat: "300%"
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3 text-sm font-medium text-yellow-300 mb-8">
            <TrophyIcon className="w-4 h-4" />
            <span>Why Choose Enterprise</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-inter">
            Enterprise-Grade
            <span className="block text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-light mt-2">
              Means Business
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 text-center group-hover:border-yellow-500/30 transition-all duration-500">
                <div className="text-6xl font-bold text-yellow-400 mb-4">{reason.stat}</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-3">
              <PhoneIcon className="w-6 h-6" />
              Contact Us
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Build Process Section
function BuildProcessSection() {
  const processSteps = [
    {
      week: "Week 1",
      title: "Discovery & Strategy",
      description: "Comprehensive analysis of your vision, market research, technical architecture planning, and detailed project roadmap with milestone definitions.",
      color: "from-blue-500 to-cyan-500",
      features: ["Vision Analysis", "Market Research", "Architecture Planning", "Roadmap Creation"]
    },
    {
      week: "Week 2",
      title: "Design & Frontend",
      description: "Custom UI/UX design system creation, responsive frontend development, interactive prototypes, and user experience optimization.",
      color: "from-cyan-500 to-indigo-500",
      features: ["UI/UX Design", "Responsive Frontend", "Interactive Prototypes", "UX Optimization"]
    },
    {
      week: "Week 3-4",
      title: "Backend & Integration",
      description: "Scalable database architecture, RESTful API development, third-party service integrations, and comprehensive admin panel creation.",
      color: "from-indigo-500 to-purple-500",
      features: ["Database Design", "API Development", "Integrations", "Admin Panel"]
    },
    {
      week: "Week 5+",
      title: "Launch & Optimization",
      description: "Comprehensive testing protocols, production deployment, performance optimization, launch strategy execution, and ongoing support setup.",
      color: "from-purple-500 to-pink-500",
      features: ["Testing & QA", "Production Deployment", "Performance Optimization", "Launch Support"]
    }
  ];

  return (
    <section className="py-40 px-6 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-full px-6 py-3 text-sm font-medium text-indigo-300 mb-8">
            <ClockIcon className="w-4 h-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight font-inter">
            From Concept
            <span className="block text-4xl md:text-6xl lg:text-7xl text-indigo-400 font-light mt-4">
              To Launch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Our proven methodology ensures quality delivery on time, 
            with complete transparency and regular communication throughout.
          </p>
        </motion.div>

        <div className="space-y-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.week}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div>
                  <div className={`inline-block bg-gradient-to-r ${step.color} text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl`}>
                    {step.week}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight font-inter">
                    {step.title}
                  </h3>
                  <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                    {step.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className={`w-full h-96 rounded-3xl bg-gradient-to-br ${step.color} opacity-10 blur-xl`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-4xl font-black text-black">{index + 1}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Stories Section
function SuccessStoriesSection() {
  const stories = [
    {
      company: "FinTech Startup → $50M Valuation",
      challenge: "Needed secure, scalable platform for 100K+ users",
      solution: "Built enterprise-grade fintech platform with real-time transactions",
      result: "Achieved $50M valuation in 18 months, processing $10M+ monthly",
      metric: "$50M",
      icon: <CurrencyDollarIcon className="w-8 h-8" />
    },
    {
      company: "Healthcare Platform → 500K Users",
      challenge: "HIPAA compliance + real-time patient data management",
      solution: "Developed compliant healthcare platform with advanced security",
      result: "Onboarded 500K+ patients, 99.99% uptime, zero compliance issues",
      metric: "500K+",
      icon: <ShieldCheckIcon className="w-8 h-8" />
    },
    {
      company: "E-commerce → 10x Revenue Growth",
      challenge: "Legacy system couldn't handle scaling demand",
      solution: "Rebuilt platform with microservices architecture",
      result: "10x revenue growth, 5x faster page loads, 50% more conversions",
      metric: "10x",
      icon: <ChartBarIcon className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3 text-sm font-medium text-green-300 mb-8">
            <StarIcon className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-inter">
            Real Results,
            <span className="block text-2xl md:text-4xl lg:text-5xl text-green-400 font-light mt-2">
              Real Impact
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 h-full group-hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {story.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">{story.metric}</div>
                    <div className="text-sm text-slate-400">Growth</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{story.company}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-red-400 font-semibold">Challenge: </span>
                    <span className="text-slate-300">{story.challenge}</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">Solution: </span>
                    <span className="text-slate-300">{story.solution}</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">Result: </span>
                    <span className="text-slate-300">{story.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all transform hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-3">
              <TrophyIcon className="w-6 h-6" />
              See Your Success Story
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Security & Compliance Section
function SecurityComplianceSection() {
  const features = [
    {
      icon: <LockClosedIcon className="w-8 h-8" />,
      title: "Enterprise Security",
      items: ["SOC 2 Type II Compliant", "End-to-end encryption", "Multi-factor authentication", "Regular security audits"]
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: "Compliance Standards",
      items: ["GDPR & CCPA Ready", "HIPAA Compliant", "PCI DSS Level 1", "ISO 27001 Certified"]
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Global Infrastructure",
      items: ["99.99% SLA guarantee", "Global CDN deployment", "Auto-scaling architecture", "Disaster recovery"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-3 text-sm font-medium text-red-300 mb-8">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Security & Compliance</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-inter">
            Bank-Level
            <span className="block text-2xl md:text-4xl lg:text-5xl text-red-400 font-light mt-2">
              Security Standards
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Your data and your users' data deserve the highest level of protection. 
            We implement enterprise-grade security from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-10 h-full group-hover:border-red-500/30 transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-red-500/20">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                
                <div className="space-y-3">
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-red-500/25 transition-all transform hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-3">
              <DocumentCheckIcon className="w-6 h-6" />
              Get Security Assessment
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Dedicated Team Section
function DedicatedTeamSection() {
  const teamBenefits = [
    {
      title: "Senior Engineers Only",
      description: "No junior developers. Your team consists of senior engineers with 8+ years experience.",
      icon: <UserGroupIcon className="w-6 h-6" />
    },
    {
      title: "Direct Communication",
      description: "Slack workspace, weekly video calls, and direct access to your development team.",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
    },
    {
      title: "Flexible Scaling",
      description: "Scale your team up or down based on project phases and requirements.",
      icon: <BoltIcon className="w-6 h-6" />
    },
    {
      title: "Dedicated Project Manager",
      description: "Experienced PM to coordinate timelines, deliverables, and stakeholder communication.",
      icon: <CalendarDaysIcon className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 text-sm font-medium text-purple-300 mb-8">
              <UserGroupIcon className="w-4 h-4" />
              <span>Your Dedicated Team</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight font-inter">
              Not Freelancers.
              <span className="block text-2xl md:text-3xl lg:text-4xl text-purple-400 font-light mt-2">
                Your Team.
              </span>
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Get a dedicated team of senior engineers who understand your business, 
              work in your timezone, and become an extension of your company.
            </p>

            <div className="space-y-6 mb-12">
              {teamBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-2xl backdrop-blur-sm border border-slate-700/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg text-base hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  <VideoCameraIcon className="w-5 h-5" />
                  Meet Your Team
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
              >
                <CalendarDaysIcon className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-400 mb-4">3-5</div>
                <div className="text-xl text-white font-semibold mb-2">Senior Engineers</div>
                <div className="text-slate-400">Dedicated to your project</div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Tech Stack Section
function TechStackSection() {
  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      techs: ["Node.js", "Express", "Python", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      color: "from-purple-500 to-indigo-500",
      techs: ["AWS", "Docker", "Vercel", "CI/CD"]
    },
    {
      category: "Integrations",
      color: "from-orange-500 to-red-500",
      techs: ["Stripe", "Clerk", "Supabase", "MongoDB"]
    }
  ];

  return (
    <section className="py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm font-medium text-emerald-300 mb-8">
            <CpuChipIcon className="w-4 h-4" />
            <span>Technology Stack</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight font-inter">
            Enterprise-Grade
            <span className="block text-4xl md:text-6xl lg:text-7xl text-emerald-400 font-light mt-4">
              Technology
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            We use cutting-edge technologies that scale with your business growth 
            and ensure long-term maintainability and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 h-full group-hover:border-blue-500/30 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-xl`}>
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 font-inter">{category.category}</h3>
                
                <div className="space-y-3">
                  {category.techs.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-slate-300 font-medium">{tech}</span>
                    </motion.div>
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

// Testimonial Section
function TestimonialSection() {
  const testimonials = [
    {
      quote: "HackInversion delivered our enterprise platform in 6 weeks. The quality exceeded our expectations, and their team felt like an extension of our company.",
      author: "Sarah Chen",
      role: "CTO, TechFlow",
      rating: 5
    },
    {
      quote: "From MVP to Series A funding in 4 months. Their technical expertise and product thinking made all the difference in our success.",
      author: "Marcus Rodriguez",
      role: "Founder, DataVault",
      rating: 5
    }
  ];

  return (
    <section className="py-40 px-6 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3 text-sm font-medium text-yellow-300 mb-8">
            <StarIcon className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-700" />
                <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-12 group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="text-6xl text-blue-400 mb-6 opacity-50">"</div>
                  <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-8">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl" />
                    <div>
                      <div className="text-white font-bold text-lg font-inter">{testimonial.author}</div>
                      <div className="text-blue-400 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enterprise Investment Section
function EnterpriseInvestmentSection() {
  const investmentOptions = [
    {
      type: "Project-Based",
      range: "$50K - $200K",
      description: "Fixed-scope projects with defined deliverables and timelines",
      features: [
        "Detailed project specification",
        "Fixed timeline & budget",
        "Milestone-based payments",
        "Post-launch support included"
      ],
      bestFor: "Well-defined projects with clear requirements",
      icon: <DocumentCheckIcon className="w-8 h-8" />
    },
    {
      type: "Dedicated Team",
      range: "$25K - $50K/month",
      description: "Monthly retainer for ongoing development with dedicated engineers",
      features: [
        "3-5 senior engineers",
        "Direct team communication",
        "Flexible scope adjustments",
        "Priority support & maintenance"
      ],
      bestFor: "Ongoing development and scaling needs",
      icon: <UserGroupIcon className="w-8 h-8" />
    },
    {
      type: "Enterprise Partnership",
      range: "Custom Quote",
      description: "Strategic partnership for complex, multi-phase enterprise initiatives",
      features: [
        "Executive-level partnership",
        "Multiple development teams",
        "24/7 premium support",
        "Custom SLA & guarantees"
      ],
      bestFor: "Large-scale digital transformation",
      icon: <TrophyIcon className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 text-sm font-medium text-blue-300 mb-8">
            <CurrencyDollarIcon className="w-4 h-4" />
            <span>Enterprise Investment</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight font-inter">
            Transparent Pricing,
            <span className="block text-2xl md:text-4xl lg:text-5xl text-blue-400 font-light mt-2">
              Exceptional Value
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Enterprise-grade development doesn't have to break the bank. Our transparent pricing 
            ensures you get maximum value for your investment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {investmentOptions.map((option, index) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-10 h-full group-hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {option.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{option.type}</h3>
                    <div className="text-2xl font-bold text-blue-400">{option.range}</div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">{option.description}</p>
                
                <div className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700/50 pt-6">
                  <div className="text-sm text-slate-400 mb-2">Best for:</div>
                  <div className="text-white font-medium">{option.bestFor}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
                     className="text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20 mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Why Our Pricing is Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-slate-300">Faster than hiring in-house</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-slate-300">Less than US agencies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">0%</div>
              <div className="text-slate-300">Hidden fees or surprises</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-slate-300">Transparent communication</div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all transform hover:scale-105"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-3">
                <CurrencyDollarIcon className="w-6 h-6" />
                Get Custom Quote
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
            >
              <PhoneIcon className="w-6 h-6" />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="relative py-40 px-6 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06),transparent_70%)]" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-16 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 text-sm font-medium text-blue-300 mb-8">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>Ready to Build?</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight font-inter">
                Let's Talk About
                <span className="block text-4xl md:text-6xl lg:text-7xl text-blue-400 font-light mt-4">
                  Your Vision
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
                Tell us about your project. We'll explore your vision, 
                discuss technical requirements, and create a custom roadmap for your success.
              </p>

              <Link
                to="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-16 py-8 rounded-2xl text-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all transform hover:scale-105 border border-blue-500/20"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative z-10 flex items-center gap-4">
                  <RocketLaunchIcon className="w-8 h-8" />
                  Contact Us
                  <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-12 mt-16 text-slate-400">
                <div className="flex items-center gap-3">
                  <LockClosedIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">NDA Protected</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Confidential</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">No Commitment</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserGroupIcon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Senior Engineers</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Enterprise() {
  return (
    <div className="min-h-screen text-white font-inter relative overflow-hidden">
      
      
      <HeroSection />
      <WhatYouGetSection />
      <WhyEnterpriseSection />
      <BuildProcessSection />
      <SuccessStoriesSection />
      <SecurityComplianceSection />
      <DedicatedTeamSection />
      <TechStackSection />
      <TestimonialSection />
      <EnterpriseInvestmentSection />
      <FinalCTASection />
    </div>
  );
} 