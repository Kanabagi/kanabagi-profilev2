import { useEffect, useState } from 'react';

export const useScrollPosition = (targetId: string) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(targetId);
      setShowNavbar(
        section ? window.scrollY > section.getBoundingClientRect().top : false
      );
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  return showNavbar;
};
