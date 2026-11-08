// Skills as a plain grouped list. A leading "*" marks a key skill (shown in bold). Only skills from resume-agent-documentation.md §7
// whose evidence is approved (✅) work. Nothing from the §9 "do not claim" list.

type SkillGroup = { label: string; skills: string[] };

const groups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['*Python', '*C', '*C++', 'TypeScript / JavaScript', 'SQL', 'Bash', 'Go (basic)'],
  },
  {
    label: 'Embedded',
    skills: [
      '*STM32 / ARM Cortex-M',
      '*FreeRTOS',
      'RISC-V',
      '*Real-time systems',
      'Interrupts & hardware timers',
      'PWM',
      'UART',
      'USB',
      'GPIO',
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
      '*micro-ROS',
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
      'TensorFlow',
      '*TensorRT',
      'ONNX',
      '*INT8 quantization',
      'Hugging Face Transformers',
      'MLflow',
      '*Object detection & tracking',
      'RF-DETR',
      'YOLO',
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
    skills: ['*LLaMA', '*RAG', 'Milvus (vector DB)', 'Prompt design', 'LLM evaluation', 'Azure AI Language'],
  },
  {
    label: 'Systems & tools',
    skills: [
      '*Linux',
      '*Docker',
      'Git',
      '*GitHub Actions (CI/CD)',
      'pytest',
      '*gRPC / Protocol Buffers (buf)',
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
    skills: ['*AWS (EC2)', 'Google Cloud', 'Azure'],
  },
  {
    label: 'Hardware',
    skills: ['Soldering', 'Multimeter', 'Wiring', 'Stepper drivers', 'Sensors'],
  },
  // PENDING APPROVAL: these only come from 🟡 Mara work (DDS bridge, multi-lid,
  // secure boot, GPS). Add them once that work is approved:
  //   DDS (CycloneDDS, Fast DDS), Ansible, Secure Boot / UEFI / LUKS, GNSS/RTK (u-blox)
  //
  // TODO(Chloe): on the old site but not in the resume doc. Confirm before adding:
  // HTML, CSS, Node.js, Express, REST APIs, PostgreSQL, FastAPI, Vite,
  // Tailwind CSS, Docker Compose, Arduino.
  //
  // Not listed on purpose: URDF and RL (marked unconfirmed in the resume doc, S4).
];

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
              className="grid gap-x-10 gap-y-1.5 py-5 border-b border-rule md:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft md:pt-1.5">
                {group.label}
              </dt>
              <dd className="max-w-[46rem] text-lg leading-relaxed text-ink">
                {group.skills.map((raw, i) => {
                  const key = raw.startsWith('*');
                  const skill = key ? raw.slice(1) : raw;
                  return (
                  <span key={skill}>
                    {key ? <strong className="font-semibold">{skill}</strong> : skill}
                    {i < group.skills.length - 1 && (
                      <span className="text-signal px-2" aria-hidden="true">·</span>
                    )}
                  </span>
                  );
                })}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
