import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(1316);

  let y;
  if (typeof window !== "undefined") {
    y = useTransform(smoothProgress, (value) => {
      return value * -(contentHeight - window.innerHeight);
    });
    console.log(window.innerHeight); 
    console.log(contentHeight);
  }

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [contentRef, children]);

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        className="scrollBody"
        style={{
          y,
          width: "100vw",
          position: "fixed",
          top: 0,
          display: "flex",
          flexDirection: "column",
        }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
}
