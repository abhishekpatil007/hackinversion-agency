import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  ClockIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  StarIcon
} from '@heroicons/react/24/solid';
import AnimatedBackground from '../components/layout/AnimatedBackground';



const contactMethods = [
  {
    icon: <CalendarDaysIcon className="w-8 h-8" />,
    title: 'Book a Strategy Call',
    description: 'Free 30-minute consultation to discuss your project',
    action: 'Schedule Now',
    link: 'https://calendly.com/abhishek01patil/30min',
    gradient: 'from-violet-500 to-purple-500',
    badge: 'Most Popular'
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8" />,
    title: 'Send us an Email',
    description: 'abhishek01patil@gmail.com',
    action: 'Send Email',
    link: 'mailto:abhishek01patil@gmail.com?subject=Project Inquiry&body=Hi HACKINVERSION team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AProject type: %0D%0ABudget range: %0D%0ATimeline: %0D%0A%0D%0APlease let me know when we can schedule a call.%0D%0A%0D%0AThank you!',
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'Fast Response'
  }
];

const faqItems = [
  {
    question: "How quickly can you start my project?",
    answer: "We can typically start new projects within 1-2 weeks. After our initial consultation, we'll provide a detailed timeline and can often begin with discovery and planning immediately."
  },
  {
    question: "What information do you need to get started?",
    answer: "We'll need to understand your business goals, target audience, key features, timeline, and budget. Don't worry if you don't have all the details - we'll help you figure it out during our strategy call."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients worldwide and have experience with different time zones. We'll find a communication schedule that works for both of us."
  },
  {
    question: "What's included in the free consultation?",
    answer: "We'll discuss your project goals, provide technical guidance, suggest the best approach, give you a rough timeline and budget estimate, and answer all your questions - completely free, no strings attached."
  }
];

const responseStats = [
  {
    icon: <ClockIcon className="w-6 h-6" />,
    metric: '< 2 hours',
    label: 'Email Response'
  },
  {
    icon: <CalendarDaysIcon className="w-6 h-6" />,
    metric: '< 24 hours',
    label: 'Call Scheduling'
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    metric: '1-2 weeks',
    label: 'Project Start'
  },
  {
    icon: <StarIcon className="w-6 h-6" />,
    metric: '4.9/5',
    label: 'Client Rating'
  }
];

// Hero Section
function ContactHeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-black">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-violet-300 mb-6 sm:mb-8">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="font-medium">Let's Build Something Amazing</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-tight"
        >
          Ready to Start
          <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
            Your Project?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          From initial idea to market-ready MVP, we're here to turn your vision into reality. Let's discuss how we can help you ship faster and grow bigger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('contact-methods')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-violet-500/25 text-base sm:text-lg"
          >
            Get Started Now <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={() => scrollToSection('contact-form')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all border border-white/10 text-base sm:text-lg"
          >
            Send us a Message
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Methods Section
function ContactMethodsSection() {
  const handleContactMethod = (method: any) => {
    window.open(method.link, '_blank');
  };

  return (
    <section id="contact-methods" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Choose Your Preferred Way to Connect
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Whether you want to jump on a call or send us an email - we're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {method.badge && (
                <div className="absolute -top-3 left-4 sm:left-6 z-10">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                    {method.badge}
                  </span>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-5 rounded-2xl sm:rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full text-center group-hover:border-white/20 transition-all duration-500">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{method.title}</h3>
                <p className="text-sm sm:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">{method.description}</p>
                
                <button
                  onClick={() => handleContactMethod(method)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r ${method.gradient} text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:shadow-lg transition-all group-hover:shadow-xl text-sm sm:text-base`}
                >
                  {method.action} <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Response Time Section
function ResponseTimeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            We Respond Fast
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            When you reach out, you won't be waiting long. Here's what to expect when you contact us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {responseStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-center group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.metric}</div>
              <div className="text-xs sm:text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
    terms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manjbeay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          projectType: '',
          message: '',
          terms: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      const emailSubject = `Project Inquiry from ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget: ${formData.budget}
Project Type: ${formData.projectType}

Message:
${formData.message}
      `;
      
      window.location.href = `mailto:abhishek01patil@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Send Us a Message
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you within 2 hours with next steps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <p className="text-green-400 text-center text-sm sm:text-base">✅ Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-center text-sm sm:text-base">❌ Something went wrong. Please try again or email us directly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
                  Your Name *
                </label>
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm sm:text-base" 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm sm:text-base" 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@company.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="company">
                  Company Name
                </label>
                <input 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm sm:text-base" 
                  id="company" 
                  name="company" 
                  type="text" 
                  placeholder="Your Company" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2" htmlFor="budget">
                  Project Budget
                </label>
                <select 
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm sm:text-base"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2" htmlFor="projectType">
                Project Type
              </label>
              <select 
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm sm:text-base"
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
              >
                <option value="">What do you want to build?</option>
                <option value="mvp">MVP Development</option>
                <option value="web-app">Web Application</option>
                <option value="mobile-app">Mobile App</option>
                <option value="saas">SaaS Platform</option>
                <option value="ecommerce">E-Commerce Store</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                Project Description *
              </label>
              <textarea 
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none text-sm sm:text-base" 
                id="message" 
                name="message" 
                rows={6} 
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..." 
                value={formData.message}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                className="mt-1 w-4 h-4 text-violet-500 bg-white/5 border border-white/10 rounded focus:ring-violet-500/50"
                checked={formData.terms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms" className="text-sm text-neutral-300 leading-relaxed">
                I agree to receive communications from HACKINVERSION and understand that I can unsubscribe at any time.
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Quick answers to common questions about working with us.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">{faq.question}</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Ask us anything <ArrowRightIcon className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground variant="dark" intensity="medium" />
      
      <ContactHeroSection />
      <ContactMethodsSection />
      <ResponseTimeSection />
      <ContactFormSection />
      <FAQSection />
    </div>
  );
} 