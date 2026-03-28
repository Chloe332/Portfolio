import { motion } from 'motion/react';
import { GraduationCap, X } from 'lucide-react';
import { useState } from 'react';

export function Education() {
  const [selectedEducation, setSelectedEducation] = useState<number | null>(null);

  const educationItems = [
    {
      title: 'Bachelor of Engineering in Honors Software Engineering',
      organization: 'University of Waterloo',
      period: '2024 - Present',
      description:
        'Honours Software Engineering Co-op with coursework in programming, data structures, databases, and formal logic. Awarded the University of Waterloo International Student Scholarship and President\'s Scholarship.',
      details: {
        location: 'Waterloo, Ontario, Canada',
        highlights: [
          'Accepted into Waterloo\'s highly competitive Software Engineering program',
          'Recipient of the International Student Scholarship (1 of 20 recipients)',
          'Recipient of the President\'s Scholarship for academic excellence',
          'Co-op program with 6 integrated work terms',
        ],
        coursework: [
          // 'CS 137: Programming Principles (C)',
          'CS 138: Data Abstraction and Implementation & Object-Oriented Programming (C++)',
          'CS 241: Sequential Programs (C++)',
          'CS 240: Data Structures and Data Management',
          'CS 348: Database Management',
          'SE 212: Logic and Computation (Formal Logic)',
          'MATH 115: Linear Algebra',
          'MATH 119: Calculus III (Advanced Multivariable Approximation and Analysis)',
          'MATH 239: Combinatorics',
          'STAT206: Statistics',
          'ECE 222: Digital Computers (Assembly)'
        ],
      },
    },
    {
      title: 'International Baccalaureate Bilingual Diploma',
      organization: 'Washington International School',
      period: '2022 - 2024',
      description:
        'Completed the IB Bilingual Diploma with additional higher-level classes of Physics, Mathematics Analysis, Chemistry, and Economics, while earning First Honors every semester.',
      details: {
        location: 'Washington DC, USA',
        highlights: [
          'Earned the IB Bilingual Diploma',
          'Awarded First Honors every semester for 4 years',
          'Completed an Extended Essay on the economic analysis of child poverty',
          'Leader of Physics Club',
          'Elected Student Government Representative',
          'Teaching Assistant and French Tutor',
          'Participated in Debate Team and Mock Trial',
          'Created a film on gender inequality',
        ],
      },
    },
    {
      title: 'Mathematical Modeling of Finance: An Introduction to Quantitative Analysis',
      organization: 'Brown University',
      period: '2021',
      description:
        'Completed Brown University coursework in mathematical modeling for finance, strengthening quantitative analysis and problem-solving skills.',
      details: {
        location: 'Brown University',
        highlights: [
          'Completed coursework focused on mathematical modeling in finance',
          'Strengthened quantitative analysis skills through finance-based problem solving',
        ],
      },
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and achievements
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />

          <div className="space-y-8">
            {educationItems.map((edu, index) => (
              <motion.div
                key={`${edu.title}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8 top-8 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <GraduationCap size={16} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setSelectedEducation(index)}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-3 text-sm font-medium">
                      <GraduationCap size={16} />
                      {edu.period}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {edu.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {edu.organization}
                    </p>
                    <p className="text-gray-600 mb-3">{edu.description}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Details →
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed View Modal */}
        {selectedEducation !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEducation(null)}
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
                    {educationItems[selectedEducation].title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {educationItems[selectedEducation].organization} • {educationItems[selectedEducation].period}
                  </p>
                  {educationItems[selectedEducation].details.location && (
                    <p className="text-sm text-gray-500 mt-1">
                      📍 {educationItems[selectedEducation].details.location}
                    </p>
                  )}
                </div>
                <motion.button
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setSelectedEducation(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="px-8 py-6 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {educationItems[selectedEducation].description}
                </p>

                {educationItems[selectedEducation].details.highlights && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {educationItems[selectedEducation].details.highlights.map(
                        (highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {educationItems[selectedEducation].details.coursework && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                      Coursework
                    </h4>
                    <ul className="space-y-2">
                      {educationItems[selectedEducation].details.coursework.map(
                        (course, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{course}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {educationItems[selectedEducation].details.achievements && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-red-600 rounded-full"></span>
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {educationItems[selectedEducation].details.achievements.map(
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
