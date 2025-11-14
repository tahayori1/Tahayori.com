import React from 'react';
import { LightningBoltIcon, ShieldCheckIcon, ChartBarIcon, CheckCircleIcon } from './Icons';
import FadeIn from './FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
    speed: <LightningBoltIcon className="w-8 h-8 text-white" />,
    security: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    growth: <ChartBarIcon className="w-8 h-8 text-white" />,
};

const iconBgColorMap: { [key: string]: string } = {
    speed: "from-primary-500 to-primary-600",
    security: "from-secondary-500 to-secondary-600",
    growth: "from-accent-500 to-accent-600",
}

const borderColorMap: { [key: string]: string } = {
    speed: "border-primary-100",
    security: "border-secondary-100",
    growth: "border-accent-500/20",
}

const BenefitCard: React.FC<{ card: any }> = ({ card }) => (
    <div className={`bg-white p-8 rounded-3xl shadow-lg card-hover border-2 h-full ${borderColorMap[card.icon]}`}>
        <div className={`w-16 h-16 bg-gradient-to-br ${iconBgColorMap[card.icon]} rounded-2xl flex items-center justify-center mb-6`}>
            {iconMap[card.icon]}
        </div>
        <h3 className="text-2xl font-black mb-4 text-neutral-900">{card.title}</h3>
        <p className="text-neutral-600 leading-relaxed mb-4">{card.description}</p>
        <ul className="space-y-2">
            {card.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircleIcon className="w-5 h-5 text-secondary-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Benefits: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="benefits" className="py-20 px-4 bg-neutral-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-neutral-900">
                        {t.benefits.title} <span className="gradient-text">{t.benefits.titleHighlight}</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                        {t.benefits.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {t.benefits.cards.map((card, index) => (
                        <FadeIn key={index}>
                            <BenefitCard card={card} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;