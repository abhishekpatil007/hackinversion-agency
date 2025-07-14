import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Why Us", to: "/WhyUs" },
  { name: "Who We Help", to: "/who-we-help" },
  { name: "Our Work", to: "/OurWork" },
  { name: "Pricing", to: "/pricing" },
  { name: "Enterprise", to: "/enterprise" },
  { name: "FAQ", to: "/FAQ" },
  { name: "Contact", to: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl  shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
                         {/* Logo */}
             <div className="flex items-center">
               <Link to="/" className="group">
                 <motion.div
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   transition={{ duration: 0.3 }}
                   className="relative"
                 >
                   <span className="text-3xl font-black text-white tracking-[0.15em] font-mono relative drop-shadow-2xl">
                     HACKINVERSION
                   </span>
                   <motion.div
                     className="absolute inset-0 text-3xl font-black text-white/20 tracking-[0.15em] font-mono"
                     animate={{ 
                       x: [0, 3, 0, -1, 0],
                       y: [0, -2, 0, 1, 0]
                     }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   >
                     HACKINVERSION
                   </motion.div>
                   <motion.div
                     className="absolute -inset-3 bg-white/5 rounded-xl blur-2xl"
                     animate={{ 
                       opacity: [0, 0.8, 0],
                       scale: [0.9, 1.3, 0.9]
                     }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   />
                 </motion.div>
               </Link>
             </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive(item.to)
                        ? "text-white bg-white/10"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.to) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg border border-indigo-500/30"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-600/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Call
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="relative w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm lg:hidden"
          >
            <div className="h-full bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
              <div className="flex flex-col h-full">
                                 {/* Mobile Header */}
                 <div className="flex items-center justify-between p-6 border-b border-white/10">
                   <Link to="/" className="group">
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       transition={{ duration: 0.3 }}
                       className="relative"
                     >
                       <span className="text-xl font-black text-white tracking-[0.15em] font-mono relative drop-shadow-xl">
                         HACKINVERSION
                       </span>
                       <motion.div
                         className="absolute inset-0 text-xl font-black text-white/20 tracking-[0.15em] font-mono"
                         animate={{ 
                           x: [0, 2, 0, -1, 0],
                           y: [0, -1, 0, 0.5, 0]
                         }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       >
                         HACKINVERSION
                       </motion.div>
                       <motion.div
                         className="absolute -inset-2 bg-white/5 rounded-lg blur-xl"
                         animate={{ 
                           opacity: [0, 0.6, 0],
                           scale: [0.9, 1.2, 0.9]
                         }}
                         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                       />
                     </motion.div>
                   </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center"
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between w-full px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                            isActive(item.to)
                              ? "text-white bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30"
                              : "text-neutral-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{item.name}</span>
                          <motion.span
                            className="text-neutral-500 group-hover:text-white transition-colors"
                            animate={{ x: isActive(item.to) ? 5 : 0 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-white/10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="group w-full"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-base shadow-lg relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Book a Call
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.button>
                    </Link>
                  </motion.div>
                  
                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-neutral-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Usually respond within 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 