import { useEffect } from 'react';
import { useGlobalStore } from '../store';

export const useScrollTracker = () => {
  const setCurrentSection = useGlobalStore(state => state.setCurrentSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(sectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setCurrentSection]);

  return { 
    currentSection: useGlobalStore(state => state.currentSection) 
  };
};