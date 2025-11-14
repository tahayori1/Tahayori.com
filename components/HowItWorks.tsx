import React from 'react';
import { ChatAltIcon, CogIcon, TrendingUpIcon } from './Icons';
import FadeIn from './FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
    consult: <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center"><ChatAltIcon className="w-8 h-8 text-primary-600" /></div>,
    setup: <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center"><CogIcon className="w-8 h-8 text-secondary-600" /></div>,
    growth: <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center"><TrendingUpIcon className="w-8 h-8 text-accent-600" /></div>,
}

const colorClassMap: { [key: string]: string } = {
    consult: "bg-primary-600",
    setup: "bg-secondary-600",
    growth: "bg-accent-600",
}

const borderColorMap: { [key: string]: string } = {
    consult: "border-primary-200",
    setup: "border-secondary-200",
    growth: "border-accent-500/30",
}


const StepCard: React.FC<{ step: any; stepNumber: number }> = ({ step, stepNumber }) => (
    <div className="relative">
        <div className={`bg-white p-8 rounded-3xl shadow-lg border-2 relative z-10 ${borderColorMap[step.icon]}`}>
            <div className={`absolute -top-6 rtl:right-8 ltr:left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg ${colorClassMap[step.icon]}`}>
                {stepNumber}
            </div>
            <div className="mt-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    {iconMap[step.icon]}
                </div>
                <h3 className="text-2xl font-black mb-3 text-center text-neutral-900">{step.title}</h3>
                <p className="text-neutral-600 text-center leading-relaxed">{step.description}</p>
            </div>
        </div>
    </div>
);

const HowItWorks: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="services" className="py-20 px-4 bg-neutral-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-neutral-900">
                        {t.howItWorks.title} <span className="gradient-text">{t.howItWorks.titleHighlight}</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                        {t.howItWorks.subtitle}
                    </p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-6 right-0 left-0 h-0.5 bg-gradient-to-l from-secondary-300 via-primary-300 to-secondary-300 w-2/3 mx-auto"></div>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                       {t.howItWorks.steps.map((step, index) => (
                           <FadeIn key={index}>
                                <StepCard 
                                    step={step}
                                    stepNumber={index + 1}
                                />
                           </FadeIn>
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;