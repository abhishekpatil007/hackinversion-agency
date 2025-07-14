import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll for better UX on navigation
      // Alternative: behavior: 'smooth' for animated scrolling
    });
  }, [pathname]);

  return null; // This component doesn't render anything
} 