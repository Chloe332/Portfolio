import { useState } from 'react';
// import { SplineScene } from './ui/spline-scene'; // 3D robot, swapped for the ASCII one
import { AsciiRobot } from './ui/ascii-robot';
import { EmailModal } from './ui/email-modal';

// Home: name, one plain line, current status and links, with the ASCII
// robot on the right (it types "CHLOE", turns into the robot, waves, then follows the cursor).

const RESUME_CACHE_BUST = '2026-11-08'; // keep in sync with About.tsx
const resumePdfSrc = `${import.meta.env.BASE_URL}images/resume/Chloe_Hallaert_Resume.pdf?v=${RESUME_CACHE_BUST}`;

const links = [
  { label: 'GitHub', href: 'https://github.com/Chloe332' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chloehallaert/' },
  { label: 'Resume (PDF)', href: resumePdfSrc },
];


const linkClass =
  'text-ink underline decoration-rule decoration-1 underline-offset-4 hover:text-signal hover:decoration-signal transition-colors';

export function Hero() {
  // "Email" opens the contact form (sends through the same service as the
  // Contact section), so it works even if the visitor has no mail app set up.
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden border-b border-rule flex flex-col md:block md:min-h-[100svh]">
      {/* Robot: below the text on phones, right half on larger screens. */}
      <figure
        role="img"
        aria-label="ASCII-art robot waving hello"
        className="relative z-20 order-last flex items-center justify-center pb-16 md:pb-0 pointer-events-none md:absolute md:top-14 md:bottom-0 md:left-[46%] md:right-0"
      >
        <AsciiRobot className="pointer-events-auto text-[clamp(11px,3.6vw,22px)] md:text-[clamp(13px,2.1vw,30px)]" />
        {/* Previous 3D robot:
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          zoom={0.62}
        /> */}
      </figure>

      <div className="relative z-10 pointer-events-none max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16 pt-32 pb-10 sm:pt-40 md:pb-24 md:min-h-[100svh] md:flex md:flex-col md:justify-center">
        <p className="font-mono text-[0.72rem] sm:text-xs uppercase tracking-[0.08em] text-ink-soft flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="inline-block h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          <span>Software Engineer</span>
          <span aria-hidden="true">·</span>
          <span>open to Summer 2027 internships</span>
        </p>

        <div className="mt-8 md:max-w-[44%]">
          <div>
            <h1 className="font-serif font-normal text-ink tracking-[-0.02em] leading-[0.9] text-[clamp(3.5rem,11vw,8rem)]">
              Chloe
              <br />
              Hallaert
            </h1>

            <p className="mt-8 max-w-xl text-xl sm:text-2xl leading-snug text-ink">
              Software engineering student at the University of Waterloo, working on robotics, ML and backend systems. Currently a robotics software engineer at Mara in San Francisco.
            </p>

            <ul className="pointer-events-auto mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
              <li>
                <button type="button" onClick={() => setIsEmailOpen(true)} className={`${linkClass} font-mono text-sm font-normal leading-normal`}>
                  Email
                </button>
              </li>
              {links.map((link) => {
                const external = link.href.startsWith('http') || link.href.includes('.pdf');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className={linkClass}
                    >
                      {link.label}
                      {external && <span aria-hidden="true"> ↗</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
      <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
    </section>
  );
}
