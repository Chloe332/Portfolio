import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const menuItems = [
  {
    title: 'GitHub',
    href: 'https://github.com/Chloe332',
    icon: <Github size={28} />,
    gradientFrom: '#a955ff',
    gradientTo: '#ea51ff',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chloehallaert/',
    icon: <Linkedin size={28} />,
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    title: 'Email',
    href: 'mailto:cxhallae@uwaterloo.ca',
    icon: <Mail size={28} />,
    gradientFrom: '#FF9966',
    gradientTo: '#FF5E62',
  },
];

export function GradientSocialMenu() {
  return (
    <div className="flex items-center">
      <ul className="flex gap-6">
        {menuItems.map(({ title, href, icon, gradientFrom, gradientTo }, idx) => (
          <motion.li
            key={idx}
            style={
              {
                '--gradient-from': gradientFrom,
                '--gradient-to': gradientTo,
              } as React.CSSProperties
            }
            className="relative w-[78px] h-[78px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[200px] hover:shadow-none group cursor-pointer border border-gray-100"
            whileHover={{ y: -3 }}
          >
            <a
              href={href}
              target={title !== 'Email' ? '_blank' : undefined}
              rel={title !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={title}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50" />

              {/* Icon */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0">
                <span className="text-gray-500 group-hover:text-white">{icon}</span>
              </span>

              {/* Title */}
              <span className="absolute text-white uppercase tracking-wide text-sm font-medium transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                {title}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}