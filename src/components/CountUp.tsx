import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  start?: number;
  delay?: number;
}

export default function CountUp({ value, suffix = '', duration = 1600, start = 0, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now() + delay;
            const step = (now: number) => {
              if (now < t0) {
                requestAnimationFrame(step);
                return;
              }
              const p = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(start + (value - start) * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, start, duration, delay]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
