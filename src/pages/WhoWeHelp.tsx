import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  RocketLaunchIcon, 
  BuildingOfficeIcon, 
  UserIcon, 
  CheckCircleIcon,
  StarIcon,
  BoltIcon,
  TrophyIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/solid';
import AnimatedBackground from '../components/layout/AnimatedBackground';

// --- Hero Section ---
function HeroSection() {
  return (
    <section className="relative py-32 px-4 text-center overflow-hidden bg-black">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm text-violet-300 mb-8">
            <SparklesIcon className="w-4 h-4 text-violet-400" />
            <span className="font-medium">Built for Every Founder</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight"
        >
          Who We Help
          <span className="block text-4xl md:text-5xl bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
            Ship Faster
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Whether you're a solo founder with big dreams, a funded startup scaling fast, or an agency delivering premium work — we're your technical execution partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-lg"
          >
            Find Your Path <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-white/5 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-lg"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// --- Who We Help Cards ---
const helpCategories = [
  {
    id: 'solo-founders',
    icon: <UserIcon className="w-8 h-8" />,
    title: 'Solo Founders',
    subtitle: 'From Idea to Launch',
    description: 'You\'re the visionary, strategist, and CEO. We\'ll be your entire technical team.',
    features: [
      'Full-stack MVP development',
      'UI/UX design & prototyping',
      'Market validation support',
      'Technical guidance & mentorship'
    ],
    benefits: [
      'Ship in 30 days, not months',
      'No technical hiring needed',
      'Focus on users & traction',
      'Own your source code'
    ],
    perfectFor: [
      'Non-technical founders',
      'First-time entrepreneurs',
      'Creators launching tools',
      'Consultants building products'
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    cta: 'Launch Your MVP'
  },
  {
    id: 'funded-startups',
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    title: 'Funded Startups',
    subtitle: 'Scale with Confidence',
    description: 'You\'ve got runway and users. We\'ll help you build features that drive growth.',
    features: [
      'Advanced feature development',
      'Performance optimization',
      'Scalable architecture',
      'Integration & automation'
    ],
    benefits: [
      'Expert technical leadership',
      'Rapid feature delivery',
      'Proven scaling strategies',
      'Dedicated project team'
    ],
    perfectFor: [
      'Seed to Series A startups',
      'Product teams needing velocity',
      'Companies scaling features',
      'Teams requiring expertise'
    ],
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    cta: 'Scale Your Product'
  },
  {
    id: 'agencies',
    icon: <BuildingOfficeIcon className="w-8 h-8" />,
    title: 'Agencies & Studios',
    subtitle: 'White-Label Excellence',
    description: 'You handle strategy and clients. We deliver world-class technical execution.',
    features: [
      'White-label development',
      'Custom client solutions',
      'Premium code quality',
      'Seamless collaboration'
    ],
    benefits: [
      'Expand service offerings',
      'Deliver faster to clients',
      'Maintain quality standards',
      'Scale without hiring'
    ],
    perfectFor: [
      'Design agencies',
      'Marketing consultancies',
      'Branding studios',
      'Digital agencies'
    ],
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
    cta: 'Partner With Us'
  }
];

function WhoWeHelpCards() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Success, Our Mission
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            No matter where you are in your journey, we have the right approach to help you ship faster and grow bigger.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col shadow-2xl group-hover:border-white/20 transition-all duration-500">
                {/* Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-lg text-violet-300 font-medium mb-4">{category.subtitle}</p>
                  <p className="text-neutral-300 leading-relaxed">{category.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-violet-400" />
                    What We Deliver
                  </h4>
                  <div className="space-y-3">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Perfect For */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrophyIcon className="w-5 h-5 text-yellow-400" />
                    Perfect For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.perfectFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${category.gradient} text-white font-semibold px-6 py-4 rounded-xl hover:shadow-lg transition-all group-hover:shadow-xl`}
                  >
                    {category.cta} <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Industries We Serve Section ---
const industries = [
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    title: 'FinTech',
    description: 'Payment platforms, trading apps, financial dashboards',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    title: 'HealthTech',
    description: 'Telemedicine, patient portals, health tracking apps',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: <ShoppingBagIcon className="w-8 h-8" />,
    title: 'E-Commerce',
    description: 'Online stores, marketplaces, inventory management',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: <AcademicCapIcon className="w-8 h-8" />,
    title: 'EdTech',
    description: 'Learning platforms, course management, student portals',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <ChartBarIcon className="w-8 h-8" />,
    title: 'SaaS Tools',
    description: 'Business automation, analytics, productivity apps',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    title: 'Startups',
    description: 'MVP development, prototypes, validation tools',
    gradient: 'from-violet-500 to-purple-500'
  }
];

function IndustriesSection() {
  return (
    <section className="py-24 px-4 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            From fintech to healthcare, we've built solutions across diverse industries with unique requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group-hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Technologies We Use Section ---
const technologies = [
  {
    category: 'Frontend',
    icon: <CodeBracketIcon className="w-6 h-6" />,
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Mobile',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    tools: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'PWA'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    category: 'Backend',
    icon: <CpuChipIcon className="w-6 h-6" />,
    tools: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Design & UX',
    icon: <SparklesIcon className="w-6 h-6" />,
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    category: 'Cloud & DevOps',
    icon: <CloudIcon className="w-6 h-6" />,
    tools: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    category: 'APIs & Integration',
    icon: <BoltIcon className="w-6 h-6" />,
    tools: ['REST APIs', 'GraphQL', 'Webhooks', 'Payment APIs', 'Third-party APIs', 'Microservices'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    category: 'Database & Storage',
    icon: <ChartBarIcon className="w-6 h-6" />,
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'Prisma'],
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    category: 'Security',
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    tools: ['OAuth', 'JWT', 'Encryption', 'GDPR', 'SOC2', 'Authentication'],
    gradient: 'from-red-500 to-orange-500'
  }
];

function TechnologiesSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies We Master
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            We use cutting-edge technologies and proven frameworks to build scalable, secure, and performant solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4">{tech.category}</h3>
                
                <div className="space-y-2">
                  {tech.tools.map((tool, i) => (
                    <div key={i} className="text-sm text-neutral-300 bg-white/5 px-3 py-1 rounded-full">
                      {tool}
                    </div>
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

// --- Success Metrics Section ---
const successMetrics = [
  { icon: <RocketLaunchIcon className="w-6 h-6" />, value: '50+', label: 'MVPs Launched' },
  { icon: <StarIcon className="w-6 h-6" />, value: '4.9/5', label: 'Client Rating' },
  { icon: <BoltIcon className="w-6 h-6" />, value: '21 Days', label: 'Avg Delivery' },
  { icon: <TrophyIcon className="w-6 h-6" />, value: '95%', label: 'Success Rate' }
];

function SuccessMetricsSection() {
  return (
    <section className="py-24 px-4 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Numbers that speak for themselves. We deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {successMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-neutral-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Process Section ---
const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We understand your vision, goals, and technical requirements.',
    duration: '30 minutes',
    icon: <SparklesIcon className="w-6 h-6" />
  },
  {
    step: '02',
    title: 'Project Planning',
    description: 'Detailed scope, timeline, and technical architecture planning.',
    duration: '2-3 days',
    icon: <BoltIcon className="w-6 h-6" />
  },
  {
    step: '03',
    title: 'Sprint Development',
    description: 'Weekly sprints with regular demos and continuous feedback.',
    duration: '2-4 weeks',
    icon: <RocketLaunchIcon className="w-6 h-6" />
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deployment, handover, and ongoing support for your success.',
    duration: 'Ongoing',
    icon: <TrophyIcon className="w-6 h-6" />
  }
];

function ProcessSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work Together
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            A proven process that delivers results, no matter your starting point.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-violet-500/50 to-transparent z-0" />
              )}
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full group-hover:border-violet-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-violet-400">{step.step}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">{step.description}</p>
                
                <div className="inline-flex items-center gap-2 text-sm text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Final CTA Section ---
function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-neutral-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm text-violet-300 mb-8">
            <RocketLaunchIcon className="w-4 h-4 text-violet-400" />
            <span className="font-medium">Ready to Start Building?</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Build Something Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-neutral-300 mb-12 leading-relaxed"
        >
          Book a free 30-minute strategy call. We'll discuss your vision, answer your questions, and create a custom plan for your success.
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-lg"
          >
            Book Strategy Call <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-white/5 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-lg"
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400"
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

// --- Main Page ---
export default function WhoWeHelp() {
  return (
    <div className="bg-black min-h-screen flex flex-col font-inter relative">
      <AnimatedBackground variant="default" intensity="low" />
      <HeroSection />
      <WhoWeHelpCards />
      <IndustriesSection />
      <TechnologiesSection />
      <SuccessMetricsSection />
      <ProcessSection />
      <FinalCTASection />
    </div>
  );
} 