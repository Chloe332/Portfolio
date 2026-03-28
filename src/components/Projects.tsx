import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star, X, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { useState } from 'react';
import { projectImages } from '../imports/projectImages';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [videoModalProject, setVideoModalProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'NuanceEdge AI Chatbot',
      description:
        'Built a generative AI chatbot. Designed an abstract retrieval API and deployed a Retrieval-Augmented Generation (RAG) pipeline.',
      image: projectImages.watAI,
      tags: ['Python', 'AWS', 'MILVUS', 'Docker', 'RAG', 'LLaMA'],
      github: null,
      demo: null,
      demoVideo: null,
      featured: true,
      details: {
        overview:
          'An AI-powered chatbot designed to make scientific research more accessible to policymakers by combining retrieval and generation to surface relevant, grounded information from complex research corpora.',
        role: 'AI Developer & Backend Engineer',
        duration: 'September 2024 - July 2025',
        teamSize: '8 members',
        keyFeatures: [
          'Built a Retrieval-Augmented Generation (RAG) pipeline to improve response grounding and retrieval quality',
          'Designed an abstract retrieval API for fetching relevant scientific papers',
          'Integrated MILVUS for semantic search over scientific documents',
          'Containerized services with Docker for scalable deployment',
          'Integrated LLaMA and Cohere-based components for natural language understanding',
          'Used AWS infrastructure to support hosting and storage',
        ],
        technicalDetails: [
          'Built a custom Python API using FastAPI to support retrieval and generation workflows',
          'Implemented MILVUS as a vector database for semantic similarity search',
          'Developed a RAG pipeline combining document retrieval and response generation',
          'Used Cohere embeddings for document vectorization',
          'Containerized services with Docker Compose for deployment and reproducibility',
          'Used AWS S3 for document storage and retrieval',
        ],
        challenges: [
          'Balancing retrieval accuracy with response speed in a production-oriented pipeline',
          'Optimizing vector embeddings for scientific terminology and domain-specific language',
          'Managing large document corpora efficiently',
          'Maintaining consistent performance across different query types',
        ],
        outcomes: [
          'Deployed a working chatbot',
          'Improved retrieval of relevant scientific abstracts for policy-focused queries',
          'Built a more efficient workflow for accessing scientific research',
        ],
      },
    },
    {
      title: 'Navi - Object Detection for Robotic Navigation',
      description:
        'Built a real-time object detection pipeline for autonomous robotic navigation. Developed a vision system for obstacle recognition.',
      image: projectImages.navi1,
      tags: ['Python', 'TensorFlow', 'ROS2', 'YOLOv5', 'Pandas'],
      github: null,
      demo: null,
      demoVideo: `${import.meta.env.BASE_URL}videos/navi.mp4`,
      featured: true,
      details: {
        overview:
          'A robotic semantic navigation project focused on helping robots understand their environment by detecting objects, classifying rooms, generating maps, and following navigation commands in simulation.',
        role: 'AI Developer and Researcher',
        duration: '2022',
        keyFeatures: [
          'Used ROS to simulate robot behavior in a virtual environment',
          'Applied YOLO-based object localization and classification',
          'Used object labels to help classify rooms',
          'Built toward semantic navigation by combining object detection, mapping, and memory',
          'Used TurtleBot2 sensors and simulated environment data for navigation tasks',
          'Demonstrated navigation to a target room in a virtual environment',
        ],
        technicalDetails: [
          'Worked with ROS to simulate robotic navigation before real-world deployment',
          'Used TurtleBot2 as the robot platform in simulation',
          'Applied image processing concepts such as grayscale conversion and image pyramids',
          'Used YOLO for object localization and confidence-based filtering',
          'Used machine learning-based object classification to identify detected objects',
          'Combined object, room, and boundary information to support map-based navigation',
        ],
        challenges: [
          'Helping a robot interpret both its surroundings and navigation commands semantically',
          'Building and testing navigation workflows in simulation before physical deployment',
          'Making room understanding and object memory useful for downstream navigation tasks',
        ],
        outcomes: [
          'Contributed to a robotic semantic navigation project in simulation',
          'Helped build a system capable of detecting objects, labeling rooms, and remembering environment layout',
          'Demonstrated virtual navigation to a requested destination using stored map information',
        ],
      },
    },
    {
      title: 'NASA Human Exploration Rover Challenge',
      description:
        'Develop a human-powered rover under tight fabrication constraints for NASA Human Exploration Rover Challenge',
      image: projectImages.nasaShort,
      tags: ['Systems Design', 'Mechanical Engineering', 'Safety Analysis', 'Prototyping', 'Teamwork'],
      github: null,
      demo: null,
      demoVideo: null,
      featured: true,

      details: {
        overview:
          'Designed a competition rover for the 2022 NASA Human Exploration Rover Challenge. The team had no machine shop and limited manufacturing capability, the design prioritized simplicity, flexibility, off-the-shelf components, and ease of repair while still addressing performance, safety, and mission-task requirements.',
        role: 'Rover Team Member',
        duration: '2022',
        keyFeatures: [
          'Designed a 2-wheel, rear-wheel-drive rover with a side-by-side crew layout and belt-drive drivetrain',
          'Prioritized simple, replaceable, off-the-shelf components to support manufacturability and rapid repairs',
          'Developed a detachable steering assembly to support competition readiness and transport requirements',
          'Designed mission-task components including a solar-circuit deployment panel and a liquid sample retrieval tool',
          'Built around competition constraints such as clearance, assembly requirements, and dimensional limits',
          'Integrated safety planning and risk mitigation directly into the design process',
        ],

        technicalDetails: [
          'Used a pine wood chassis with steel bracings and steel mounting rails to balance simplicity, flexibility, and structural support',
          'Designed a shared-axle drivetrain so both drivers could synchronize power input, with pulley sizing used to adjust mechanical advantage',
          'Adapted the steering system from bicycle front-end components and steering linkage',
          'Designed lightweight wheels using plywood, insulation foam, bicycle hub components, and grip-tape tread for traction',
          'Planned task hardware for solar-circuit deployment and sample retrieval while minimizing contamination risk',
          'Used prototype-informed performance reasoning, regular requirement checks, and post-test inspections throughout the build plan',
        ],

        challenges: [
          'Designing under limited manufacturing capability and without access to a machine shop',
          'Balancing strength, weight, maneuverability, simplicity, and ease of repair across the full rover system',
          'Accounting for drivetrain belt slip, rearward center of mass, and lack of suspension in performance planning',
          'Meeting competition requirements while designing for real assembly, testing, and mission-task execution',
          'Identifying likely failure modes early and building mitigation plans into the design',
        ],

        outcomes: [
          'Produced a complete rover design spanning vehicle systems, mission-task hardware, safety analysis, and project planning',
          'Built a design centered on simplicity, flexibility, and maintainability under real fabrication constraints',
          'Developed a requirements-aware engineering workflow with regular validation checks after testing',
          'Presented a formal engineering design review for a NASA competition project and earning commendation for high-caliber engineering analysis and design maturity',
        ],
      },
    },
    {
      title: "Published Educational Children's Books",
      description:
        'Wrote and graphically illustrated two internationally published educational children’s books focused on vocabulary building.',
      image: projectImages.books,
      tags: ['Writing', 'Illustration', 'Education', 'Publishing'],
      github: null,
      demo: null,
      demoVideo: null,
      customLinks: [
        {
          label: 'Book 1',
          href: 'https://www.amazon.com/ABC-Animals-French-Educational-Bilingual/dp/B0CMHDSWN2',
        },
        {
          label: 'Book 2',
          href: 'https://www.amazon.com/Early-Scholars-Learning-My-First/dp/B0CM1P8GP3',
        },
      ],
      featured: false,
      details: {
        overview:
          "Two bilingual educational children's books designed to help young learners build vocabulary through engaging illustrations and simple, memorable text.",
        role: 'Author & Illustrator',
        duration: '2020-2024',
        teamSize: 'Individual (with publishing support)',
        keyFeatures: [
          'Bilingual content in French and English',
          'Graphically designed illustrations',
          'Age-appropriate vocabulary (ages 2-6)',
          'Interactive learning exercises',
          'Available in print and digital formats',
          'International distribution',
        ],
        technicalDetails: [
          'Color theory applied for visual appeal to young children',
          'Educational content made to be engaged and fun',
          'eBook formats for Kindle and other platforms and print ready format',
        ],
        outcomes: [
          'Published and distributed internationally on Amazon',
          // 'Used in bilingual homeschool curricula',
          'Developed valuable skills in creative project management',
          'Further explored passion for making education accessible',
        ],
      },
    },
    {
      title: 'Synthesizer and Musical Keyboard',
      description:
        'Built a real-time embedded music system on a Raspberry Pi Zero 2 W that converted physical button presses into live audio output.',
      image: projectImages.synth,
      tags: ['C', 'Raspberry Pi Zero 2 W', 'GPIO', 'WiringPi', 'FluidSynth', 'Linux'],
      github: null,
      demo: null,
      demoVideo: null,
      featured: false,

      details: {
        overview:
          'A hardware-software synthesizer project that turned presses on 13 physical buttons into musical notes played in real time through a speaker. Built on a Raspberry Pi Zero 2 W, the system read GPIO signals from a breadboard keyboard, converted them into note data in C, and passed them through a custom synthesizer interface wrapping FluidSynth. The final result was a functioning one-octave keyboard spanning the fifth octave, with additional extensions including Bluetooth speaker connectivity and a custom 3D-printed case.',

        role: 'Software / Embedded Systems Team Member',

        duration: '2024',

        teamSize: 'Collaborative team project',

        keyFeatures: [
          'Built a 13-button keyboard capable of playing the full fifth octave in real time',
          'Used Raspberry Pi GPIO input to detect physical button presses and releases',
          'Converted hardware input into note events and routed them to a software synthesizer',
          'Wrapped the lower-level FluidSynth API in a custom synthesizer interface',
          'Added runtime SoundFont selection to support multiple synthesized instruments',
          'Extended the system with Bluetooth speaker support and a custom 3D-printed enclosure',
        ],

        technicalDetails: [
          'Implemented the system in C to support low-level control and real-time-sensitive audio behavior',
          'Used WiringPi to register GPIO interrupt callbacks for keyboard input',
          'Designed the execution flow to initialize the synthesizer, register note handlers, listen for GPIO events, and trigger note on/off behavior on button press and release',
          'Converted GPIO input into musical note data based on note position and octave',
          'Structured the codebase into separate modules for initialization, GPIO handling, note parsing, and synthesis logic',
          'Added a macro-based callback approach so each GPIO pin could forward its pin index into a unified event handler despite WiringPi callback limitations',
          'Used SoundFont files at runtime to switch between synthesized instruments such as piano, bass, and drums',
          'Configured Bluetooth audio support on the Raspberry Pi, ultimately switching from PulseAudio to PipeWire to resolve sound device issues',
        ],

        challenges: [
          // 'Debugged incorrect early hardware wiring that caused notes to be processed incorrectly',
          // 'Worked around messy breadboard wiring that made troubleshooting more difficult during assembly',
          'Solved a callback-design limitation in WiringPi, where interrupt handlers did not directly identify which pin triggered the event',
          // 'Addressed issues where multiple button presses were not initially recognized as distinct notes',
          'Resolved Raspberry Pi audio configuration problems that interfered with Bluetooth speaker support',
          'Worked within practical time and budget limits that made automated end-to-end hardware/audio testing infeasible',
        ],

        outcomes: [
          'Delivered a functioning real-time keyboard that played sound through a speaker when buttons were pressed',
          // 'Successfully met the project’s minimum viable goal of building a one-octave keyboard on Raspberry Pi hardware',
          'Extended the original scope by adding Bluetooth speaker connectivity and a custom 3D-printed case',
          'Demonstrated the system by performing songs across multiple instrument presets',
          'Used manual hardware and audio testing to validate note playback, button events, and chord behavior',
          'Built hands-on experience with embedded programming, interrupt-driven input handling, Linux audio tooling, and hardware-software system integration',
        ],
      },
    },
  ];

  const openProject = (index: number) => setSelectedProject(index);
  const closeProject = () => {
    setSelectedProject(null);
    setVideoModalProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200"
              onClick={() => openProject(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProject(index);
                }
              }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                  <Star size={14} />
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center gap-2 text-sm font-semibold">
                    View details
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 flex-wrap">
                  {project.customLinks?.length ? (
                    project.customLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">{link.label}</span>
                      </motion.a>
                    ))
                  ) : (
                    <>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}

                      {project.demoVideo ? (
                        <motion.button
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setVideoModalProject(index);
                          }}
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Demo</span>
                        </motion.button>
                      ) : project.demo ? (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative"
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`Project details: ${projects[selectedProject].title}`}
              >
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <motion.button
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 hover:bg-white/30 rounded-lg"
                    onClick={closeProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close project details"
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-white/85 text-sm font-medium">
                      {projects[selectedProject].details.role}
                      {/* {projects[selectedProject].details.role} •{' '}
                      {projects[selectedProject].details.teamSize} */}
                    </p>
                  </div>
                </div>

                <div className="px-8 py-6 space-y-6">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h4 className="text-lg font-bold text-gray-800">
                        Tech Stack
                      </h4>
                      <span className="text-sm text-gray-500">
                        Tools & languages
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-900 text-white text-sm font-semibold transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800">
                      Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {projects[selectedProject].details.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].details.keyFeatures.map(
                        (feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                      Technical Implementation
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].details.technicalDetails.map(
                        (detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <span className="text-purple-600 mt-1">▸</span>
                            <span>{detail}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {projects[selectedProject].details.challenges?.length ? (
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
                        ⚡ Challenges Overcome
                      </h4>
                      <ul className="space-y-2">
                        {projects[selectedProject].details.challenges.map((challenge, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-orange-600 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2">
                      🎯 Outcomes & Impact
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].details.outcomes.map(
                        (outcome, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4 flex-wrap">
                    {projects[selectedProject].customLinks?.length ? (
                      projects[selectedProject].customLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={20} />
                          <span>{link.label}</span>
                        </motion.a>
                      ))
                    ) : (
                      <>
                        {projects[selectedProject].github && (
                          <motion.a
                            href={projects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github size={20} />
                            <span>View Code</span>
                          </motion.a>
                        )}

                        {projects[selectedProject].demoVideo ? (
                          <motion.button
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setVideoModalProject(selectedProject)}
                          >
                            <ExternalLink size={20} />
                            <span>View Demo</span>
                          </motion.button>
                        ) : projects[selectedProject].demo ? (
                          <motion.a
                            href={projects[selectedProject].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink size={20} />
                            <span>View Demo</span>
                          </motion.a>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {videoModalProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden"
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">
                    {projects[videoModalProject].title} Demo
                  </h3>

                  <motion.button
                    onClick={() => setVideoModalProject(null)}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="bg-black">
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[80vh]"
                    src={projects[videoModalProject].demoVideo ?? undefined}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}