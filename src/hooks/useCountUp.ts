import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export function useCountUp(end: number, duration = 1.4, delay = 0) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    if (hasTriggered) {
      setTimeout(() => {
        motionValue.set(end);
      }, delay * 1000);
    }
  }, [end, hasTriggered, motionValue, delay]);

  const trigger = () => {
    if (!hasTriggered) setHasTriggered(true);
  };

  return { value: springValue, trigger };
}
