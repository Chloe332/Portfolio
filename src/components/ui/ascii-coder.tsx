import { useEffect, useRef } from 'react';

// ASCII girl coding on a laptop for the Contact section. She types (hands bob,
// little code symbols float up), and each time she scrolls into view she looks
// up and waves. Clicking her makes her wave again. Visitors who prefer reduced
// motion see her mid-wave, without animation.

const ROWS = 15;
const COLS = 32;

type Pose = 'type' | 'center' | 'right' | 'left';
type Mood = 'focus' | 'up' | 'happy' | 'blink';

// Writes `str` into `line` starting at `col`, padding with spaces if needed.
function put(line: string, col: number, str: string) {
  const padded = line.padEnd(col, ' ');
  return padded.slice(0, col) + str + padded.slice(col + str.length);
}

type Token = { r: number; c: number; text: string };

function coderLines(pose: Pose, beat: number, mood: Mood, tokens: Token[]): string[] {
  const eyes = { focus: '.   .', up: 'o   o', happy: '^   ^', blink: '-   -' }[mood];
  const mouth = { focus: '  -  ', up: '  o  ', happy: '\\___/', blink: '  -  ' }[mood];

  const lines = [
    '              (@)',
    '           .-~~~~~-.',
    '          / .-----. \\',
    `         | / ${eyes} \\ |`,
    `         | | ${mouth} | |`,
    '         | \\       / |',
    "         |  '-...-'  |",
    "        /'.__.| |.__.'\\",
    "       /      '-'      \\",
    '      | .-------------. |',
    '      | |             | |',
    '      | |     </>     | |',
    '      | |             | |',
    '  ____|_|_____________|_|____',
    ' |___________________________|',
  ];

  // Code symbols drift up on the left while she types.
  for (const t of tokens) {
    if (t.r >= 0 && t.r < ROWS) lines[t.r] = put(lines[t.r], t.c, t.text);
  }

  if (pose === 'type') {
    // Hands on the keyboard, taking turns.
    const leftUp = beat % 2 === 0;
    lines[leftUp ? 12 : 13] = put(lines[leftUp ? 12 : 13], 5, '(_)');
    lines[leftUp ? 13 : 12] = put(lines[leftUp ? 13 : 12], 23, '(_)');
  } else {
    lines[13] = put(lines[13], 5, '(_)');
    // Right arm goes up beside her head; the hand swings.
    lines[8] = put(lines[8], 24, '__');
    if (pose === 'center') {
      lines[7] = put(lines[7], 26, '|');
      lines[6] = put(lines[6], 25, '(_)');
    } else if (pose === 'right') {
      lines[7] = put(lines[7], 27, '/');
      lines[6] = put(lines[6], 27, '(_)');
    } else {
      lines[7] = put(lines[7], 25, '\\');
      lines[6] = put(lines[6], 23, '(_)');
    }
    lines[4] = put(lines[4], 27, 'hi!');
  }
  return lines.map((l) => l.padEnd(COLS, ' ').slice(0, COLS));
}

const TYPE_STEP_MS = 190;
const WAVE_FRAMES: Pose[] = ['center', 'right', 'center', 'left', 'center', 'right', 'center', 'left', 'center'];
const WAVE_STEP_MS = 170;
const CODE_BITS = ['{}', '</>', ';', '()', '=>', '[]', '01', '#'];

export function AsciiCoder({ className = '' }: { className?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const waveRef = useRef<() => void>(() => {});

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let pose: Pose = 'type';
    let mood: Mood = 'focus';
    let beat = 0;
    let tokens: Token[] = [];
    let busy = false; // waving
    let visible = false;
    let typing = 0; // interval id
    let lastWave = 0;
    const timers: number[] = [];
    let shown = '';

    const draw = () => {
      const text = coderLines(pose, beat, mood, tokens).join('\n');
      if (text !== shown) pre.textContent = shown = text;
    };

    if (reduce) {
      pose = 'center';
      mood = 'happy';
      draw();
      return;
    }

    const step = () => {
      if (busy) return;
      // Hands don't move perfectly in rhythm.
      if (Math.random() < 0.8) beat++;
      // Move symbols up one row every other step, and add a new one now and then.
      if (beat % 2 === 0) tokens = tokens.map((t) => ({ ...t, r: t.r - 1 })).filter((t) => t.r >= 0);
      if (Math.random() < 0.18 && tokens.every((t) => t.r < 9)) {
        tokens.push({ r: 10, c: Math.floor(Math.random() * 3), text: CODE_BITS[Math.floor(Math.random() * CODE_BITS.length)] });
      }
      // Blink now and then.
      mood = Math.random() < 0.04 ? 'blink' : 'focus';
      draw();
    };

    const startTyping = () => {
      if (!typing) typing = window.setInterval(step, TYPE_STEP_MS);
    };
    const stopTyping = () => {
      window.clearInterval(typing);
      typing = 0;
    };

    const finishWave = () => {
      busy = false;
      pose = 'type';
      mood = 'focus';
      draw();
    };

    const wave = () => {
      if (busy) return;
      busy = true;
      lastWave = Date.now();
      tokens = [];
      // Look up from the laptop first, then wave.
      pose = 'type';
      mood = 'up';
      draw();
      WAVE_FRAMES.forEach((p, i) =>
        timers.push(
          window.setTimeout(() => {
            pose = p;
            mood = 'happy';
            draw();
          }, 350 + i * WAVE_STEP_MS),
        ),
      );
      timers.push(window.setTimeout(finishWave, 350 + WAVE_FRAMES.length * WAVE_STEP_MS + 400));
    };
    waveRef.current = wave;

    // Type only while on screen; wave each time she scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !visible) {
          startTyping();
          if (Date.now() - lastWave > 4000) timers.push(window.setTimeout(wave, 900));
        } else if (!nowVisible && visible) {
          stopTyping();
        }
        visible = nowVisible;
      },
      { threshold: 0.6 },
    );
    observer.observe(pre);
    draw();

    return () => {
      observer.disconnect();
      stopTyping();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <figure role="img" aria-label="ASCII-art girl coding on a laptop, who looks up and waves" className="flex justify-center">
      <pre
        ref={preRef}
        onClick={() => waveRef.current()}
        aria-hidden="true"
        className={`select-none cursor-pointer font-mono leading-[1.15] text-ink ${className}`}
      />
    </figure>
  );
}
