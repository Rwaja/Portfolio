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
export default function RevealDiv({ children }: Props) {
 
  return (
      <motion.div
        initial={{ opacity: 0.2} }
        transition={{ duration: 1.1}}
        whileInView={{ opacity: 1 }}
      >
        {children}
      </motion.div>
  );
}
