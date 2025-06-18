import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  EnvelopeIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const footerSections = {
  services: [
    { name: "MVP Development", href: "/our-work" },
    { name: "Web Applications", href: "/our-work" },
    { name: "Mobile Apps", href: "/our-work" },
    { name: "SaaS Platforms", href: "/our-work" },
    { name: "E-Commerce", href: "/our-work" },
    { name: "Product Strategy", href: "/contact" }
  ],
  company: [
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Our Work", href: "/our-work" },
    { name: "Who We Help", href: "/who-we-help" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" }
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/our-work" },
    { name: "Free Consultation", href: "/contact" },
    { name: "Project Estimate", href: "/contact" },
    { name: "Tech Stack Guide", href: "/blog" },
    { name: "Startup Resources", href: "/blog" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Protection", href: "/privacy" }
  ]
};

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/hackinversion",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hackinversion",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/hackinversion",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/hackinversion",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
      </svg>
    ),
  }
];

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription (replace with real newsletter service)
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Stay in the Loop</h3>
        </div>
        
        <p className="text-neutral-300 mb-6 leading-relaxed">
          Get exclusive MVP insights, startup strategies, and behind-the-scenes content delivered weekly.
        </p>

        {isSubscribed ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-emerald-400 font-semibold mb-2">Welcome aboard! 🎉</div>
            <div className="text-neutral-300 text-sm">Check your inbox for a confirmation email.</div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-6 py-4 rounded-2xl hover:shadow-lg hover:shadow-violet-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe Now <ArrowRightIcon className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        )}

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>No spam ever</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black to-black opacity-90" />
      
      {/* Main Footer Content */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Company Info & Newsletter - Takes 5 columns */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Logo & Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/" className="inline-flex items-center group mb-8">
                  <span className="text-3xl font-bold bg-gradient-to-r from-white via-neutral-100 to-neutral-200 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:via-purple-400 group-hover:to-indigo-400 transition-all duration-500">
                    HACKINVERSION
                  </span>
                </Link>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-md">
                  We build MVPs like your technical co-founder would — fast, clean, and designed to win trust, traction, and funding.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="flex items-center gap-4 text-neutral-300 group hover:text-white transition-colors">
                  <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <EnvelopeIcon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Email us</div>
                    <a href="mailto:abhishek01patil@gmail.com" className="font-medium">
                      abhishek01patil@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-neutral-300 group hover:text-white transition-colors">
                  <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <CalendarDaysIcon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Schedule a call</div>
                    <a href="https://calendly.com/abhishek01patil/30min" target="_blank" rel="noopener noreferrer" className="font-medium">
                      Book 30-min Strategy Session
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center">
                    <GlobeAltIcon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Working globally</div>
                    <div className="font-medium">Remote-First • 15+ Countries</div>
                  </div>
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <NewsletterSignup />
            </div>

            {/* Navigation Links - Takes 7 columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-8 relative">
                    Services
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {footerSections.services.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          to={item.href}
                          className="text-neutral-400 hover:text-white transition-colors text-sm font-medium relative group"
                        >
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 group-hover:w-full transition-all duration-300 rounded-lg -z-10" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-8 relative">
                    Company
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {footerSections.company.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          to={item.href}
                          className="text-neutral-400 hover:text-white transition-colors text-sm font-medium relative group"
                        >
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 group-hover:w-full transition-all duration-300 rounded-lg -z-10" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-8 relative">
                    Resources
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {footerSections.resources.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          to={item.href}
                          className="text-neutral-400 hover:text-white transition-colors text-sm font-medium relative group"
                        >
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 group-hover:w-full transition-all duration-300 rounded-lg -z-10" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-8 relative">
                    Legal
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {footerSections.legal.map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          to={item.href}
                          className="text-neutral-400 hover:text-white transition-colors text-sm font-medium relative group"
                        >
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 group-hover:w-full transition-all duration-300 rounded-lg -z-10" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative border-t border-white/10 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm text-violet-300 mb-8">
              <RocketLaunchIcon className="w-4 h-4 text-violet-400" />
              <span className="font-medium">Ready to Launch Your MVP?</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Turn Your Idea Into Reality
              <span className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                In Just 30 Days
              </span>
            </h3>
            
            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 50+ successful founders who've launched with us. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold px-10 py-5 rounded-2xl hover:shadow-xl hover:shadow-violet-500/25 transition-all text-lg"
                >
                  Start Your Project <RocketLaunchIcon className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 text-lg"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span>30-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span>Source code included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                <span>Post-launch support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm text-center lg:text-left"
            >
              © {new Date().getFullYear()} HACKINVERSION. All rights reserved.
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> • </span>
              Made with <HeartIcon className="w-4 h-4 inline text-red-400 mx-1" /> for ambitious founders.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-violet-500/20 transition-all group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-neutral-400 text-sm"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="font-medium">Available for new projects</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 