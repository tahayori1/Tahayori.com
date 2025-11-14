import React from 'react';
import { ArrowRightIcon, MailIcon, GlobeAltIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
    const { t, language } = useLanguage();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(t.cta.form.successMessage);
        e.currentTarget.reset();
    };

    const selectBgImage = language === 'fa' 
        ? "bg-[left_1rem_center] [background-image:url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_viewBox=%270_0_16_16%27%3e%3cpath_fill=%27none%27_stroke=%27%23ffffffb3%27_stroke-linecap=%27round%27_stroke-linejoin=%27round%27_stroke-width=%272%27_d=%27m2_5_6_6_6-6%27/%3e%3c/svg%3e')]"
        : "bg-[right_1rem_center] [background-image:url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_viewBox=%270_0_16_16%27%3e%3cpath_fill=%27none%27_stroke=%27%23ffffffb3%27_stroke-linecap=%27round%27_stroke-linejoin=%27round%27_stroke-width=%272%27_d=%27m2_5_6_6_6-6%27/%3e%3c/svg%3e')]";

    return (
        <section id="contact" className="py-20 px-4 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 ltr:left-10 rtl:right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 ltr:right-10 rtl:left-10 w-72 h-72 bg-secondary-300 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-white/20 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t.cta.title}</h2>
                        <p className="text-xl text-white/90 mb-6">{t.cta.subtitle}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white font-bold mb-2 ltr:text-left rtl:text-right" htmlFor="name">{t.cta.form.nameLabel}</label>
                                <input type="text" id="name" className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all" placeholder={t.cta.form.namePlaceholder} required />
                            </div>
                            <div>
                                <label className="block text-white font-bold mb-2 ltr:text-left rtl:text-right" htmlFor="phone">{t.cta.form.phoneLabel}</label>
                                <input type="tel" id="phone" className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all" placeholder={t.cta.form.phonePlaceholder} required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-white font-bold mb-2 ltr:text-left rtl:text-right" htmlFor="email">{t.cta.form.emailLabel}</label>
                            <input type="email" id="email" className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all" placeholder={t.cta.form.emailPlaceholder} required />
                        </div>
                        <div>
                            <label className="block text-white font-bold mb-2 ltr:text-left rtl:text-right" htmlFor="service">{t.cta.form.serviceLabel}</label>
                            <select id="service" className={`w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white focus:outline-none focus:border-white transition-all appearance-none bg-no-repeat ${selectBgImage}`} required defaultValue="">
                                <option value="" disabled className="text-neutral-900">{t.cta.form.servicePlaceholder}</option>
                                {t.cta.form.serviceOptions.map(option => (
                                    <option key={option.value} value={option.value} className="text-neutral-900">{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-white font-bold mb-2 ltr:text-left rtl:text-right" htmlFor="message">{t.cta.form.messageLabel}</label>
                            <textarea id="message" rows={4} className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all resize-none" placeholder={t.cta.form.messagePlaceholder}></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-primary-700 px-8 py-5 rounded-full font-black text-lg hover:bg-neutral-100 transition-all shadow-2xl flex items-center justify-center gap-3 group">
                            <span>{t.cta.form.submitButton}</span>
                            <ArrowRightIcon className="w-6 h-6 transform rtl:-scale-x-100 transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                        </button>
                        <p className="text-center text-white/80 text-sm">
                            {t.cta.form.termsPrefix} <a href="#" className="underline hover:text-white">{t.cta.form.termsLink}</a> {t.cta.form.termsSuffix}
                        </p>
                    </form>
                    <div className="mt-12 pt-8 border-t-2 border-white/20">
                        <div className="grid md:grid-cols-2 gap-6 text-center ltr:md:text-left rtl:md:text-right">
                            <div className="flex items-center justify-center md:justify-start gap-3 text-white">
                                <MailIcon className="w-6 h-6" />
                                <a href="mailto:tahayori@live.com" className="hover:text-secondary-200 transition-colors font-medium">tahayori@live.com</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-white">
                                <GlobeAltIcon className="w-6 h-6" />
                                <a href="https://tahayori.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-200 transition-colors font-medium">tahayori.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;