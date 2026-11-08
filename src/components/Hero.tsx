import { SplineScene } from './ui/spline-scene';

// Home: name, one plain line, current status and links, with the Spline
// robot on the right (lazy-loaded; it follows the cursor and waves once).

const RESUME_CACHE_BUST = '2026-08-23'; // keep in sync with About.tsx
const resumePdfSrc = `${import.meta.env.BASE_URL}images/resume/chloe_resume.pdf?v=${RESUME_CACHE_BUST}`;

const links = [
  { label: 'Email', href: 'mailto:cxhallae@uwaterloo.ca' },
  { label: 'GitHub', href: 'https://github.com/Chloe332' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chloehallaert/' },
  { label: 'Resume (PDF)', href: resumePdfSrc },
];


export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-rule flex flex-col md:block md:min-h-[100svh]">
      {/* Robot: below the text on phones, right half on larger screens */}
      <figure className="relative h-[60svh] md:absolute md:top-14 md:bottom-0 md:left-[46%] md:right-0 md:h-auto order-last">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          waveObjectName="arm"
          zoom={0.62}
        />
      </figure>

      <div className="relative z-10 pointer-events-none max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16 pt-32 pb-10 sm:pt-40 md:pb-24 md:min-h-[100svh] md:flex md:flex-col md:justify-center">
        <p className="font-mono text-[0.72rem] sm:text-xs uppercase tracking-[0.08em] text-ink-soft flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="inline-block h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          <span>Robotics & AI Engineer in SF</span>
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
              Software engineering student at the University of Waterloo. Writing firmware, edge-ML code and training models in SF.
            </p>

            <ul className="pointer-events-auto mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
              {links.map((link) => {
                const external = link.href.startsWith('http') || link.href.includes('.pdf');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-ink underline decoration-rule decoration-1 underline-offset-4 hover:text-signal hover:decoration-signal transition-colors"
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
    </section>
  );
}
