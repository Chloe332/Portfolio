import { motion } from 'motion/react';
import { HeartHandshake, CalendarDays, MapPin, Clock } from 'lucide-react';

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

function VolunteerCard({ item }: { item: VolunteerItem }) {
  return (
    <div
      className="
        group shrink-0
        w-[85vw] sm:w-[400px]
        rounded-3xl border border-blue-100 bg-white/90 p-6
        shadow-lg shadow-blue-100/40
        transition-all duration-300
        hover:shadow-xl hover:border-purple-200 hover:-translate-y-1
        flex flex-col
        mx-3
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-blue-500 tracking-wide uppercase">
            {item.organization}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900 leading-snug">
            {item.role}
          </h3>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
          <HeartHandshake className="h-5 w-5" />
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-500">
        <div className="flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5 text-blue-500 shrink-0" />
          <span>{item.period}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-purple-500 shrink-0" />
          <span className="font-medium text-purple-600">{item.duration}</span>
        </div>
        {item.location && (
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-pink-500 shrink-0" />
            <span>{item.location}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.description}</p>

      {/* Highlights */}
      {item.highlights?.length ? (
        <ul className="mt-4 space-y-2 flex-1">
          {item.highlights.map((highlight, hi) => (
            <li key={hi} className="flex gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Skill tags */}
      {item.skills?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function VolunteeringSection({
  title = 'Volunteering',
  subtitle = "ways I’ve supported my community through education, mentorship, and outreach",
  items = defaultVolunteerItems,
}: VolunteeringSectionProps) {
  return (
    <section
      id="volunteering"
      className="py-20"
    >
      <style>{`
        @keyframes volunteer-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="mt-5 text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="flex items-stretch py-4 w-max hover:[animation-play-state:paused]"
          style={{
            animation: 'volunteer-marquee 40s linear infinite',
          }}
        >
          {[...items, ...items].map((item, index) => (
            <VolunteerCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}