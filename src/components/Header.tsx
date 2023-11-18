import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        height: "10vh",
        width: "100%",
        zIndex: 100,
      }}
    >
      <a href="#about" style={{ width: '15vh', height:'100%' }}>nav</a>
      <a href="#skills" style={{ width: '15vh', height:'100%' }}>nav</a>
      <a href="#proyects" style={{ width: '15vh', height:'100%' }}>nav</a>
    </motion.nav>
  );
}
