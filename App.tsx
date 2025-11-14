

import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
    useEffect(() => {
        const smoothScroll = (e: MouseEvent) => {
            const anchor = e.currentTarget as HTMLAnchorElement;
            const href = anchor.getAttribute('href');
            if (!href || !href.startsWith('#') || href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80; // Adjust this value to account for fixed header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        // Delay attaching event listeners to ensure all components are rendered
        // This helps ensure that event listeners are attached to all anchor tags, including those rendered by child components.
        const timer = setTimeout(() => {
            const anchors = document.querySelectorAll('a[href^="#"]');
            anchors.forEach(anchor => anchor.addEventListener('click', smoothScroll as EventListener));
        }, 100);
        
        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            clearTimeout(timer);
            const anchors = document.querySelectorAll('a[href^="#"]');
            anchors.forEach(anchor => anchor.removeEventListener('click', smoothScroll as EventListener));
        };
    }, []);


  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Products />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default App;