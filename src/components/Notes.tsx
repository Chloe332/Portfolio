// Notes: short technical write-ups, laid out like lab reports.
//
// Rules (agent.md §0 and §4): technique and reasoning only, nothing about
// Mara's product, customers or exact results. Relative metrics only.
// Source: resume-agent-documentation.md F2, F11, F12.
//
// TODO(Chloe): these are drafts. Review every sentence before this goes live.
// To hide a note, set `draft: true`; drafts are filtered out below.

import type { ReactNode } from 'react';

type Note = {
  id: string;
  title: string;
  tags: string;
  summary: string;
  draft?: boolean;
  steps: { label: string; body: ReactNode }[];
  figure?: { caption: string; code: string };
};

const Code = ({ children }: { children: ReactNode }) => (
  <code className="font-mono text-[0.85em] bg-paper-deep px-1 py-0.5 rounded-[2px]">{children}</code>
);

const notes: Note[] = [
  {
    id: 'hardfault',
    title: 'A HardFault that only broke commands',
    tags: 'C · FreeRTOS · micro-ROS · addr2line',
    summary: 'The board looked alive, but nothing it was told to do happened. The cause was one variable with the wrong lifetime.',
    steps: [
      {
        label: 'Symptom',
        body: 'The microcontroller kept publishing its status, but every command sent to it silently did nothing. No error came back.',
      },
      {
        label: 'What I ruled out',
        body: 'Three theories: service limits, callback rate, and a reentrant executor spin. I checked each against evidence and dropped it before moving on.',
      },
      {
        label: 'Root cause',
        body: (
          <>
            I saved the fault return address in a register that survives reset, published it in the status
            message, and decoded it with <Code>addr2line</Code>. <Code>rclc_executor_init</Code> had stored a{' '}
            <em>pointer</em> to an allocator that lived on the setup function's stack. Once setup returned, that
            memory was reused, and the executor jumped through a garbage function pointer (<Code>0xFFFFFFFE</Code>).
          </>
        ),
      },
      {
        label: 'Fix',
        body: (
          <>
            One line: make the allocator file-scope <Code>static</Code>, so it lives as long as the executor. In
            the same pass I fixed a missing vector-table relocation flag (USB couldn't respond) and a null-pointer
            crash from using USB before enumeration finished.
          </>
        ),
      },
      {
        label: 'Result',
        body: 'Commands work again. When a library takes a pointer, I now check who owns that memory and for how long.',
      },
    ],
    figure: {
      caption: 'Fig. 1: the fix, simplified (not the original code).',
      code: `void setup(void) {
-  rcl_allocator_t allocator = rcl_get_default_allocator();  // on setup()'s stack
+  static rcl_allocator_t allocator;                         // lives for the program
+  allocator = rcl_get_default_allocator();
   rclc_executor_init(&executor, &support.context, n_handles, &allocator);
}  // executor still holds &allocator after this returns`,
    },
  },
  {
    id: 'int8',
    title: 'Why INT8 calibration clipped',
    tags: 'TensorRT · ONNX · INT8 · edge GPU',
    summary: 'One detection model collapsed under INT8 while others were fine. The calibration images were mostly to blame.',
    steps: [
      {
        label: 'Symptom',
        body: 'After converting a detection model from ONNX to an INT8 TensorRT engine, its accuracy collapsed. Other models quantized without trouble.',
      },
      {
        // TODO(Chloe): add any hypotheses you ruled out here, if you remember them.
        label: 'How I found it',
        body: 'Per-layer error analysis against full precision, to see where the error entered instead of guessing.',
      },
      {
        label: 'Root cause',
        body: "About 20% of each calibration image was flat padding. Entropy calibration chooses a clipping range from the activation distribution, and all that padding skewed it, so the range clipped the input and the strongest pixel values of most targets.",
      },
      {
        label: 'Fix',
        body: 'Switched to MinMax calibration, which keeps the full observed range. A second version also removed calibration scales from the final decode steps for extra speed. I ran thermal stress tests (no throttling; the board hit its power limit first) and wrote up a benchmark report.',
      },
      {
        label: 'Result',
        body: '1.4–1.5× faster than FP16, and the failing model recovered to within 0.03 F1 of full precision.',
      },
    ],
  },
  {
    id: 'latency',
    title: 'Cutting 1.3 s of video latency',
    tags: 'ROS 2 · ffmpeg · RTSP · threads',
    summary: 'The camera feed was late before it ever reached the robot code. The decoder was holding frames back.',
    steps: [
      {
        label: 'Symptom',
        body: 'Video from an RTSP IP camera arrived in ROS 2 noticeably behind real time.',
      },
      {
        // TODO(Chloe): add anything you ruled out first, if you remember it.
        label: 'How I found it',
        body: "OpenCV's decoder buffered about 12 frames before handing one over, so every frame the node published was already old.",
      },
      {
        label: 'Root cause',
        body: 'A buffering decoder in the path, not the network or the camera.',
      },
      {
        label: 'Fix',
        body: 'Replaced OpenCV decoding with a low-delay ffmpeg pipeline, and moved reading to a background thread that keeps only the newest frame. Added auto-reconnect and a latched connection status, and covered the node with 34 unit tests.',
      },
      {
        label: 'Result',
        body: '1.3 s of latency removed.',
      },
      /* PENDING APPROVAL (🟡 F12): a follow-up on bursty frames, traced with raw
         TCP/UDP packet captures to variable-bitrate encoding in the camera;
         constant bitrate gave a steady 5 Hz. Don't publish until approved. */
    ],
  },
];

export function Notes() {
  const visible = notes.filter((n) => !n.draft);

  return (
    <section id="notes" className="py-20 sm:py-28 border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:pl-16">
        <header className="mb-12 sm:mb-16 grid gap-4 md:grid-cols-[9.5rem_minmax(0,1fr)] gap-x-8">
          <div className="flex items-baseline gap-4 md:col-span-2">
            <span className="font-mono text-xs text-signal">02</span>
            <h2 className="font-serif font-normal text-4xl sm:text-5xl text-ink tracking-tight">Notes</h2>
          </div>
          <p className="md:col-start-2 max-w-xl text-lg text-ink-soft">
            Bugs I chased and what caused them. Written for other engineers, so it's about technique, not product.
          </p>
        </header>

        <div className="space-y-16 sm:space-y-20">
          {visible.map((note, i) => (
            <article
              key={note.id}
              id={`note-${note.id}`}
              className="grid gap-x-8 gap-y-6 md:grid-cols-[9.5rem_minmax(0,1fr)]"
            >
              <div className="font-mono text-xs uppercase tracking-[0.06em] text-ink-soft md:pt-2 space-y-1">
                <p className="text-signal">Note {String(i + 1).padStart(2, '0')}</p>
                <p className="normal-case tracking-normal leading-relaxed">{note.tags}</p>
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-3xl sm:text-4xl leading-tight text-ink">{note.title}</h3>
                <p className="mt-3 max-w-2xl text-xl italic leading-snug text-ink-soft">{note.summary}</p>

                <dl className="mt-8 max-w-3xl border-t border-ink/80">
                  {note.steps.map((step, s) => (
                    <div
                      key={step.label}
                      className="grid gap-x-6 gap-y-1 py-4 border-b border-rule sm:grid-cols-[10rem_minmax(0,1fr)]"
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft sm:pt-1">
                        <span className="text-signal mr-2">{s + 1}</span>
                        {step.label}
                      </dt>
                      <dd className="text-[1.06rem] leading-relaxed text-ink">{step.body}</dd>
                    </div>
                  ))}
                </dl>

                {note.figure && (
                  <figure className="mt-8 max-w-3xl">
                    <pre className="overflow-x-auto bg-ink text-paper/90 font-mono text-[0.78rem] leading-relaxed p-5 rounded-[2px]">
                      {note.figure.code.split('\n').map((line, l) => (
                        <span
                          key={l}
                          className={`block ${
                            line.startsWith('+') ? 'text-[#F2A57F]' : line.startsWith('-') ? 'text-paper/45 line-through decoration-paper/30' : ''
                          }`}
                        >
                          {line}
                        </span>
                      ))}
                    </pre>
                    <figcaption className="mt-2 font-mono text-xs text-ink-soft">{note.figure.caption}</figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
