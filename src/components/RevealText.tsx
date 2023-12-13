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
export default function RevealText({ children }: Props) {
 
  return (
      <motion.h1 
        initial={{ opacity: 0.2, scale:0.6} }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileInView={{ opacity: 1 ,scale: 1.1}}
      >
        {children}
      </motion.h1>
  );
}
