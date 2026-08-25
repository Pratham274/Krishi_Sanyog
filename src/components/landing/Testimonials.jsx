import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ramesh Patel',
      location: 'Indore, Madhya Pradesh',
      crop: 'Soybean & Wheat',
      text: 'Krishi Sanyog saved me over ₹18,000 in fertilizer costs this season alone! The AI recommended replacing excess Urea with SSP and MOP.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Gurpreet Singh',
      location: 'Ludhiana, Punjab',
      crop: 'Paddy & Wheat',
      text: 'The weather alert notified us 48 hours in advance about heavy rain. We delayed our pesticide spray and avoided total chemical washout.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Sunita Deshmukh',
      location: 'Nashik, Maharashtra',
      crop: 'Grapes & Onion',
      text: 'Applying for PM Fasal Bima Yojana through the portal was seamless. The Hindi language interface made it very easy for my family.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            Farmer Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hear From Our Community of Farmers
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between relative shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="w-12 h-12 text-emerald-500/20 absolute top-8 right-8" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed italic font-medium">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500/50"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">{item.name}</h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" /> {item.location}
                  </div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">{item.crop}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
