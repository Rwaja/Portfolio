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
 
  return (
      <motion.div
        initial={{ opacity: 0.2} }
        transition={{ duration: 0.7}}
        whileInView={{ opacity: 1 }}
      >
        {children}
      </motion.div>
  );
}
