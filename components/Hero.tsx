import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircleIcon, TrendingUpIcon, DollarIcon, CheckBadgeIcon } from './Icons';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="gradient-hero pt-40 md:pt-32 pb-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 ltr:right-10 rtl:left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 ltr:left-10 rtl:right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-sm font-bold">{t.hero.badge}</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                            {t.hero.title1}
                            <span className="block text-secondary-200">{t.hero.title2}</span>
                        </h2>
                        
                        <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                            {t.hero.subtitle1}
                            <br />
                            {t.hero.subtitle2}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="#contact" className="group bg-white text-primary-700 px-8 py-4 rounded-full font-black text-lg hover:bg-neutral-100 transition-all shadow-2xl inline-flex items-center justify-center gap-2">
                                <span>{t.hero.ctaPrimary}</span>
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">→</span>
                            </a>
                            <a href="#products" className="bg-primary-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-800/70 transition-all border-2 border-white/30 inline-flex items-center justify-center">
                                {t.hero.ctaSecondary}
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-secondary-200" />
                                <span className="text-white/90">{t.hero.trust1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-secondary-200" />
                                <span className="text-white/90">{t.hero.trust2}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-secondary-200" />
                                <span className="text-white/90">{t.hero.trust3}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center items-center animate-float">
                        <div className="relative">
                            <div className="w-80 h-80 bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-white/20 p-8 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center">
                                            <TrendingUpIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-white">
                                            <p className="text-sm opacity-80">{t.hero.card1Label}</p>
                                            <p className="text-2xl font-black">{t.hero.card1Value}</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/20"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                                            <DollarIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-white">
                                            <p className="text-sm opacity-80">{t.hero.card2Label}</p>
                                            <p className="text-2xl font-black">{t.hero.card2Value}</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/20"></div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                                            <CheckBadgeIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-white">
                                            <p className="text-sm opacity-80">{t.hero.card3Label}</p>
                                            <p className="text-2xl font-black">{t.hero.card3Value}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;