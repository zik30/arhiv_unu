import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { key } = useLocation();
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 150);
    return () => clearTimeout(timer);
  }, [key]);
};
