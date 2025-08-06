import AnimatedBackground from './AnimatedBackground';
import { Sparkles } from '../ui/sparkles';

interface GlobalBackgroundProps {
  variant?: 'default' | 'minimal' | 'colorful' | 'dark';
  intensity?: 'low' | 'medium' | 'high';
  sparklesDensity?: number;
  sparklesColor?: string;
  sparklesOpacity?: number;
}

export default function GlobalBackground({ 
  variant = 'default', 
  intensity = 'medium',
  sparklesDensity = 200,
  sparklesColor = "#a78bfa",
  sparklesOpacity = 0.4
}: GlobalBackgroundProps) {
  return (
    <>
      {/* Global Animated Background */}
      <AnimatedBackground variant={variant} intensity={intensity} />
      
      {/* Global Sparkles Effect */}
      <Sparkles 
        density={sparklesDensity}
        className="fixed inset-0 pointer-events-none z-0"
        color={sparklesColor}
        size={1.5}
        speed={0.3}
        opacity={sparklesOpacity}
      />
    </>
  );
} 