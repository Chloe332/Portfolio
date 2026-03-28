import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cxhallae@uwaterloo.ca',
      href: 'mailto:cxhallae@uwaterloo.ca',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/chloehallaert',
      href: 'https://www.linkedin.com/in/chloehallaert/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Chloe332',
      href: 'https://github.com/Chloe332',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Washington DC, USA \& Toronto, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I’m currently looking for internship opportunities and collaborations
            in AI, software, and quantitative projects. Feel free to reach out. 
            I’d love to connect!
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:cxhallae@uwaterloo.ca"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/chloehallaert/"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            // target="_blank"
            // rel="noopener noreferrer"
            // className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:border-blue-500 hover:text-blue-600 hover:-translate-y-0.5 transition-all"
          >
            View LinkedIn
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    <p className="text-gray-800 font-semibold break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            return info.href ? (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}