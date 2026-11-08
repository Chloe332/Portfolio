import { motion } from 'motion/react';
import { Github, Mail, Download, X } from 'lucide-react';
import { useState } from 'react';
import { Highlight } from './ui/hero-highlight';

// Bump this whenever Chloe_Hallaert_Resume.pdf is replaced, so browsers (and the
// embedded preview iframe) fetch the new file instead of a cached old one.
const RESUME_CACHE_BUST = '2026-11-08';

function scrollToContact() {
  const section = document.getElementById('contact');
  if (!section) return;

  const navHeight = 64; // matches the fixed nav bar's h-16
  const top = section.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const profileImageSrc = `${import.meta.env.BASE_URL}images/profile-picture.png`;
  // Cache-bust so the embedded preview (and repeat visits) always pull the
  // latest resume instead of a stale cached PDF from a previous version.
  const resumePdfSrc = `${import.meta.env.BASE_URL}images/resume/Chloe_Hallaert_Resume.pdf?v=${RESUME_CACHE_BUST}`;

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-rule">
      {showResumeModal && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowResumeModal(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Resume Preview</h3>

              <div className="flex gap-3">
                <motion.a
                  href={resumePdfSrc}
                  download="Chloe_Hallaert_Resume.pdf"
                  className="px-4 py-2 bg-white text-signal rounded-lg flex items-center gap-2 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download PDF
                </motion.a>

                <motion.button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 h-[calc(90vh-100px)]">
              <iframe
                src={resumePdfSrc}
                title="Resume Preview"
                className="w-full h-full rounded-lg border border-gray-200 bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Stacked on phones and tablets; photo + text side by side from laptop width up. */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[17rem] sm:max-w-xs lg:max-w-md">
              <img
                src={profileImageSrc}
                alt="Chloe Hallaert - Profile Picture"
                className="w-full h-auto rounded-[3px] border border-rule"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-signal text-lg mb-2 font-medium"
              >
                Hello! I&apos;m
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl mb-3 font-serif font-normal text-ink tracking-tight"
              >
                Chloe Hallaert
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-4"
              >
                Software Engineer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              <Highlight>Honors Software Engineering</Highlight> student at the{' '}
              <Highlight>
                <strong>University of Waterloo</strong>
              </Highlight>{' '}
              with a passion for <Highlight>AI</Highlight>, <Highlight>Quant</Highlight>,{' '}
              <Highlight>Robotics</Highlight> and anything software striving to solve
              real-world problems. My work spans AI and robotics: real-time
              firmware, edge ML inference, object detection and tracking models,
              and RAG pipelines built on vector databases.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              I&apos;m a <Highlight>published author</Highlight> of two educational
              children&apos;s books, and in my free time I enjoy tutoring kids in
              math and English, dancing, fencing, rock climbing, painting, building everything from furniture to robots, and learning new languages
              (currently Italian).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-2.5 border border-ink text-ink rounded-[2px] font-mono text-sm flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg leading-none">→</span>
                  View Resume
                </span>
              </motion.button>

              <motion.a
                href="https://github.com/Chloe332"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-ink text-ink rounded-[2px] font-mono text-sm flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </span>
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="px-5 py-2.5 border border-ink text-ink rounded-[2px] font-mono text-sm flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Get in Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}