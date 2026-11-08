import { useEffect, useRef } from 'react';

// ASCII robot for the hero. A big "C" unravels into the robot, it waves hi,
// then it follows the cursor (eyes and a slight lean). Buttons underneath make
// it wave, backflip or celebrate (arms up and confetti). Visitors who prefer reduced motion get the
// finished robot with no intro animation.

const ROWS = 13;
const COLS = 34;

type Pose = 'rest' | 'center' | 'right' | 'left' | 'cheerUp' | 'cheerIn';
type Mood = 'normal' | 'happy' | 'blink';

// Writes `str` into `line` starting at `col`, padding with spaces if needed.
function put(line: string, col: number, str: string) {
  const padded = line.padEnd(col, ' ');
  return padded.slice(0, col) + str + padded.slice(col + str.length);
}

function robotLines(pose: Pose, look: -1 | 0 | 1, mood: Mood, lookV: -1 | 0 | 1 = 0): string[] {
  // ° sits high in the line and . sits low, so the eyes look up or down.
  const pupil = lookV < 0 ? '°' : lookV > 0 ? '.' : 'o';
  const eye =
    mood === 'happy'
      ? ' ^ '
      : mood === 'blink'
        ? ' - '
        : look < 0
          ? `${pupil}  `
          : look > 0
            ? `  ${pupil}`
            : ` ${pupil} `;
  const raised = pose !== 'rest';
  const cheering = pose === 'cheerUp' || pose === 'cheerIn';

  const lines = [
    '              ()',
    '              ||',
    "      .-------''-------.",
    `      |  (${eye})  (${eye})  |`,
    '      |      \\__/      |',
    "      '-----.____.-----'",
    "    .-------'    '-------.",
    '   /|   [============]   |',
    '  / |     o    o    o    |',
    "(_) '--------------------'",
    '        |  |      |  |',
    '       _|  |_    _|  |_',
    '      (______)  (______)',
  ];

  if (raised) {
    // Upper arm sticks out sideways; the forearm and hand swing.
    lines[0] = put(lines[0], 21, cheering ? 'yay!' : 'hi!');
    lines[6] = put(lines[6], 26, '__');
    if (pose === 'center' || pose === 'cheerUp') {
      lines[5] = put(lines[5], 28, '|');
      lines[4] = put(lines[4], 27, '(_)');
    } else if (pose === 'right') {
      lines[5] = put(lines[5], 29, '/');
      lines[4] = put(lines[4], 29, '(_)');
    } else {
      lines[5] = put(lines[5], 27, '\\');
      lines[4] = put(lines[4], 25, '(_)');
    }
  } else {
    lines[7] = put(lines[7], 26, '\\');
    lines[8] = put(lines[8], 27, '\\');
    lines[9] = put(lines[9], 27, '(_)');
  }

  if (cheering) {
    // Left arm goes up too (mirror of the right one).
    lines[7] = put(lines[7], 3, ' ');
    lines[8] = put(lines[8], 2, ' ');
    lines[9] = put(lines[9], 0, '   ');
    lines[6] = put(lines[6], 2, '__');
    if (pose === 'cheerUp') {
      lines[5] = put(lines[5], 1, '|');
      lines[4] = put(lines[4], 0, '(_)');
    } else {
      lines[5] = put(lines[5], 2, '/');
      lines[4] = put(lines[4], 2, '(_)');
    }
  }
  return lines;
}

type Cell = { r: number; c: number; ch: string };

// Cells of a big "C" (a ring with the right side open), in unravel order:
// starting at the top tip and going counterclockwise to the bottom tip.
function letterCCells(): Cell[] {
  const cells: (Cell & { order: number })[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const dy = r - 6;
      const dx = (c - 14.5) / 2.1; // characters are about twice as tall as wide
      const d = Math.hypot(dx, dy);
      const ang = (Math.atan2(-dy, dx) * 180) / Math.PI;
      if (d >= 4.3 && d <= 6.2 && Math.abs(ang) > 40) {
        cells.push({ r, c, ch: '#', order: (ang - 40 + 360) % 360 });
      }
    }
  }
  return cells.sort((a, b) => a.order - b.order);
}

function textCells(lines: string[]): Cell[] {
  const cells: Cell[] = [];
  lines.forEach((line, r) =>
    [...line].forEach((ch, c) => {
      if (ch !== ' ') cells.push({ r, c, ch });
    }),
  );
  return cells; // reading order: the C's tip becomes the top of the head
}

function render(grid: string[][]) {
  return grid.map((row) => row.join('').trimEnd()).join('\n');
}

const emptyGrid = () => Array.from({ length: ROWS }, () => Array<string>(COLS).fill(' '));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

