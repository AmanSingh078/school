import { useCallback, useEffect } from 'react';

export const useAnimation = () => {
  const checkInView = useCallback(() => {
    const animatedItems = document.querySelectorAll('.animated-item');
    
    animatedItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const isInView = (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
      );
      
      if (isInView) {
        item.classList.add('animate-in');
      }
    });
  }, []);

  const animateElement = useCallback((selector: string, delay = 0) => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, delay);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);
    
    // Initial check
    checkInView();
    
    return () => {
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('resize', checkInView);
    };
  }, [checkInView]);

  return { checkInView, animateElement };
};