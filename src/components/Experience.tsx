import { useState } from 'react';

// Work history as an editorial list: dates on the left, role on the right,
// a few bullets visible, "more" expands in place. Margin notes pull out the
// numbers (only metrics backed by resume-agent-documentation.md §12).

type Entry = {
  type: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  metrics: string[];
  details: {
    location?: string;
    responsibilities?: string[];
    projectDetails?: string[];
    achievements?: string[];
    technologies?: string[];
    recognition?: string;
    impact?: string;
  };
};

export function Experience() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const experiences: Entry[] = [
    // Mara bullets come only from ✅ items in resume-agent-documentation.md.
    // 🟡 items (DDS bridge, radio-link fixes, secure boot, GPS, etc.) stay off
    // the public site until manager approval.
    {
      type: 'work',
      title: 'Robotics Software Engineer',
      metrics: ['~0.4 s actuation', '1.4–1.5× faster INT8', '−1.3 s video latency'],
      organization: 'Mara Inc',
      period: 'Sept 2026 - Present',
      description:
        'Software for a drone launcher: real-time firmware, edge ML inference, video streaming and API tooling.',
      details: {
        // TODO(Chloe): confirm this location is OK to show.
        location: 'San Francisco, California, United States',
        responsibilities: [
          'Designed and built real-time embedded firmware (C, FreeRTOS, STM32) with a ROS 2 action server and status interface; moved step generation to hardware timer interrupts, removing timing jitter and cutting actuation time to ~0.4 s.',
          'Debugged a firmware crash by decoding the fault address with addr2line, tracing it to a dangling pointer to stack memory.',
          'Optimized model inference with INT8 quantization in TensorRT on edge GPUs (1.4–1.5× faster); diagnosed a quantization failure caused by calibration clipping and recovered accuracy to within 0.03 F1 of full precision.',
          'Cut 1.3 s of latency from a multithreaded, unit-tested ROS 2 video node by replacing a buffering decoder with ffmpeg.',
          'Built a gRPC/Protobuf code-generation pipeline (buf) producing Python, TypeScript, Go and C++ SDKs, with CI/CD (GitHub Actions, Docker) for build checks and versioned release artifacts.',
          'Automated provisioning of embedded Linux boards with a reproducible Bash tool (~5–10 min per board).',
        ],
        technologies: [
          'C',
          'C++',
          'Python',
          'FreeRTOS',
          'STM32',
          'ROS 2',
          'micro-ROS',
          'TensorRT',
          'ffmpeg',
          'gRPC',
          'Docker',
          'GitHub Actions',
        ],
        impact:
          'Cut lid actuation to ~0.4 s, made edge inference 1.4–1.5× faster with INT8, and removed 1.3 s of video latency.',
      },
    },
    {
      type: 'work',
      title: 'AI Engineer',
      metrics: ['+350% tracking AUC', '−97% dataset prep', '~$100K saved (est.)'],
      organization: 'Mara Inc',
      period: 'Jan - May 2026',
      description:
        'ML and data work for drone detection and tracking: model training, loss design, simulation and dataset tooling.',
      details: {
        // TODO(Chloe): confirm this location is OK to show.
        location: 'San Francisco, California, United States',
        responsibilities: [
          "Improved a transformer-based tracking model's success rate (AUC) by 350% by designing a custom loss function (asymmetric loss, CIoU with size penalties, label smoothing) and drift-guarded template updates; shipped to production.",
          'Built a Python CLI that cut dataset preparation time by 97%, saving an estimated $100K, using statistical analysis of telemetry to detect usable segments, linear interpolation, and coordinate transforms to auto-generate labels.',
          'Refactored the tool into a modular MVC architecture after code review; auto-generated Sphinx docs from docstrings.',
          'Trained and benchmarked RF-DETR object detection models with MLflow experiment tracking, and generated synthetic training data in Isaac Sim to improve robustness.',
          'Generated hundreds of labeled UAV training scenarios by building custom Isaac Sim environments with URDF-modeled objects and RL-driven robot behaviors, improving model robustness.',
          'Delivered an autonomous system field deployment in 3 days for a high-stakes investor demo, owning software setup, hardware bring-up and live debugging.',
        ],
        technologies: [
          'Python',
          'PyTorch',
          'NumPy',
          'MLflow',
          'Isaac Sim',
          'ROS 2',
          'Docker',
          'Sphinx',
        ],
        impact:
          'Raised tracking success rate (AUC) by 350% in production and cut dataset prep time by 97% (~$100K estimated savings).',
      },
    },
    {
      type: 'work',
      title: 'AI Project Developer',
      metrics: ['team of 5'],
      organization: 'Avanade',
      period: 'May - August 2025',
      description:
        'Built an AI-powered browser safety prototype by leading product design, integrating machine learning with Azure AI services, and delivering scam-detection workflows for end users.',
      details: {
        location: 'Toronto, Ontario, Canada',
        responsibilities: [
          'Led a team of 5 to design and present TrustScan, a browser extension that detected fraudulent web activity and translated model outputs into a user-facing product concept.',
          'Integrated a supervised logistic regression model with Azure AI Language to generate chatbot-based scam warnings for suspicious content and browsing behavior.',
          'Combined machine learning and cloud AI tooling into a practical safety-focused workflow, demonstrating how AI could be applied to real-world fraud detection.',
        ],
        technologies: [
          'Azure AI',
          'Machine Learning',
          'Cloud Computing',
        ],
        impact:
          'Designed a fraud-detection AI product through leadership, applied ML design, and cloud-based language tooling.',
      },
    },
    {
      type: 'work',
      title: 'AI & Software Engineer',
      metrics: ['−70% upload time'],
      organization: 'Wilson & Wilbur Consulting Group',
      period: 'Sept 2024 - July 2025',
      description:
        'Built backend and retrieval infrastructure for an AI chatbot by integrating language models into containerized services, deploying a RAG pipeline, and scaling automated data ingestion workflows.',
      details: {
        location: 'Toronto, Ontario, Canada',
        responsibilities: [
          'Integrated the LLaMA 1B model into a Dockerized chat service, exposing API endpoints for conversation, summarization, and reasoning while designing prompts, evaluating outputs, and implementing unit tests.',
          'Developed a RAG pipeline and deployed a vector data service using Milvus and Docker, implementing CRUD operations on vector databases to improve efficiency and reduce upload time by 70%.',
          'Built and deployed a web scraper using Selenium and Beautiful Soup, leveraging multithreading and multiprocessing to scale automated data ingestion, deploying to AWS EC2, and optimizing extraction with SQL and SQLite.',
        ],
        technologies: [
          'Python',
          'AWS',
          'Docker',
          'Milvus',
          'Selenium',
          'Beautiful Soup',
          'SQLite',
          'SQL',
          'Transformers',
        ],
        impact:
          'Improved chatbot retrieval quality and backend efficiency by combining containerized LLM services, vector search, and scalable ingestion infrastructure.',
      },
    },
    {
      type: 'work',
      title: 'Assistant Director & Math and English Tutor',
      metrics: ['80+ students'],
      organization: 'Kumon Math and Reading Center',
      period: 'August 2022 - April 2024',
      description:
        'Supported large-scale individualized tutoring operations by tailoring instruction for dozens of students, tracking academic progress, and communicating closely with families.',
      details: {
        location: 'Maryland, USA',
        responsibilities: [
          'Led one-on-one tutoring for 80+ math and English students, adapting instruction and learning plans based on individual progress, needs, and performance.',
          'Tracked academic development over time and adjusted assignments and support strategies to help students build stronger long-term study habits and subject mastery.',
          'Communicated regularly with families by sharing progress updates, addressing concerns, and offering targeted advice to support improvement outside tutoring sessions.',
        ],
        technologies: [
          'Teaching',
          'Student Engagement',
          'Communication',
          'Management', 
          'Customer Service'
        ],
        impact:
          'Delivered personalized academic support at scale and building customer relations while strengthening mentorship, communication and instructional leadership skills.',
      },
    },
    {
      type: 'work',
      title: 'AI & Robotics Project Member',
      metrics: [] as string[],
      organization: 'University of Maryland',
      period: 'July 2022',
      description:
        'Built a robotics perception and navigation system by combining object detection, semantic mapping, and real-time model integration for ground robot autonomy.',
      details: {
        location: 'College Park, Maryland, USA',
        projectDetails: [
          'Developed an object detection and semantic navigation system using Python, PyTorch, TensorFlow, and ROS2 to support real-time perception, tracking, and probabilistic semantic mapping for ground robot navigation.',
          'Built a custom neural network and integrated YOLOv5 with a custom binary classification model to enable real-time detection and adaptive navigation decisions.',
          'Fused sensor and visual input data using pandas to streamline data handling and support more reliable downstream robotics behavior.',
        ],
        technologies: [
          'Python',
          'PyTorch',
          'TensorFlow',
          'ROS2',
          'YOLOv5',
          'Pandas',
        ],
        recognition:
          'Presented a live demonstration to postdoctoral researchers and faculty.',
      },
    },
    {
      type: 'work',
      title: 'Team Lead (Competition)',
      metrics: ['team of 8'],
      organization: 'NASA Human Exploration Rover Challenge',
      period: 'May 2021 - Feb 2022',
      description:
        'Led an 8-person engineering team in designing a Mars rover for NASA’s Human Exploration Rover Challenge, coordinating technical work and presenting the final design to NASA engineers.',
      details: {
        location: 'Washington, DC, USA',
        responsibilities: [
          'Led a team of 8 students through rover planning, technical coordination, and design execution for NASA’s Human Exploration Rover Challenge.',
          'Helped design a rover capable of handling simulated Martian terrain while balancing performance, durability, and project constraints.',
          'Presented the project and comprehensive design review to NASA engineers, communicating both the engineering decisions and team approach behind the rover.',
        ],
        achievements: [
          // 'Successfully completed the obstacle course with 85% efficiency.',
          // 'Built a rover that withstood 500+ lbs load-capacity testing.',
          'Received positive feedback from NASA engineers on the design review.',
        ],
        technologies: [
          'Leadership',
          'Mechanical Design',
          'Project Management',
          'Engineering Communication',
          'Team Coordination',
          'Building'
        ],
      },
    },
  ];


  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16">
        <header className="mb-12 sm:mb-16 flex items-baseline gap-4">
          <h2 className="font-serif font-normal text-4xl sm:text-5xl text-ink tracking-tight">Work</h2>
        </header>

        <ol className="border-t border-rule">
          {experiences.map((exp, index) => {
            const bullets = [
              ...(exp.details.responsibilities ?? exp.details.projectDetails ?? []),
              ...(exp.details.achievements ?? []),
              ...(exp.details.recognition ? [exp.details.recognition] : []),
            ];
            const isOpen = !!open[index];
            const panelId = `exp-more-${index}`;

            return (
              <li
                key={`${exp.title}-${index}`}
                className="grid gap-x-10 gap-y-2 py-8 border-b border-rule md:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft md:pt-2">
                  {exp.period}
                </p>

                <div className="min-w-0 max-w-[42rem]">
                  <h3 className="font-serif text-[1.65rem] leading-tight text-ink">
                    {exp.title}
                    <span className="text-ink-soft"> · {exp.organization}</span>
                  </h3>

                  <p className="mt-2 text-lg leading-relaxed text-ink-soft">{exp.description}</p>

                  {exp.metrics.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.8rem] text-signal">
                      {exp.metrics.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}

                  {isOpen && (
                    <div id={panelId} className="mt-5 space-y-4">
                      <ul className="space-y-3 text-lg leading-relaxed text-ink">
                        {bullets.map((b, i) => (
                          <li key={i} className="relative pl-5">
                            <span className="absolute left-0 top-[0.75em] h-px w-2.5 bg-ink-soft" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="font-mono text-xs leading-relaxed text-ink-soft">
                        {exp.details.location && <>{exp.details.location}<br /></>}
                        {exp.details.technologies && exp.details.technologies.length > 0 && (
                          <>Tools: {exp.details.technologies.join(' · ')}</>
                        )}
                      </p>
                    </div>
                  )}

                  {bullets.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setOpen((o) => ({ ...o, [index]: !o[index] }))}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-soft hover:text-signal transition-colors"
                    >
                      {isOpen ? '− hide details' : '+ details'}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
