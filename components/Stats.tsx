import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 bg-white -mt-10 relative z-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl text-center border border-primary-200">
                        <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2 stat-number">{t.stats.stat1Value}</p>
                        <p className="text-sm md:text-base text-neutral-700 font-medium">{t.stats.stat1Label}</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl text-center border border-secondary-200">
                        <p className="text-4xl md:text-5xl font-black text-secondary-700 mb-2 stat-number">{t.stats.stat2Value}</p>
                        <p className="text-sm md:text-base text-neutral-700 font-medium">{t.stats.stat2Label}</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent-500/10 to-accent-500/20 p-6 rounded-2xl text-center border border-accent-500/30">
                        <p className="text-4xl md:text-5xl font-black text-accent-600 mb-2 stat-number">{t.stats.stat3Value}</p>
                        <p className="text-sm md:text-base text-neutral-700 font-medium">{t.stats.stat3Label}</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-2xl text-center border border-primary-200">
                        <p className="text-4xl md:text-5xl font-black text-primary-700 mb-2 stat-number">{t.stats.stat4Value}</p>
                        <p className="text-sm md:text-base text-neutral-700 font-medium">{t.stats.stat4Label}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;