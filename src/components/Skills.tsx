// Skills as a plain grouped list. Only skills from resume-agent-documentation.md §7
// whose evidence is approved (✅) work. Nothing from the §9 "do not claim" list.

type SkillGroup = { label: string; skills: string[] };

const groups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'C', 'C++', 'TypeScript / JavaScript', 'SQL', 'Bash', 'Go (basic)'],
  },
  {
    label: 'Embedded',
    skills: [
      'STM32 / ARM Cortex-M',
      'FreeRTOS',
      'RISC-V',
      'Interrupts & hardware timers',
      'PWM',
      'UART',
      'USB',
      'GPIO',
      'Embedded Linux',
      'addr2line',
    ],
  },
  {
    label: 'Robotics',
    skills: ['ROS 2', 'micro-ROS', 'Isaac Sim', 'Isaac Lab', 'Gazebo', 'RViz', 'URDF'],
  },
  {
    label: 'ML & vision',
    skills: [
      'PyTorch',
      'TensorFlow',
      'TensorRT',
      'ONNX',
      'INT8 quantization',
      'Hugging Face Transformers',
      'MLflow',
      'RF-DETR',
      'YOLO',
      'OpenCV',
      'XGBoost',
      'NumPy',
      'Pandas',
    ],
  },
  {
    label: 'LLMs',
    skills: ['LLaMA', 'RAG', 'Milvus', 'Prompt design', 'LLM evaluation'],
  },
  {
    label: 'Systems & tools',
    skills: [
      'Linux',
      'Docker',
      'Git',
      'GitHub Actions (CI/CD)',
      'pytest',
      'gRPC / Protobuf (buf)',
      'ffmpeg',
      'RTSP',
      'TCP/UDP',
      'SQLite',
      'Sphinx',
      'Selenium',
      'Beautiful Soup',
    ],
  },
  {
    label: 'Cloud',
    skills: ['AWS (EC2)', 'Google Cloud', 'Azure AI'],
  },
  {
    label: 'Hardware',
    skills: ['Soldering', 'Multimeter', 'Wiring', 'Stepper drivers', 'Sensors'],
  },
  // PENDING APPROVAL: these come from 🟡 Mara work (DDS bridge, secure boot,
  // GPS, radio link, multi-lid). Add them once that work is approved:
  //   DDS (CycloneDDS, Fast DDS), Ansible, Secure Boot / UEFI / LUKS,
  //   GNSS/RTK (u-blox), MAVLink, PX4, QGroundControl
  //
  // TODO(Chloe): these were on the old site but aren't in the resume doc.
  // Confirm before adding back: HTML, CSS, Node.js, Express, REST APIs,
  // PostgreSQL, FastAPI, Vite, Tailwind CSS, Docker Compose, Arduino, FluidSynth.
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
                {group.skills.map((skill, i) => (
                  <span key={skill}>
                    {skill}
                    {i < group.skills.length - 1 && (
                      <span className="text-signal px-2" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
