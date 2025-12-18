import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlight: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'BASIC',
    price: 5,
    description: 'Perfect for new creators getting started.',
    features: ['1 Thumbnail Concept', '2 Revisions', 'High-Res JPEG', '24h Delivery'],
    highlight: false,
  },
  {
    name: 'PRO',
    price: 15,
    description: 'Best for active creators & channels.',
    features: ['2 Thumbnail Concepts', 'Unlimited Revisions', 'Source Files (PSD)', 'Priority Discord Support', 'CTR Strategy Guide'],
    highlight: true,
  },
  {
    name: 'ELITE',
    price: 60,
    description: 'The ultimate agency experience.',
    features: ['5 Thumbnail Concepts', 'Dedicated Designer', 'Custom 3D Rendering', 'Full Video Graphics', '12h Priority Delivery'],
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative z-10 py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 rounded-full border border-neon/30 text-neon text-[10px] font-black tracking-[0.3em] uppercase mb-4"
        >
          Investment
        </motion.div>
        <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase">PRICING <span className="text-neon italic">SYSTEM</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto font-medium">Clear pricing. Zero friction. Maximum growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-3xl p-10 border transition-all duration-500 h-full flex flex-col ${
              tier.highlight 
                ? 'bg-zinc-900 border-neon shadow-[0_0_50px_rgba(204,255,0,0.1)] scale-105 z-10' 
                : 'bg-zinc-950 border-white/5 hover:border-white/20'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-4 right-10 bg-neon text-black text-[10px] font-black px-6 py-2 rounded-full tracking-widest uppercase flex items-center gap-2">
                <Star size={12} fill="black" /> Best Value
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-xl font-black mb-2 tracking-widest ${tier.highlight ? 'text-neon' : 'text-white'}`}>{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">${tier.price}</span>
                <span className="text-gray-500 font-bold">/THUMB</span>
              </div>
              <p className="text-gray-500 text-sm mt-4 font-medium leading-relaxed">{tier.description}</p>
            </div>

            <ul className="space-y-5 mb-10 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 text-sm font-semibold group/item">
                  <div className={`p-1 rounded-md transition-colors duration-300 ${tier.highlight ? 'bg-neon text-black' : 'bg-white/5 text-neon group-hover/item:bg-neon group-hover/item:text-black'}`}>
                    <Check className="w-4 h-4" strokeWidth={4} />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`relative overflow-hidden w-full py-4 rounded-2xl font-black tracking-widest uppercase transition-all duration-300 text-sm ${
                tier.highlight
                  ? 'bg-neon text-black hover:scale-105 shadow-[0_10px_30px_rgba(204,255,0,0.2)]'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:scale-105'
              }`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;