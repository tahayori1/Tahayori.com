import React, { useState, useEffect } from 'react';
import { MenuIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`;

    return (
        <header className={headerClasses}>
            <nav className="container mx-auto px-4 py-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-xl">{t.header.logoLetter}</span>
                        </div>
                        <div>
                            <h1 className={`text-2xl font-black ${isScrolled || isMenuOpen ? 'text-primary-700' : 'text-white'}`}>{t.header.brandName}</h1>
                            <p className={`text-xs ${isScrolled || isMenuOpen ? 'text-neutral-600' : 'text-white/80'}`}>{t.header.brandNameEn}</p>
                        </div>
                    </a>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#benefits" className={`font-medium transition-colors ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-secondary-200'}`}>{t.header.benefits}</a>
                        <a href="#products" className={`font-medium transition-colors ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-secondary-200'}`}>{t.header.products}</a>
                        <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-secondary-200'}`}>{t.header.services}</a>
                        <LanguageSwitcher />
                        <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all font-bold shadow-lg shadow-primary-600/30">
                            {t.header.cta}
                        </a>
                    </div>

                    <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <MenuIcon className={`w-6 h-6 ${isScrolled || isMenuOpen ? 'text-neutral-700' : 'text-white'}`} />
                    </button>
                </div>
                
                <div id="mobileMenu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4 pb-2`}>
                    <div className="flex flex-col gap-3">
                        <a href="#benefits" onClick={handleLinkClick} className="text-neutral-700 hover:text-primary-600 py-2 font-medium">{t.header.benefits}</a>
                        <a href="#products" onClick={handleLinkClick} className="text-neutral-700 hover:text-primary-600 py-2 font-medium">{t.header.products}</a>
                        <a href="#services" onClick={handleLinkClick} className="text-neutral-700 hover:text-primary-600 py-2 font-medium">{t.header.services}</a>
                        <div className="pt-2">
                             <LanguageSwitcher />
                        </div>
                        <a href="#contact" onClick={handleLinkClick} className="bg-primary-600 text-white px-6 py-3 rounded-full text-center font-bold">
                            {t.header.cta}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;