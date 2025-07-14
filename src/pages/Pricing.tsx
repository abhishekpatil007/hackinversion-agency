import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid';
import AnimatedBackground from '../components/layout/AnimatedBackground';

// --- Hero Section ---
function Hero() {
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
          <span className="text-sm font-medium text-violet-400">Custom Development Plans</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Custom Websites.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"> One Price Doesn't Fit All.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
        >
          Pick the right plan for your goals. Starting at ₹9,999 for quick launches to ₹89,999 for full-stack apps. Enterprise solutions available separately.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="#pricing" 
            onClick={(e) => {
              e.preventDefault();
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            View Plans
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

// --- Pricing Plans ---
const plans = [
  {
    name: "Launch 9",
    icon: <RocketLaunchIcon className="w-8 h-8 text-green-400" />,
    price: "₹9,999",
    subtitle: "Get online fast with a custom one-pager.",
    description: "Perfect for small businesses and startups who need a professional presence quickly.",
    features: [
      "1-page fully custom-built site",
      "Mobile-first, fast-loading",
      "Contact form / CTA buttons",
      "Hosting setup support",
      "SEO-ready structure",
      "Delivered in 7–10 days"
    ],
    cta: "Get Started",
    highlight: false,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    name: "Elevate",
    icon: <ChartBarIcon className="w-8 h-8 text-violet-400" />,
    price: "₹24,999–₹34,999",
    subtitle: "Built to grow with your brand.",
    description: "Ideal for growing businesses who need a comprehensive web presence with room to scale.",
    features: [
      "3–5 page custom site",
      "Brand-aligned UI/UX",
      "Lead capture forms, galleries, testimonials",
      "Blog or CMS integration (Notion/Sanity)",
      "Light animations, social embeds",
      "Responsive, optimized"
    ],
    cta: "Choose Elevate",
    highlight: true,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    name: "Momentum",
    icon: <BoltIcon className="w-8 h-8 text-orange-400" />,
    price: "₹49,999–₹89,999",
    subtitle: "More than a site — it's your digital product.",
    description: "For ambitious businesses ready to build a full-scale digital product with backend systems.",
    features: [
      "All features from Elevate",
      "Backend systems (DB, auth, APIs)",
      "Admin panel or dashboards",
      "SaaS-like flows (logins, logic, dashboards)",
      "Booking, payments, subscriptions",
      "Full-stack web app builds"
    ],
    cta: "Go with Momentum",
    highlight: false,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  }
];

function PricingTable() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From quick launches to enterprise-grade solutions, we have the perfect fit for every stage of your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative group ${plan.highlight ? 'lg:scale-105' : ''}`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              


              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className={`relative bg-neutral-900/90 backdrop-blur-xl border ${plan.highlight ? 'border-violet-500/50' : 'border-white/10'} rounded-2xl p-8 h-full group-hover:border-white/20 transition-all duration-500`}>
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-2xl font-bold text-white mt-1">{plan.price}</p>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-neutral-400 font-medium mb-4">{plan.subtitle}</p>
                
                {/* Description */}
                <p className="text-neutral-300 text-sm mb-6 leading-relaxed">{plan.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.highlight 
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:shadow-lg hover:shadow-violet-500/25' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FAQ Section ---
const faqs = [
  {
    question: "What's the difference between the plans?",
    answer: "Launch 9 is perfect for simple one-page sites. Elevate includes multi-page sites with CMS and advanced features. Momentum is a full-scale web application with backend systems, authentication, and SaaS-like functionality. For enterprise-grade solutions, check out our dedicated Enterprise page."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can start with Launch 9 and upgrade to Elevate or Momentum as your business grows. We'll credit your initial investment toward the higher plan."
  },
  {
    question: "What's included in the pricing?",
    answer: "All plans include custom design, development, mobile optimization, basic SEO, and source code ownership. Higher plans include additional features like CMS, backend systems, and extended support."
  },
  {
    question: "How long does development take?",
    answer: "Launch 9: 7-10 days, Elevate: 2-3 weeks, Momentum: 4-6 weeks. We provide weekly progress updates and work in agile sprints to ensure quality delivery."
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer: "Yes! We help with hosting setup and domain configuration. You'll own everything - hosting, domain, and source code. We recommend reliable hosting providers and can handle the technical setup."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about our pricing and process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CTA Section ---
function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure where to start? Let's talk.
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project and find the perfect plan for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V3a2 2 0 012-2h4a2 2 0 012 2v4M9 7h6M9 7H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-4" />
                </svg>
                Schedule Call
              </Link>
            </motion.div>
          </div>
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
      <FAQSection />
      <CTASection />
    </div>
  );
} 