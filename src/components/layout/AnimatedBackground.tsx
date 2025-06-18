import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'minimal' | 'colorful' | 'dark';
  intensity?: 'low' | 'medium' | 'high';
}

export default function AnimatedBackground({ 
  variant = 'default', 
  intensity = 'medium' 
}: AnimatedBackgroundProps) {
  const particleCount = intensity === 'low' ? 15 : intensity === 'medium' ? 25 : 40;
  const geometricCount = intensity === 'low' ? 8 : intensity === 'medium' ? 12 : 18;

  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          particles: 'bg-white/5',
          geometric: 'border-white/10',
          orb1: 'from-white/5 to-transparent',
          orb2: 'from-white/3 to-transparent'
        };
      case 'colorful':
        return {
          particles: 'bg-gradient-to-r from-indigo-400/20 to-purple-400/20',
          geometric: 'border-indigo-400/20',
          orb1: 'from-indigo-500/10 to-purple-500/10',
          orb2: 'from-purple-500/10 to-pink-500/10'
        };
      case 'dark':
        return {
          particles: 'bg-neutral-400/10',
          geometric: 'border-neutral-400/10',
          orb1: 'from-neutral-800/20 to-transparent',
          orb2: 'from-neutral-700/15 to-transparent'
        };
      default:
        return {
          particles: 'bg-white/8',
          geometric: 'border-white/15',
          orb1: 'from-indigo-500/8 to-transparent',
          orb2: 'from-purple-500/6 to-transparent'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${styles.particles}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {Array.from({ length: geometricCount }).map((_, i) => {
        const shapes = ['circle', 'square', 'triangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = 20 + Math.random() * 40;
        
        return (
          <motion.div
            key={`geometric-${i}`}
            className={`absolute ${styles.geometric}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
              x: [0, Math.random() > 0.5 ? 30 : -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          >
            {shape === 'circle' && <div className="w-full h-full border rounded-full" />}
            {shape === 'square' && <div className="w-full h-full border" />}
            {shape === 'triangle' && (
              <div className="w-full h-full border-l border-b transform rotate-45" />
            )}
          </motion.div>
        );
      })}

      {/* Large Gradient Orbs */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full bg-gradient-to-r ${styles.orb1} blur-3xl`}
        style={{ left: '10%', top: '20%' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute w-80 h-80 rounded-full bg-gradient-to-r ${styles.orb2} blur-3xl`}
        style={{ right: '15%', bottom: '25%' }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${variant === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${variant === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Flowing Lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{
            width: '200px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ['-100vw', '100vw'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      {/* Subtle Light Rays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 