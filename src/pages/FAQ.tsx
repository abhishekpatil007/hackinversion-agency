import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  CodeBracketIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';


const faqCategories = [
  {
    id: 'general',
    title: 'Getting Started',
    icon: <ClockIcon className="w-5 h-5" />,
    faqs: [
      {
        question: "What services do you offer?",
        answer: "We specialize in React development, web applications, mobile apps, and digital transformation. From MVP development to enterprise solutions, we help businesses build scalable, modern web applications."
      },
    {
        question: "How fast will I receive my project?",
        answer: "Most MVPs are delivered in 2-6 weeks, while larger applications take 2-4 months. We provide detailed timelines during consultation and keep you updated with weekly progress reports."
      },
      {
        question: "Do you work with startups and enterprises?",
        answer: "Yes! We work with early-stage startups building their first MVP and established companies scaling their digital presence. Our flexible engagement models accommodate different budgets and requirements."
      },
      {
        question: "What technologies do you use?",
        answer: "We specialize in React, Next.js, TypeScript, Node.js, and AWS. Our tech stack also includes React Native for mobile, modern databases, and the latest web technologies for optimal performance."
      }
    ]
  },
  {
    id: 'process',
    title: 'Process & Team',
    icon: <UserGroupIcon className="w-5 h-5" />,
    faqs: [
    {
        question: "How does the onboarding process work?",
        answer: "We start with a discovery call to understand your needs, create detailed project scoping, set up contracts, assign your dedicated team, and begin with regular sprint planning and updates."
    },
    {
        question: "Who will work on my project?",
        answer: "You get a dedicated team: senior React developers (5+ years experience), UI/UX designers, a project manager, and DevOps support. All team members have shipped products used by millions."
      },
      {
        question: "Can I request changes during development?",
        answer: "Absolutely! We embrace agile development. New features can be added through our change request process with transparent pricing and seamless integration into our development cycle."
      },
      {
        question: "How do you handle communication?",
        answer: "We provide weekly progress reports and bi-weekly client calls. You'll always know exactly where your project stands."
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Support',
    icon: <CurrencyDollarIcon className="w-5 h-5" />,
    faqs: [
      {
        question: "How do you structure pricing?",
        answer: "We keep it simple: 50% to start, 30% mid-way, 20% on launch. Fixed, flexible, or monthly — whatever fits your stage best."
      },
      {
        question: "What's included in the project cost?",
        answer: "Our pricing includes development, design, project management, testing, deployment, documentation, 30-day warranty, and basic training. No hidden fees or surprise costs."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and optional retainer packages for ongoing development."
    },
    {
        question: "What if I'm not satisfied with the work?",
        answer: "Your satisfaction is guaranteed. We offer unlimited revisions during development, 30-day warranty post-launch, and will work with you until you're completely happy with the result."
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Details',
    icon: <CodeBracketIcon className="w-5 h-5" />,
    faqs: [
      {
        question: "Do you handle hosting and deployment?",
        answer: "Yes! We handle complete deployment on AWS, Vercel, or your preferred platform. This includes CI/CD setup, environment configuration, SSL certificates, and monitoring."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We follow enterprise-grade practices: code reviews, automated testing, security audits, OWASP compliance, and React/JavaScript best practices. All code comes with documentation."
    },
    {
        question: "Can you integrate with existing systems?",
        answer: "Absolutely! We're experts at integrations including CRMs, payment systems, authentication providers, databases, and custom APIs to ensure seamless data flow."
      },
      {
        question: "Do you build mobile apps?",
        answer: "Yes! We build cross-platform mobile apps using React Native, ensuring code sharing with your web app. Includes iOS/Android deployment and app store optimization."
      }
    ]
  }
];

function FAQAccordion({ faq, isOpen, onClick, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div 
        className="bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02, y: -2 }}
      >
        <motion.button
          onClick={onClick}
          className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
        >
          <h3 className="text-white font-semibold text-xl pr-8 leading-relaxed group-hover:text-indigo-200 transition-colors">
            {faq.question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all duration-300"
          >
            <ChevronDownIcon className="w-5 h-5 text-neutral-300 group-hover:text-indigo-300" />
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 border-t border-white/5">
                <div className="pt-4">
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function CategorySection({ category, openFAQ, setOpenFAQ }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <motion.div 
        className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          {category.icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">{category.title}</h2>
          <p className="text-neutral-400 text-sm mt-1">{category.faqs.length} questions</p>
        </div>
      </motion.div>
      
      <div className="space-y-6">
        {category.faqs.map((faq: any, index: number) => (
          <FAQAccordion
            key={`${category.id}-${index}`}
            faq={faq}
            index={index}
            isOpen={openFAQ === `${category.id}-${index}`}
            onClick={() => setOpenFAQ(openFAQ === `${category.id}-${index}` ? null : `${category.id}-${index}`)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = faqCategories.filter(category => 
    selectedCategory === 'all' || category.id === selectedCategory
  );

  return (
          <div className="min-h-screen relative">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-neutral-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Got questions? We've got answers
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Frequently Asked
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Everything you need to know about working with us, our process, and what to expect.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10'
              }`}
            >
              All
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              openFAQ={openFAQ}
              setOpenFAQ={setOpenFAQ}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help you with personalized support.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform text-lg"
                >
                  Get in Touch <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>Usually respond within 2 hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 