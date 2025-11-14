import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-bold px-3 py-1.5 rounded-md transition-colors bg-white/20 hover:bg-white/30 text-white"
      aria-label={`Switch to ${language === 'en' ? 'Farsi' : 'English'}`}
    >
      {language === 'en' ? 'فارسی' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
