import {
  color,
  motion,
  useInView,
  useAnimation,
  useTransform,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}
export default function Return({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [75, 0]);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.2, scale: 0.8 }}
        transition={{ duration: 0.1, ease: "linear"}}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
