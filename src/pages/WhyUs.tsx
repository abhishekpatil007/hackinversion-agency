import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  SparklesIcon, 
  RocketLaunchIcon,
  LightBulbIcon,
  ClockIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  FireIcon,
  TrophyIcon,
  PaintBrushIcon,
  CpuChipIcon
} from '@heroicons/react/24/solid';


// Hero Section
function HeroSection() {
  return (
            <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8">
            <TrophyIcon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="font-medium">Why 50+ Founders Choose Us</span>
          </div>
        </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-tight"
        >
          Build Like a
          <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
            Technical Co-Founder
          </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          We don't just code your idea — we think like product leaders, build like senior engineers, and ship like your success depends on it. Because it does.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-base sm:text-lg"
          >
            Start Your MVP <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            to="/OurWork"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-base sm:text-lg"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// What Makes Us Different
const differentiators = [
  {
    icon: <LightBulbIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Product-First Thinking',
    description: 'We ask the hard questions: Who is this for? What problem does it solve? How will users find value?',
    features: ['User story mapping', 'Technical feasibility analysis', 'Market validation insights'],
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: <BoltIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Lightning-Fast Delivery',
    description: 'MVP in 30 days, not 6 months. We ship working software weekly, so you see progress constantly.',
    features: ['Weekly demos', 'Agile sprints', 'Continuous deployment'],
    gradient: 'from-yellow-500 to-red-500'
  },
  {
    icon: <PaintBrushIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Design That Converts',
    description: 'Pixel-perfect UI/UX that makes your MVP look like a Series A product from day one.',
    features: ['Custom design systems', 'Mobile-first approach', 'User experience optimization'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: <CpuChipIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Modern Tech Stack',
    description: 'Built with the latest technologies that scale. No legacy code, no technical debt.',
    features: ['React/Next.js frontend', 'Scalable backend', 'Cloud-native architecture'],
    gradient: 'from-blue-500 to-indigo-500'
  }
];

function WhatMakesUsDifferent() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            What Makes Us Different
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            We're not another dev shop. We're your technical co-founder for 30 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 rounded-2xl sm:rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full group-hover:border-white/20 transition-all duration-500">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-neutral-300">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Metrics
const metrics = [
  {
    icon: <RocketLaunchIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '50+',
    label: 'MVPs Launched',
    description: 'Successful products in market'
  },
  {
    icon: <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '30',
    label: 'Days Average',
    description: 'From idea to launch'
  },
  {
    icon: <StarIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '4.9',
    label: 'Client Rating',
    description: 'Average satisfaction score'
  },
  {
    icon: <ChartBarIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '95%',
    label: 'Success Rate',
    description: 'Projects launched on time'
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '15+',
    label: 'Countries',
    description: 'Global client base'
  },
  {
    icon: <FireIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: '$2M+',
    label: 'Funding Raised',
    description: 'By our MVP clients'
  }
];

function SuccessMetrics() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Results That Speak
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Numbers don't lie. Here's what we've achieved with founders like you.
          </p>
        </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
          {metrics.map((metric) => (
          <motion.div
              key={metric.label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center"
            >
              <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 group-hover:border-white/20 transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{metric.value}</div>
                <div className="text-sm sm:text-lg font-semibold text-violet-300 mb-1">{metric.label}</div>
                <div className="text-xs sm:text-sm text-neutral-400">{metric.description}</div>
              </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}

// Who We Help
const clientTypes = [
  {
    icon: <UserGroupIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Solo Founders',
    description: 'Turn your idea into a working product without hiring a full team',
    benefits: ['Technical co-founder experience', 'Product strategy included', 'Faster than hiring'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Funded Startups',
    description: 'Convert investor excitement into market-ready MVPs that drive traction',
    benefits: ['Investor-grade quality', 'Demo-ready products', 'Growth-focused features'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Enterprise Teams',
    description: 'Rapid innovation without the enterprise bureaucracy and timelines',
    benefits: ['Enterprise security standards', 'Scalable architecture', 'Integration ready'],
    gradient: 'from-purple-500 to-indigo-500'
  }
];

function WhoWeHelp() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Who We Help Win
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            From solo founders to funded startups — we help ambitious builders ship faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientTypes.map((client, index) => (
          <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-5 rounded-2xl sm:rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full text-center group-hover:border-white/20 transition-all duration-500">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {client.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{client.title}</h3>
                <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">{client.description}</p>
                
                <ul className="space-y-2 sm:space-y-3 text-left">
                  {client.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-neutral-300">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

// What You Get
const deliverables = [
  {
    category: 'Product & Strategy',
    items: [
      'User story mapping & wireframes',
      'Technical architecture planning',
      'MVP feature prioritization',
      'Go-to-market recommendations'
    ]
  },
  {
    category: 'Development & Design',
    items: [
      'Custom UI/UX design system',
      'Full-stack web or mobile app',
      'Admin dashboard & analytics',
      'Third-party integrations'
    ]
  },
  {
    category: 'Launch & Support',
    items: [
      'Production deployment setup',
      'Source code & documentation',
      '30 days of post-launch support',
      'Growth optimization insights'
    ]
  }
];

function WhatYouGet() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Everything You Need to Launch
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Not just code — a complete product ready for users, investors, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {deliverables.map((section, index) => (
      <motion.div
              key={section.category}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
              className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
      >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">{section.category}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-300">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Founders Love Working With Us
const testimonials = [
  {
    quote: "Like having a technical co-founder without giving up equity",
    author: "Sarah Chen",
    role: "Founder, HealthTech Startup",
    metric: "Raised $500K seed round"
  },
  {
    quote: "Shipped in 3 weeks what my last team took 6 months to build",
    author: "Marcus Rodriguez", 
    role: "CEO, E-commerce Platform",
    metric: "10x faster delivery"
  },
  {
    quote: "The design quality made investors take us seriously from day one",
    author: "Priya Patel",
    role: "Founder, FinTech App", 
    metric: "Won 3 startup competitions"
  }
];

function WhyFoundersLoveUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Why Founders Love Us
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real founders who've launched with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
          <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-white/20 transition-all duration-500"
          >
              <div className="mb-4 sm:mb-6">
                <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-white/10 pt-4 sm:pt-6">
                <div className="font-bold text-white text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-neutral-400 mb-2 sm:mb-3 text-sm">{testimonial.role}</div>
                <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  <TrophyIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  {testimonial.metric}
                </div>
              </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="font-medium">Ready to Build Something Amazing?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Your MVP Journey Starts Here
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed">
            Stop overthinking. Start building. Book a free strategy call and let's turn your idea into a market-ready product in 30 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-base sm:text-lg"
            >
              Book Strategy Call <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              to="/OurWork"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-base sm:text-lg"
            >
              View Success Stories
        </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>30-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Post-launch support</span>
            </div>
          </div>
      </motion.div>
      </div>
    </section>
  );
}

export default function WhyUs() {
  return (
    <div className="min-h-screen text-white relative">
      
      
      <HeroSection />
      <WhatMakesUsDifferent />
      <SuccessMetrics />
      <WhoWeHelp />
      <WhatYouGet />
      <WhyFoundersLoveUs />
      <FinalCTA />
    </div>
  );
} 