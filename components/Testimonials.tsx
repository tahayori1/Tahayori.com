import React from 'react';
import { StarIcon } from './Icons';
import FadeIn from './FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

const FiveStars: React.FC = () => (
    <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-accent-500" />)}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: any; }> = ({ testimonial }) => (
    <div className={`p-8 rounded-3xl shadow-lg h-full flex flex-col ${testimonial.gradient} ${testimonial.border}`}>
        <FiveStars />
        <p className="text-neutral-700 leading-relaxed mb-6 italic grow">
            "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-3 mt-auto">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.avatar}`}>
                {testimonial.initials}
            </div>
            <div>
                <p className="font-bold text-neutral-900">{testimonial.name}</p>
                <p className="text-sm text-neutral-600">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-neutral-900">
                        {t.testimonials.title} <span className="gradient-text">{t.testimonials.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600">
                        {t.testimonials.subtitle}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {t.testimonials.cards.map((testimonial, index) => (
                        <FadeIn key={index}><TestimonialCard testimonial={testimonial} /></FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;