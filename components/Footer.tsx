import React from 'react';
import { TwitterIcon, TelegramIcon, InstagramIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-neutral-900 text-white py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-2xl">{t.header.logoLetter}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black">{t.header.brandName}</h3>
                                <p className="text-sm text-neutral-400">{t.header.brandNameEn}</p>
                            </div>
                        </div>
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                            <a href="#" aria-label="Telegram" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><TelegramIcon className="w-5 h-5" /></a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                         <div>
                            <h4 className="font-black text-lg mb-4">{t.footer.quickLinks.title}</h4>
                            <ul className="space-y-2">
                                {t.footer.quickLinks.links.map(link => (
                                    <li key={link.href}><a href={link.href} className="text-neutral-400 hover:text-white transition-colors">{link.label}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-lg mb-4">{t.footer.products.title}</h4>
                            <ul className="space-y-2 text-sm">
                                {t.footer.products.links.map(link => (
                                    <li key={link.label}><a href="#products" className="text-neutral-400 hover:text-white transition-colors">{link.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-neutral-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-400 text-sm text-center md:text-right">
                            {t.footer.copyright}
                        </p>
                        <div className="flex gap-6 text-sm">
                            {t.footer.legalLinks.map(link => (
                               <a key={link.label} href="#" className="text-neutral-400 hover:text-white transition-colors">{link.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;