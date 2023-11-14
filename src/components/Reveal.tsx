import { color, motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from 'react';
 
interface Props {
    children: React.ReactNode;
}
export default function Return({ children }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView]);
  
    return (
    <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          width: "100%",
        }}
      >
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 2, delay: 1 }}
      >
      {children}
    </motion.div>
        </div>
  );
};
