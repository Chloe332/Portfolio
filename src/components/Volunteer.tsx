import { useState } from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, X } from 'lucide-react';
import { FeatureGrid, type FeatureItem } from './ui/feature-grid';

export interface VolunteerItem {
  organization: string;
  role: string;
  period: string;
  duration: string;
  location?: string;
  description: string;
  highlights?: string[];
  skills?: string[];
}

interface VolunteeringSectionProps {
  title?: string;
  subtitle?: string;
  items?: VolunteerItem[];
}

const defaultVolunteerItems: VolunteerItem[] = [
  {
    organization: 'Smithsonian Education',
    role: 'Teaching Assistant, Educational Summer Camp',
    period: 'Jul 2023 · 1 month',
    duration: '82 hrs',
    location: 'United States of America',
    description:
      'Supported Smithsonian summer camps as a teaching assistant, helping manage daily programming and guide children through educational activities.',
    highlights: [
      'Supervised 14–20 children throughout the entire day (8hours) alongside one other volunteer',
      'Supported full-day camp operations from 8:30 am to 4:45 pm across two weeks',
      'Helped maintain a safe, engaging, and well-supported learning environment throughout the day',
    ],
    skills: ['Youth Education', 'Child Supervision', 'Teaching', 'Camp Management'],
  },
  {
    organization: 'UPchieve',
    role: 'Science, Math, English & SAT Tutor',
    period: 'Aug 2021 – May 2024',
    duration: '2 yrs 10 mos',
    location: 'Remote',
    description:
      'Volunteered as an online tutor for low-income students, providing academic support across STEM, English, and SAT preparation through UPchieve’s free tutoring platform.',
    highlights: [
      'Certified to tutor Math, Reading, SAT Prep, Calculus AB, and Essay Writing',
      'Helped expand access to free, high-quality academic support for students from under-resourced communities',
    ],
    skills: ['Tutoring', 'SAT Prep', 'Calculus', 'Essay Writing', 'Poverty Alleviation'],
  },
  {
    organization: 'Turning the Page',
    role: 'Book Drive Coordinator',
    period: 'Feb 2023 – Feb 2024',
    duration: '1 yr 1 mo',
    location: 'United States of America',
    description:
      'Planned and ran a community book drive in support of Turning the Page, helping expand access to books through local outreach and donation efforts.',
    highlights: [
      'Coordinated communication among the nonprofit, donors, and community members',
      'Led donor outreach and organized book collection logistics from start to finish',
    ],
    skills: ['Event Coordination', 'Donor Outreach', 'Community Organizing', 'Literacy'],
  },
  {
    organization: 'Washington International School',
    role: 'Teaching Assistant, Summer Institute for Teachers',
    period: 'Jun 2021 – Aug 2022',
    duration: '1 yr 3 mos',
    location: 'United States of America',
    description:
      'Supported WISSIT, a professional development program connecting DC-area educators with Project Zero methods for integrating student thinking across disciplines.',
    highlights: [
      'Managed attendance, technical support, and materials distribution across program sessions',
      'Helped ensure smooth day-to-day operations in an educator-facing professional learning environment',
    ],
    skills: ['Education Support', 'Project Zero', 'Program Operations', 'Technical Assistance'],
  },
];

export default function VolunteeringSection({
  title = 'Volunteering',
  subtitle = "ways I’ve supported my community through education, mentorship, and outreach",
  items = defaultVolunteerItems,
}: VolunteeringSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? items[selectedIndex] : null;

  const features: FeatureItem[] = items.map((item, index) => ({
    id: `${item.organization}-${index}`,
    icon: HeartHandshake,
    title: item.role,
    description: (
      <>
        <span className="font-bold text-gray-800">{item.organization}</span>
        {' · '}
        {item.period}.
        <br />
        {item.description}
      </>
    ),
    onClick: () => setSelectedIndex(index),
  }));

  return (
    <>
      <FeatureGrid
        id="volunteering"
        features={features}
        sectionTitle={title}
        sectionSubtitle={subtitle}
      />

      {/* Detailed View Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start rounded-t-2xl z-10">
              <div className="pr-8">
                <h3 className="text-2xl font-bold text-gray-800">{selected.role}</h3>
                <p className="text-gray-600 mt-1">
                  {selected.organization} • {selected.period}
                  {selected.duration ? ` (${selected.duration})` : ''}
                </p>
                {selected.location && (
                  <p className="text-sm text-gray-500 mt-1">📍 {selected.location}</p>
                )}
              </div>
              <motion.button
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setSelectedIndex(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="px-8 py-6 space-y-6">
              <p className="text-gray-600 leading-relaxed">{selected.description}</p>

              {selected.highlights && selected.highlights.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#2E6F40] to-[#68BA7F] rounded-full" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="text-[#2E6F40] mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.skills && selected.skills.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-[#2E6F40] to-[#68BA7F] rounded-full" />
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#2E6F40]/30 bg-[#2E6F40]/10 px-3 py-1 text-xs font-medium text-[#2E6F40]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
