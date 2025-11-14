import React from 'react';
import { ChatAltIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingCTA: React.FC = () => {
    const { t } = useLanguage();
    return (
        <a href="#contact" aria-label={t.header.cta} className="fixed bottom-6 ltr:right-6 rtl:left-6 bg-secondary-600 hover:bg-secondary-700 text-white p-4 rounded-full shadow-2xl z-40 transition-all hover:scale-110 group">
            <ChatAltIcon className="w-6 h-6" />
        </a>
    );
};

export default FloatingCTA;