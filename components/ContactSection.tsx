import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  onNotify: (msg: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  // FORM STATE
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // REPLACE THIS WITH YOUR ACTUAL FORMSPREE ID
  // e.g., "https://formspree.io/f/mqkvrgbe"
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwvnopr";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: message
        })
      });

      if (response.ok) {
        setStatus('success');
        onNotify("ACCESS GRANTED: MESSAGE SENT");
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        onNotify("TRANSMISSION ERROR: RETRY");
      }
    } catch (error) {
      setStatus('error');
      onNotify("SYSTEM FAILURE: CHECK CONNECTION");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 bg-gradient-to-t from-black via-black to-transparent">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-2 tracking-tighter uppercase flex items-center justify-center gap-3">
            message me
          </h2>
        </div>

        {/* Terminal Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0a0a0a] border border-neon/30 rounded-xl p-1 shadow-[0_0_40px_rgba(204,255,0,0.1)] overflow-hidden"
        >
          {/* Top Bar Decoration */}
          <div className="bg-zinc-900/80 border-b border-white/5 px-4 py-2 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            {/* Decorative text removed */}
          </div>

          <div className="p-6 md:p-10 relative">
            {/* Background Grid inside terminal */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* SUCCESS STATE */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6 border border-neon animate-pulse-slow">
                    <CheckCircle className="text-neon w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
                    Access Granted
                  </h3>
                  <p className="text-neon font-mono text-sm tracking-widest border border-neon/30 px-4 py-2 rounded bg-neon/5">
                    MESSAGE SENT SUCCESSFULLY
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-gray-500 hover:text-white text-xs underline decoration-dotted underline-offset-4 font-mono"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              ) : (
                /* FORM STATE */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  {/* EMAIL INPUT */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neon tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER_EMAIL_ADDRESS..."
                      className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm p-4 focus:outline-none focus:border-neon focus:shadow-[0_0_15px_rgba(204,255,0,0.1)] transition-all placeholder-gray-700"
                    />
                  </div>

                  {/* MESSAGE INPUT */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neon tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                      Transmission Data
                    </label>
                    <textarea
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="INITIALIZE_MESSAGE_SEQUENCE..."
                      rows={5}
                      className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm p-4 focus:outline-none focus:border-neon focus:shadow-[0_0_15px_rgba(204,255,0,0.1)] transition-all placeholder-gray-700 resize-none"
                    />
                  </div>

                  {/* ERROR MESSAGE */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-xs font-mono bg-red-500/10 p-3 border border-red-500/20">
                      <AlertCircle size={14} />
                      TRANSMISSION FAILED. CHECK SYSTEM LOGS OR RETRY.
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full relative overflow-hidden group bg-neon text-black font-black py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        UPLOADING DATA...
                      </>
                    ) : (
                      <>
                        <span className="tracking-widest">EXECUTE SEND</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;