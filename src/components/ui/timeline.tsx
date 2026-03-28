import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  description?: string;
}

export function Timeline({
  data,
  heading = "Timeline",
  description = "A scrollable timeline.",
}: TimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = trackRef.current;
    if (!element) return;

    const updateHeight = () => {
      setHeight(element.getBoundingClientRect().height);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white font-sans dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <h2 className="max-w-4xl bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
          {description}
        </p>
      </div>

      <div ref={trackRef} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex justify-start gap-6 pt-10 md:gap-10 md:pt-24"
          >
            <div className="sticky top-24 z-30 flex h-fit w-16 shrink-0 items-start justify-center md:top-32 md:w-full md:max-w-xs lg:max-w-sm">
              <div className="absolute left-6 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-black md:left-3">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500" />
              </div>

              <h3 className="hidden pl-20 text-left text-3xl font-bold text-neutral-400 md:block lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-2xl font-bold text-neutral-400 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-800"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-blue-500 via-violet-500 to-pink-500"
          />
        </div>
      </div>
    </div>
  );
}