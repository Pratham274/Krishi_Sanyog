import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Krishi Sanyog calculate fertilizer recommendations?',
      a: 'Our neural network engine matches your inputted N-P-K nutrient values, soil pH, moisture level, and target land acreage against standard ICAR and State Agricultural University recommendations to compute exact bag counts of Urea, DAP, MOP, or SSP needed.',
    },
    {
      q: 'Is soil testing required to use the platform?',
      a: 'While uploading an official Soil Health Card gives the highest precision, you can also use our estimation wizard or request a free soil sample collection through your local Block Krishi Kendra.',
    },
    {
      q: 'Is Krishi Sanyog free for farmers?',
      a: 'Yes! The basic soil analysis, fertilizer calculator, weather alerts, and government scheme portal are 100% free for Indian farmers under national digital agriculture initiatives.',
    },
    {
      q: 'Can I access Krishi Sanyog in Hindi or regional languages?',
      a: 'Yes, Krishi Sanyog supports full instant language toggling between English and Hindi, with support for regional dialects in advisories.',
    },
    {
      q: 'How do I apply for government schemes through Krishi Sanyog?',
      a: 'Simply visit the Government Schemes section on your Farmer Portal, check your eligibility status, click "Apply Now", and enter your Aadhaar / Bank account details.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-100/50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-2 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
