import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Volunteer', href: '#volunteering' },
  { name: 'Contact', href: '#contact' },
];

const NAV_HEIGHT = 56; // matches h-14

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(href.replace('#', ''));
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-paper/95 border-b border-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16">
        <div className="flex justify-between items-center h-14">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="font-serif text-xl text-ink tracking-tight"
          >
            Chloe Hallaert
          </a>

          <ul className="hidden lg:flex gap-6 font-mono text-[0.72rem] uppercase tracking-[0.08em]">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-ink-soft hover:text-signal transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul className="lg:hidden border-t border-rule bg-paper px-5 py-3 font-mono text-sm uppercase tracking-[0.08em]">
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex gap-4 py-2.5 text-ink-soft hover:text-signal"
              >
                <span className="text-signal">{String(i + 1).padStart(2, '0')}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
