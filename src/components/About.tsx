import { motion } from 'motion/react';
import { Github, Mail, Download, X } from 'lucide-react';
import { useState } from 'react';
import { Highlight } from './ui/hero-highlight';

export function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const profileImageSrc = `${import.meta.env.BASE_URL}images/profile-picture.png`;
  const resumePdfSrc = `${import.meta.env.BASE_URL}images/resume/chloe_resume.pdf`;

  return (
    <section id="about" className="py-20">
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
                  download="chloe_resume.pdf"
                  className="px-4 py-2 bg-white text-[#2E6F40] rounded-lg flex items-center gap-2 font-medium"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:justify-start md:translate-x-15"
          >
            <div className="relative max-w-sm md:max-w-md">
              <img
                src={profileImageSrc}
                alt="Chloe Hallaert - Profile Picture"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#68BA7F] to-[#2E6F40] rounded-full blur-3xl opacity-30 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#68BA7F] to-[#2E6F40] rounded-full blur-2xl opacity-30 -z-10" />
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
                className="text-[#2E6F40] text-lg mb-2 font-medium"
              >
                Hello! I&apos;m
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#253D2C] via-[#2E6F40] to-[#68BA7F] bg-clip-text text-transparent"
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
              real-world problems. My experience spans diverse AI-driven and robotics
              related projects, including building abstract retrieval APIs, deploying
              RAG pipelines with vector databases, and developing object detection
              systems for autonomous navigation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              I&apos;m a <Highlight>published author</Highlight> of two educational
              children&apos;s books, and in my free time I enjoy teaching as a math
              and English tutor, dancing, drawing, and learning new languages
              (French, English, Chinese, American Sign Language).
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
                className="group relative overflow-hidden px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,#a955ff,#ea51ff)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg leading-none">→</span>
                  View Resume
                </span>
              </motion.button>

              <motion.a
                href="https://github.com/Chloe332"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,#56CCF2,#2F80ED)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative overflow-hidden px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,#FF9966,#FF5E62)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Get in Touch
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}