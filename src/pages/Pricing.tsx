import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDownIcon, SparklesIcon, RocketLaunchIcon, BoltIcon } from '@heroicons/react/24/solid';
import AnimatedBackground from '../components/layout/AnimatedBackground';

// --- Hero Section ---
function Hero() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
        >
          <SparklesIcon className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Premium MVP Development</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Launch Your MVP in
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"> 30 Days</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
        >
          From idea to market-ready MVP. Fast, efficient, and built for scale.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="#pricing" 
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            View Pricing
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Book a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// --- Pricing Table ---
const plans = [
  {
    name: "Launch",
    icon: <RocketLaunchIcon className="w-8 h-8 text-indigo-400" />,
    price: "Starting at $1899",
    subtitle: "Your Idea, Live in 30 Days",
    description: "Perfect for fast-moving founders who need a polished MVP to validate their market.",
    features: [
      "Full-stack MVP development",
      "Custom UI/UX design",
      "Core features & integrations",
      "Weekly progress demos",
      "14 days post-launch support",
      "Source code ownership",
    ],
    whatsIncluded: [
      {
        title: "Development",
        items: [
          "Full-stack development",
          "Custom UI/UX design",
          "Core features & database",
          "API integrations"
        ]
      },
      {
        title: "Support",
        items: [
          "14 days post-launch support",
          "Weekly progress demos",
          "Bug fixes & updates",
          "Documentation & handover"
        ]
      }
    ],
    cta: "Start Building",
    highlight: false,
  },
  {
    name: "Scale",
    icon: <BoltIcon className="w-8 h-8 text-violet-400" />,
    price: "Starting at $3499",
    subtitle: "From MVP to Market Leader",
    description: "Ideal for funded startups ready to scale with advanced features and integrations.",
    features: [
      "Everything in Launch, plus:",
      "Advanced feature development",
      "Custom integrations & APIs",
      "Performance optimization",
      "Dedicated project lead",
      "30 days post-launch support",
      "Priority feature requests",
    ],
    whatsIncluded: [
      {
        title: "Development",
        items: [
          "Everything in Launch plan",
          "Advanced features & APIs",
          "Performance optimization",
          "Scalable architecture"
        ]
      },
      {
        title: "Support",
        items: [
          "30 days post-launch support",
          "Dedicated project lead",
          "Priority feature requests",
          "Growth strategy support"
        ]
      }
    ],
    cta: "Book Discovery Call",
    highlight: true,
  },
];

