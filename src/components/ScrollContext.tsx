import { createContext } from "react";
import { useMotionValue } from "framer-motion";

export const ScrollContext = createContext({
  scrollY: useMotionValue(0),
  setScrollY: (value:number) => {},
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollY = useMotionValue(0);
  const setScrollY = (value: number) => scrollY.set(value);

  return (
    <ScrollContext.Provider value={{ scrollY, setScrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}