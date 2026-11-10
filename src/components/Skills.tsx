// Skills as a plain grouped list. A leading "*" marks a key skill (shown first, larger and darker).

type SkillGroup = { label: string; skills: string[] };

const groups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['*Python', '*C', '*C++', '*TypeScript / JavaScript', '*SQL', 'Bash', 'Go (basic)'],
  },
  {
    label: 'Embedded',
    skills: [
      '*STM32 / ARM Cortex-M',
      '*FreeRTOS',
      '*RISC-V',
      '*Real-time systems',
      'Interrupts & hardware timers',
      'PWM',
      'UART / USB / GPIO',
      'Motor control',
      'Raspberry Pi',
      '*Embedded Linux',
      'Hardware bring-up',
      'addr2line',
    ],
  },
  {
    label: 'Robotics',
    skills: [
      '*ROS 2',
      'ROS',
      'micro-ROS',
      'MAVLink',
      '*PX4',
      'MAVProxy',
      'QGroundControl',
      'LIDAR',
      '*Isaac Sim',
      'Isaac Lab',
      'Gazebo',
      'RViz',
    ],
  },
  {
    label: 'ML & vision',
    skills: [
      '*PyTorch',
      '*TensorFlow',
      '*TensorRT',
      'ONNX',
      'INT8 quantization',
      '*Hugging Face Transformers',
      'MLflow',
      'Object detection & tracking',
      'RF-DETR',
      '*YOLO',
      'BoT-SORT',
      '*OpenCV',
      'CNNs',
      'Loss function design',
      'Synthetic data',
      'XGBoost',
      'Random forest',
      'Logistic regression',
      'Cross-validation',
      'NumPy',
      'Pandas',
    ],
  },
  {
    label: 'LLMs',
    skills: ['*RAG', '*Milvus (vector DB)', 'LLaMA', 'Prompt design', 'LLM evaluation', 'Azure AI Language'],
  },
  {
    label: 'Systems & tools',
    skills: [
      '*Linux',
      '*Docker',
      'Git',
      '*GitHub Actions (CI/CD)',
      'pytest',
      'gRPC / Protocol Buffers (buf)',
      'Multithreading & multiprocessing',
      'MVC',
      'ffmpeg',
      'RTSP',
      'TCP/UDP',
      'SQLite',
      'Sphinx',
      'Selenium',
      'Beautiful Soup',
      'FluidSynth',
    ],
  },
  {
    label: 'Cloud',
    skills: ['*AWS (EC2)', '*Google Cloud', '*Azure'],
  },
  {
    label: 'Hardware',
    skills: ['*Soldering', '*Sensors', 'Multimeter', 'Wiring', 'Stepper drivers'],
  },
];

// One wrapping row of skills separated by dots. Each skill stays whole when the row wraps.
function SkillList({ items, className }: { items: string[]; className: string }) {
  if (items.length === 0) return null;
  return (
    <p className={`flex flex-wrap leading-relaxed ${className}`}>
      {items.map((skill, i) => (
        <span key={skill} className="max-w-full break-words sm:whitespace-nowrap">
          {skill}
          {i < items.length - 1 && (
            <span className="text-signal font-normal px-2" aria-hidden="true">·</span>
          )}
        </span>
      ))}
    </p>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16">
        <h2 className="mb-12 sm:mb-16 font-serif font-normal text-4xl sm:text-5xl text-ink tracking-tight">
          Skills
        </h2>

        <dl className="border-t border-rule">
          {groups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-1.5 py-5 border-b border-rule md:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt className="font-mono text-xs sm:text-[0.8rem] uppercase tracking-[0.08em] text-ink md:pt-1">
                {group.label}
              </dt>
              <dd className="min-w-0 max-w-[46rem]">
                <SkillList
                  items={group.skills.filter((s) => s.startsWith('*')).map((s) => s.slice(1))}
                  className="text-base sm:text-lg font-semibold text-ink"
                />
                <SkillList
                  items={group.skills.filter((s) => !s.startsWith('*'))}
                  className="mt-0.5 text-sm sm:text-base text-ink-soft opacity-80"
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
