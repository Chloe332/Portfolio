import { motion } from 'motion/react';

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
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
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
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
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
    accent: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
  },
  {
    label: 'Robotics & Simulation',
    emoji: '🚁',
    skills: ['ROS', 'ROS2', 'Isaac Sim', 'Isaac Lab', 'URDF', 'Arduino'],
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
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
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies, tools, and languages I work with
          </p>
        </motion.div>

        {/* Skills card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
