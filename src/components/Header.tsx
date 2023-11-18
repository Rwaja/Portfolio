import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        height: "8vh",
        width: "100%",
        zIndex: 100,
      }}
    >
      <a href="#about" style={{ width: '15vh', height:'100%' }}>About</a>
      <a href="#skills" style={{ width: '15vh', height:'100%' }}>Skills</a>
      <a href="#proyects" style={{ width: '15vh', height:'100%' }}>Proyects</a>
      <a href="#contact" style={{ width: '15vh', height:'100%' }}>Contact</a>
    </motion.nav>
  );
}
