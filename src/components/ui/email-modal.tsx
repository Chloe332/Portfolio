import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

// Get a free Access Key at https://web3forms.com (enter your email, they
// send it instantly, no dashboard/login needed) and paste it here.
const WEB3FORMS_ACCESS_KEY = '48716a5c-48c4-47df-8166-e05c43f771ef';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const closeModal = () => {
    onClose();
    // Reset after the close animation finishes so the form doesn't visibly
    // flash back to empty/idle while the modal is still fading out.
    window.setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      setStatus(result.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black p-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Email Me</h3>
              <button
                onClick={closeModal}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {status === 'success' ? (
                <div className="py-6 text-center">
                  <CheckCircle2 className="mx-auto mb-3 text-[#2E6F40]" size={40} />
                  <p className="text-gray-800 font-semibold mb-1">Message sent!</p>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out — I'll get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-5 px-5 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#2E6F40] focus:ring-2 focus:ring-[#2E6F40]/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#2E6F40] focus:ring-2 focus:ring-[#2E6F40]/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1.5 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#2E6F40] focus:ring-2 focus:ring-[#2E6F40]/20 outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Something went wrong sending that — try again, or email
                      me directly at cxhallae@uwaterloo.ca.
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                    className="w-full px-6 py-3 bg-black text-white rounded-lg flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transition-shadow disabled:opacity-60"
                  >
                    <Send size={18} />
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