const HOLD_MS = 700; // show the C before it unravels
const SPREAD_MS = 1400; // time between the first and last character leaving
const FLIGHT_MS = 800; // each character's trip
const WAVE_FRAMES: Pose[] = ['center', 'right', 'center', 'left', 'center', 'right', 'center', 'left', 'center'];
const WAVE_STEP_MS = 170;

type Trick = 'wave' | 'flip' | 'celebrate';

const CHEER_FRAMES: Pose[] = ['cheerUp', 'cheerIn', 'cheerUp', 'cheerIn', 'cheerUp', 'cheerIn', 'cheerUp', 'cheerIn', 'cheerUp', 'cheerIn', 'cheerUp'];
const CHEER_STEP_MS = 230;
const CONFETTI_CHARS = ['*', '+', 'x', 'o', '~', '•', '◆', '"'];
// Bright, party-style colors (deep enough to show up on the paper background).
const CONFETTI_COLORS = ['#E8590C', '#F2B705', '#2F9E44', '#1C7ED6', '#7048E8', '#D6336C', '#0CA678', '#C2410C'];

const buttonClass =
  'font-mono text-xs uppercase tracking-[0.08em] font-normal leading-normal px-3 py-1.5 rounded-[2px] border border-rule bg-paper text-ink-soft hover:text-signal hover:border-signal transition-colors';