function PricingTable() {
  const [activePlan, setActivePlan] = useState<'Launch' | 'Scale'>('Launch');
  const activePlanData = plans.find(plan => plan.name === activePlan);

  return (
    <section id="pricing" className="max-w-7xl mx-auto py-24 px-4">
      <div className="text-center mb-16 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
        >
          <SparklesIcon className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Simple, Transparent Pricing</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4"
        >
          Choose Your Path to Launch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg max-w-2xl mx-auto mb-12"
        >
          No hidden fees. No bloated retainers. Just world-class MVPs, delivered fast.
        </motion.p>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            {plans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setActivePlan(plan.name as 'Launch' | 'Scale')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activePlan === plan.name
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/25'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <motion.div
          key={activePlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-neutral-900/70 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-violet-400/50 via-indigo-400/50 to-violet-400/50" />
            
            <div className="relative p-12">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Left Column - Plan Info */}
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                        {activePlanData?.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">{activePlanData?.name}</h3>
                        <p className="text-neutral-400">{activePlanData?.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                          ${activePlanData?.price.match(/\$(\d+)/)?.[1] || activePlanData?.price.replace(/[^0-9]/g, '')}
                        </span>
                        {activePlanData?.price.includes('') && (
                          <span className="text-sm text-neutral-400 font-medium">
                            *plus tax
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-neutral-500">One-time payment • No subscriptions</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    {activePlanData?.description}
                  </p>
                  
                  {/* CTA */}
                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 w-full"
                  >
                    {activePlanData?.cta}
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>

                {/* Right Column - Features */}
                <div className="space-y-10">
                  {activePlanData?.whatsIncluded.map((section, index) => (
                    <div key={section.title} className="space-y-4">
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 border-b border-violet-500/30 pb-3">
                        {section.title}
                      </h4>
                      
                      <div className="space-y-3">
                        {section.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <span className="text-neutral-300 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Simple guarantee */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-violet-300">
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                      <span>30-day delivery guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- FAQ Accordion ---
const faqs = [
  {
    q: "How fast will I receive my MVP?",
    a: "Most MVPs are delivered in 30 days or less. We move fast and keep you updated at every step with weekly demos and progress reports.",
  },
  {
    q: "What's included in the development process?",
    a: "We handle everything from UI/UX design to full-stack development, including database setup, API integrations, and deployment. You'll get weekly demos, source code ownership, and post-launch support.",
  },
  {
    q: "Can I make changes during development?",
    a: "Absolutely! We're flexible and encourage feedback. You can request changes or new features at any time, and we'll adjust the plan accordingly while maintaining our delivery timeline.",
  },
  {
    q: "What happens after the MVP is launched?",
    a: "We provide post-launch support to ensure everything runs smoothly. For the Launch plan, you get 14 days of support, while the Scale plan includes 30 days of support and priority feature requests.",
  },
  {
    q: "Do you offer ongoing development?",
    a: "Yes! After your MVP launch, we can continue as your development partner for scaling features, optimizations, and ongoing improvements. We'll create a custom plan based on your needs.",
  },
  {
    q: "What if I need to scale my MVP?",
    a: "Our Scale plan is designed for growth. We build with scalability in mind, using modern tech stacks and best practices. When you're ready to scale, we can help with performance optimization and advanced features.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 mb-6"
        >
          <SparklesIcon className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Got Questions?</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-300 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-400 text-lg max-w-2xl mx-auto"
        >
          Everything you need to know about our MVP development process
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-4"
      >
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={faq.q}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/30 shadow-lg shadow-violet-500/10' 
                  : 'bg-neutral-900/50 border border-white/10 hover:border-violet-500/20 hover:bg-neutral-800/50'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gradient-to-br from-violet-500 to-indigo-500 text-white' 
                      : 'bg-white/5 text-neutral-400 group-hover:bg-violet-500/20 group-hover:text-violet-400'
                  }`}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                  }`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                  <div className="relative w-6 h-6">
                    <span className={`absolute left-1/2 top-1/2 w-4 h-0.5 rounded transition-colors duration-300 ${
                      isOpen ? 'bg-violet-400' : 'bg-neutral-400 group-hover:bg-violet-400'
                    }`} style={{ transform: 'translate(-50%, -50%)' }} />
                    <span className={`absolute left-1/2 top-1/2 w-0.5 h-4 rounded transition-colors duration-300 ${
                      isOpen ? 'bg-violet-400' : 'bg-neutral-400 group-hover:bg-violet-400'
                    }`} style={{ transform: 'translate(-50%, -50%)' }} />
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/5">
                  <div className="pl-12 pt-4 text-neutral-300 text-lg leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
            <p className="text-neutral-400">We're here to help. Get in touch with our team.</p>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// --- Final CTA ---
function FinalCTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
        >
          <SparklesIcon className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-400">Ready to Build?</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4"
        >
          Let's Build Your MVP Together
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto"
        >
          Book a free 30-minute strategy call. We'll discuss your idea, answer your questions, and create a custom plan for your MVP.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all"
          >
            Book a Free Strategy Call
          </Link>
          <Link 
            to="/our-work" 
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl text-lg border border-white/10 transition-all"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// --- Main Page ---
export default function Pricing() {
  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col font-inter relative">
      <AnimatedBackground variant="colorful" intensity="high" />
      <Hero />
      <PricingTable />
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
} 