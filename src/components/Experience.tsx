import { motion } from 'motion/react';
import { Briefcase, Award, X } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      type: 'work',
      title: 'Machine Learning and Robotics Software Engineer',
      organization: 'Mara Inc',
      period: 'Jan - May 2026',
      description:
        'Improved drone perception and data infrastructure by shipping tracking-model upgrades, building scalable simulation pipelines, and automating dataset creation for autonomy workflows.',
      icon: Briefcase,
      details: {
        location: 'San Francisco, California, United States',
        responsibilities: [
          'Improved transformer-based drone tracking performance by 350% by redesigning the MixFormer scoring module with custom loss tuning, label smoothing, fine-tuned weights, and template-update safeguards, then shipping the improvements into the production pipeline.',
          'Generated hundreds of labeled UAV training scenarios by developing Isaac Sim environments with URDF-modeled assets and robotics behaviors, accelerating synthetic data creation and improving model robustness on hard edge cases.',
          'Reduced drone dataset preparation time by 97% by building an internal dataset management CLI that automated GPS/NavLite time-range detection, clip generation, spherical-coordinate labeling, and metadata updates for training pipelines.',
          'Built perception tooling that supported selective object detection and structured export of training data, making it easier to create high-quality labeled datasets for downstream robotics and ML systems.',
          'Strengthened experimentation and evaluation workflows by using MLflow, benchmark-driven iteration, and simulation-based testing to improve tracking reliability before deployment.',
        ],
        technologies: [
          'Python',
          'PyTorch',
          'NumPy',
          'ROS',
          'Isaac Sim',
          'Docker',
          'MLflow',
        ],
        impact:
          'Train and Improved transformer-based tracking model\'s reliability performance by 350%, which was placed in company\'s main product and production pipeline.',
      },
    },
    {
      type: 'work',
      title: 'AI Project Developer',
      organization: 'Accenture & Microsoft Azure',
      period: 'May - August 2025',
      description:
        'Built an AI-powered browser safety prototype by leading product design, integrating machine learning with Azure AI services, and delivering scam-detection workflows for end users.',
      icon: Briefcase,
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
      organization: 'Wilson & Wilbur Consulting Group',
      period: 'Sept 2024 - July 2025',
      description:
        'Built backend and retrieval infrastructure for an AI chatbot by integrating language models into containerized services, deploying a RAG pipeline, and scaling automated data ingestion workflows.',
      icon: Briefcase,
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
      organization: 'Kumon Math and Reading Center',
      period: 'August 2022 - April 2024',
      description:
        'Supported large-scale individualized tutoring operations by tailoring instruction for dozens of students, tracking academic progress, and communicating closely with families.',
      icon: Briefcase,
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
      title: 'AI & Robotics # Member',
      organization: 'University of Maryland',
      period: 'July 2022',
      description:
        'Built a robotics perception and navigation system by combining object detection, semantic mapping, and real-time model integration for ground robot autonomy.',
      icon: Briefcase,
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
      title: 'NASA Team Co-Leader and Project Member',
      organization: 'NASA',
      period: 'May 2021 - Feb 2022',
      description:
        'Led an 8-person engineering team in designing a Mars rover for NASA’s Human Exploration Rover Challenge, coordinating technical work and presenting the final design to NASA engineers.',
      icon: Briefcase,
      details: {
        location: 'Marshall Space Flight Center, Huntsville, Alabama',
        responsibilities: [
          'Led a team of 8 students through rover planning, technical coordination, and design execution for NASA’s Human Exploration Rover Challenge.',
          'Helped design a rover capable of handling simulated Martian terrain while balancing performance, durability, and project constraints.',
          'Presented the project and comprehensive design review to NASA engineers, communicating both the engineering decisions and team approach behind the rover.',
        ],
        achievements: [
          // 'Successfully completed the obstacle course with 85% efficiency.',
          // 'Built a rover that withstood 500+ lbs load-capacity testing.',
          'Received positive feedback from many NASA engineers on the design review and engineering prowess.',
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

  const getColorByType = (type: string) => {
    switch (type) {
      case 'work':
        return 'purple';
      case 'achievement':
        return 'pink';
      default:
        return 'gray';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and accomplishments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-red-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const color = getColorByType(exp.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'md:text-right' : 'md:col-start-2'}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      onClick={() => setSelectedExperience(index)}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${color}-50 text-${color}-600 mb-3 text-sm font-medium`}
                      >
                        <Icon size={16} />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {exp.title}
                      </h3>
                      <p className={`text-${color}-600 font-medium mb-3`}>
                        {exp.organization}
                      </p>
                      <p className="text-gray-600 mb-3">{exp.description}</p>

                      {exp.details.technologies && (
                        <div
                          className={`flex flex-wrap gap-2 mb-4 ${
                            isEven ? 'md:justify-end' : ''
                          }`}
                        >
                          {exp.details.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-gray-900 text-white text-xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.details.technologies.length > 5 && (
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                              +{exp.details.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      )}

                      <button className={`text-sm text-${color}-600 hover:text-${color}-700 font-medium`}>
                        Learn More →
                      </button>
                    </motion.div>
                  </div>

                  {/* Icon in center (visible on desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-full flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detailed View Modal */}
        {selectedExperience !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start rounded-t-2xl z-10">
                <div className="pr-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {experiences[selectedExperience].title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {experiences[selectedExperience].organization} • {experiences[selectedExperience].period}
                  </p>
                  {experiences[selectedExperience].details.location && (
                    <p className="text-sm text-gray-500 mt-1">
                      📍 {experiences[selectedExperience].details.location}
                    </p>
                  )}
                </div>
                <motion.button
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setSelectedExperience(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="px-8 py-6 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {experiences[selectedExperience].description}
                </p>

                {experiences[selectedExperience].details.technologies && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h4 className="text-lg font-bold text-gray-800">Tech Stack</h4>
                      <span className="text-sm text-gray-500">Skills, Tools & Languages</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {experiences[selectedExperience].details.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-gray-900 text-white text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {experiences[selectedExperience].details.responsibilities && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].details.responsibilities.map(
                        (responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {experiences[selectedExperience].details.achievements && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-red-600 rounded-full"></span>
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].details.achievements.map(
                        (achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-pink-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {experiences[selectedExperience].details.projectDetails && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                      Project Details
                    </h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].details.projectDetails.map(
                        (detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

            

                {experiences[selectedExperience].details.skills && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experiences[selectedExperience].details.skills.map(
                        (skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {experiences[selectedExperience].details.recognition && (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4">
                    <h4 className="text-lg font-bold mb-2 text-gray-800 flex items-center gap-2">
                      🏆 Recognition
                    </h4>
                    <p className="text-gray-700">
                      {experiences[selectedExperience].details.recognition}
                    </p>
                  </div>
                )}

                {experiences[selectedExperience].details.impact && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                    <h4 className="text-lg font-bold mb-2 text-gray-800 flex items-center gap-2">
                      💡 Impact
                    </h4>
                    <p className="text-gray-700">
                      {experiences[selectedExperience].details.impact}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