export function AsciiRobot({ className = '' }: { className?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const trickRef = useRef<(t: Trick) => void>(() => {});
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const timers: number[] = [];
    let phase: 'morph' | 'live' = reduce ? 'live' : 'morph';
    let pose: Pose = 'rest';
    let mood: Mood = 'normal';
    let look: -1 | 0 | 1 = 0;
    let lookV: -1 | 0 | 1 = 0; // -1 up, 1 down
    let busy = false; // one trick at a time
    let shown = '';

    const draw = () => {
      const text = robotLines(pose, look, mood, lookV).join('\n');
      if (text !== shown) pre.textContent = shown = text;
    };

    const finish = () => {
      busy = false;
      pose = 'rest';
      mood = 'normal';
      draw();
    };

    // Backflip and celebrate move the whole robot (a wrapper, so the cursor lean
    // on the <pre> keeps working underneath).
    const spin = (frames: Keyframe[], duration: number) => {
      const body = bodyRef.current;
      if (!body) return finish();
      busy = true;
      mood = 'happy';
      draw();
      const anim = body.animate(frames, { duration, easing: 'cubic-bezier(.45,0,.25,1)' });
      anim.onfinish = finish;
      anim.oncancel = finish;
    };

    const wave = () => {
      if (phase !== 'live' || busy) return;
      busy = true;
      mood = 'happy';
      WAVE_FRAMES.forEach((p, i) =>
        timers.push(window.setTimeout(() => ((pose = p), draw()), i * WAVE_STEP_MS)),
      );
      timers.push(
        window.setTimeout(finish, WAVE_FRAMES.length * WAVE_STEP_MS),
      );
    };

    // Confetti: ASCII characters that fall over the robot, then get removed.
    const confetti = () => {
      const layer = confettiRef.current;
      if (!layer) return;
      for (let i = 0; i < 90; i++) {
        const bit = document.createElement('span');
        bit.textContent = CONFETTI_CHARS[i % CONFETTI_CHARS.length];
        bit.style.cssText = `position:absolute;top:0;left:${Math.random() * 100}%;color:${
          CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]
        };font-weight:600;font-size:${0.9 + Math.random() * 0.9}em`;
        layer.appendChild(bit);
        const drift = (Math.random() - 0.5) * 120;
        const fall = bit.animate(
          [
            { transform: 'translate(0, -40px) rotate(0deg)', opacity: 1 },
            { transform: `translate(${drift}px, ${layer.clientHeight}px) rotate(${(Math.random() - 0.5) * 720}deg)`, opacity: 0 },
          ],
          { duration: 1800 + Math.random() * 1400, delay: Math.random() * 900, easing: 'cubic-bezier(.3,.1,.6,1)', fill: 'backwards' },
        );
        fall.onfinish = () => bit.remove();
        fall.oncancel = () => bit.remove();
      }
    };

    // Celebrate: both arms pump up and down, happy face, small hops, confetti.
    const celebrate = () => {
      busy = true;
      mood = 'happy';
      CHEER_FRAMES.forEach((p, i) =>
        timers.push(window.setTimeout(() => ((pose = p), draw()), i * CHEER_STEP_MS)),
      );
      timers.push(window.setTimeout(finish, CHEER_FRAMES.length * CHEER_STEP_MS));
      bodyRef.current?.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(-6%)' },
          { transform: 'translateY(0)' },
        ],
        { duration: CHEER_STEP_MS * 2, iterations: Math.floor(CHEER_FRAMES.length / 2), easing: 'ease-in-out' },
      );
      confetti();
    };

    trickRef.current = (trick) => {
      if (phase !== 'live' || busy) return;
      if (trick === 'wave') return wave();
      if (trick === 'flip') {
        // Crouch, jump, full backflip, land.
        spin(
          [
            { transform: 'translateY(0) rotate(0deg) scaleY(1)' },
            { transform: 'translateY(4%) rotate(0deg) scaleY(0.92)', offset: 0.15 },
            { transform: 'translateY(-38%) rotate(-180deg) scaleY(1)', offset: 0.55 },
            { transform: 'translateY(0) rotate(-360deg) scaleY(1)', offset: 0.88 },
            { transform: 'translateY(3%) rotate(-360deg) scaleY(0.95)', offset: 0.94 },
            { transform: 'translateY(0) rotate(-360deg) scaleY(1)' },
          ],
          1300,
        );
      } else {
        celebrate();
      }
    };

    // Cursor following: eyes look toward it, and the robot leans a little.
    const target = { x: 0, y: 0 };
    const offset = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = pre.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      target.x = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2)));
      target.y = Math.max(-1, Math.min(1, dy / (window.innerHeight / 2)));
      const nextLook = dx > rect.width * 0.15 ? 1 : dx < -rect.width * 0.15 ? -1 : 0;
      const nextV = dy < -rect.height * 0.3 ? -1 : dy > rect.height * 0.3 ? 1 : 0;
      if (nextLook !== look || nextV !== lookV) {
        look = nextLook;
        lookV = nextV;
        if (phase === 'live') draw();
      }
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Blink every few seconds (skipped while waving).
    const scheduleBlink = () => {
      timers.push(
        window.setTimeout(() => {
          if (phase === 'live' && mood === 'normal') {
            mood = 'blink';
            draw();
            timers.push(window.setTimeout(() => ((mood = 'normal'), draw()), 140));
          }
          scheduleBlink();
        }, 2800 + Math.random() * 2600),
      );
    };
    scheduleBlink();

    // Unravel: every character flies from a spot on the C to its spot on the robot.
    const from = letterCCells();
    const to = textCells(robotLines('rest', 0, 'normal'));
    const n = Math.max(from.length, to.length);
    const particles = Array.from({ length: n }, (_, i) => {
      const a = from[Math.floor((i * from.length) / n)];
      const b = to[Math.floor((i * to.length) / n)];
      return { a, b, delay: HOLD_MS + (i / n) * SPREAD_MS, bend: (i % 2 ? 1 : -1) * (1.5 + (i % 5) * 0.4) };
    });
    const morphEnd = HOLD_MS + SPREAD_MS + FLIGHT_MS;
    const start = performance.now();

    const tick = (now: number) => {
      if (phase === 'morph') {
        const elapsed = now - start;
        const grid = emptyGrid();
        for (const p of particles) {
          const t = Math.max(0, Math.min(1, (elapsed - p.delay) / FLIGHT_MS));
          const e = easeInOut(t);
          // Curve each path a little so it looks like the C is unwinding.
          const arc = Math.sin(Math.PI * e) * p.bend;
          const r = Math.round(p.a.r + (p.b.r - p.a.r) * e + arc * 0.5);
          const c = Math.round(p.a.c + (p.b.c - p.a.c) * e + arc);
          if (r >= 0 && r < ROWS && c >= 0 && c < COLS) grid[r][c] = t > 0.6 ? p.b.ch : p.a.ch;
        }
        pre.textContent = shown = render(grid);
        if (elapsed >= morphEnd) {
          phase = 'live';
          pre.dataset.done = 'true';
          draw();
          timers.push(window.setTimeout(wave, 250));
        }
      }

      if (!reduce) {
        offset.x += (target.x - offset.x) * 0.08;
        offset.y += (target.y - offset.y) * 0.08;
        pre.style.transform = `translate(${offset.x * 22}px, ${offset.y * 12}px) rotate(${offset.x * 3}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    if (reduce) {
      pre.dataset.done = 'true';
      draw();
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const tricks: { id: Trick; label: string }[] = [
    { id: 'wave', label: 'Wave hi' },
    { id: 'flip', label: 'Backflip' },
    { id: 'celebrate', label: 'Celebrate' },
  ];

  return (
    <div className="relative flex flex-col items-center gap-8">
      <div ref={confettiRef} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 bottom-16 z-10 font-mono" />
      <div ref={bodyRef} className="origin-center">
        <pre
          ref={preRef}
          onClick={() => trickRef.current('wave')}
          aria-hidden="true"
          className={`select-none font-mono leading-[1.15] text-signal transition-colors duration-700 data-[done=true]:text-ink will-change-transform ${className}`}
        />
      </div>
      <div className="pointer-events-auto flex flex-wrap justify-center gap-2" role="group" aria-label="Make the robot do a trick">
        {tricks.map((t) => (
          <button key={t.id} type="button" onClick={() => trickRef.current(t.id)} className={buttonClass}>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
