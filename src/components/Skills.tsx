import { motion } from 'motion/react';
import { ContainerScroll } from './ui/container-scroll-animation';

interface SkillRow {
  label: string;
  emoji: string;
  skills: string[];
  accent: string; // tailwind text color class
  bg: string;     // tailwind tag bg class
  border: string; // tailwind tag border class
}

const skillRows: SkillRow[] = [
  {
    label: 'Languages',
    emoji: '💻',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Bash'],
    accent: 'text-[#2563EB]',
    bg: 'bg-[#2563EB]/10',
    border: 'border-[#2563EB]/30',
  },
  {
    label: 'AI & ML',
    emoji: '🤖',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Transformers',
      'YOLOv5',
      'OpenCV',
      'Pandas',
      'NumPy',
      'MLflow',
      'LLaMA'
    ],
    accent: 'text-[#0D9488]',
    bg: 'bg-[#0D9488]/10',
    border: 'border-[#0D9488]/30',
  },
  {
    label: 'Cloud & Dev Tools',
    emoji: '☁️',
    skills: [
      'AWS',
      'AWS EC2',
      'Google Cloud',
      'Azure AI',
      'Docker',
      'Docker Compose',
      'Git',
      'GitHub',
      'Linux',
      'Vite',
      'React',
      'Tailwind CSS',
      'Sphinx',
      'FluidSynth API',
      'FastAPI'
    ],
    accent: 'text-[#16A34A]',
    bg: 'bg-[#16A34A]/10',
    border: 'border-[#16A34A]/30',
  },
  {
    label: 'Robotics & Simulation',
    emoji: '🚁',
    skills: ['ROS', 'ROS2', 'Isaac Sim', 'Isaac Lab', 'URDF', 'Arduino'],
    accent: 'text-[#D97706]',
    bg: 'bg-[#D97706]/10',
    border: 'border-[#D97706]/30',
  },
  {
    label: 'Backend & Data',
    emoji: '🛠️',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'PostgreSQL',
      'SQLite',
      'MILVUS',
      'Selenium',
      'Beautiful Soup',
    ],
    accent: 'text-[#DC2626]',
    bg: 'bg-[#DC2626]/10',
    border: 'border-[#DC2626]/30',
  },
  // {
  //   label: 'Spoken Languages',
  //   emoji: '🗣️',
  //   skills: ['French', 'English', 'Chinese', 'American Sign Language', 'Italian'],
  //   accent: 'text-rose-600',
  //   bg: 'bg-rose-50',
  //   border: 'border-rose-200',
  // },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E6F40] to-[#68BA7F] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Technologies, tools, and languages I work with
            </p>
          </div>
        }
      >
        <div className="bg-white rounded-2xl overflow-hidden">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.07 }}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 ${
                rowIndex !== skillRows.length - 1
                  ? 'border-b border-gray-100'
                  : ''
              }`}
            >
              {/* Label */}
              <div className="flex items-center gap-2 min-w-[190px] shrink-0">
                <span className="text-xl">{row.emoji}</span>
                <span className={`font-semibold text-sm ${row.accent}`}>
                  {row.label}
                </span>
              </div>

              {/* Divider (desktop only) */}
              <div className="hidden sm:block w-px h-6 bg-gray-200 shrink-0" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {row.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: rowIndex * 0.07 + skillIndex * 0.04,
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`
                      px-3 py-1
                      ${row.bg}
                      ${row.accent}
                      border ${row.border}
                      rounded-full
                      text-xs font-medium
                      cursor-default
                      transition-shadow duration-200
                      hover:shadow-md
                    `}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
