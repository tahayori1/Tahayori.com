import React from 'react';
import { UsersIcon, DollarIcon, SupportIcon, PieChartIcon, HeartIcon, ClipboardListIcon, CheckCircleIcon } from './Icons';
import FadeIn from './FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: { [key: string]: React.ReactNode } = {
    users: <UsersIcon className="w-7 h-7 text-white" />,
    dollar: <DollarIcon className="w-7 h-7 text-white" />,
    support: <SupportIcon className="w-7 h-7 text-white" />,
    pie: <PieChartIcon className="w-7 h-7 text-white" />,
    heart: <HeartIcon className="w-7 h-7 text-white" />,
    clipboard: <ClipboardListIcon className="w-7 h-7 text-white" />
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => (
    <div className={`group p-6 rounded-2xl card-hover ${product.gradientClass} ${product.borderColor}`}>
        <div className="flex items-start justify-between mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${product.iconBgColor}`}>
                {iconMap[product.icon]}
            </div>
            {product.isPopular && <span className="bg-secondary-500 text-white text-xs px-3 py-1 rounded-full font-bold">{product.popularText}</span>}
        </div>
        <h3 className="text-xl font-black mb-3 text-neutral-900">{product.title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">{product.description}</p>
        <a href="#contact" className={`inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all ${product.textColor}`}>
            <span>{product.linkText}</span>
            <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">→</span>
        </a>
    </div>
);

const Products: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="products" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-neutral-900">
                        {t.products.title} <span className="gradient-text">{t.products.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                        {t.products.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.products.cards.map((product, index) => (
                        <FadeIn key={index}><ProductCard product={product} /></FadeIn>
                    ))}
                </div>
                <FadeIn className="mt-8">
                    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-3xl text-white shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                                    <span className="text-sm font-bold">{t.products.special.badge}</span>
                                </div>
                                <h3 className="text-3xl font-black mb-4">{t.products.special.title}</h3>
                                <p className="text-white/90 leading-relaxed mb-6">{t.products.special.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {t.products.special.features.map((feature, index) => (
                                       <li key={index} className="flex items-center gap-3"><CheckCircleIcon className="w-6 h-6 text-secondary-200" /><span>{feature}</span></li>
                                    ))}
                                </ul>
                                <a href="#contact" className="group inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-black hover:bg-neutral-100 transition-all shadow-xl">
                                    <span>{t.products.special.cta}</span>
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">→</span>
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
                                    <div className="space-y-4">
                                        {t.products.special.stats.map((stat, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                                <span className="font-bold">{stat.label}</span>
                                                <span className="text-2xl font-black text-secondary-200">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Products;