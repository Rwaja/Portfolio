import { color, motion, useInView, useAnimation, scroll,AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProfileImg from "./Profile-img";
import SmoothScroll from "./SmoothScroll";
import Landing from "./landing.tsx";
import Reveal from "./Reveal";

export default function Main() {
  return (
    <main>
      <SmoothScroll>
      <Landing/>
      <div
       className="maindiv"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ecf0f1",
          width: "100%",
        }}
      >

        <motion.div
          transition={{ delayChildren: 0.5, staggerChildren: 0.5 }}
          style={{ width: "50%", fontSize: "0.5em" }}
          >
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, id voluptatibus! Velit modi ipsam a maxime quos iusto aspernatur voluptatem dolorum tempore, odio culpa doloribus quaerat praesentium hic quasi Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dicta magnam provident iure? Optio eaque porro magnam animi a, obcaecati, repellendus suscipit nobis autem architecto, quos quo nam recusandae corpori Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum officia odit dolores expedita eaque facere, non veritatis hic corporis consequuntur quasi. Est repellendus ea consectetur ducimus similique quae sed ullam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, aspernatur saepe perspiciatis omnis esse dicta quo atque aperiam quos natus minima inventore numquam ad suscipit magnam nihil modi quidem dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et nobis eaque. Architecto officiis obcaecati asperiores aspernatur doloribus, pariatur assumenda laudantium iure voluptates porro amet unde sunt! Dolor, aperiam non?</h1>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 2 }}
          >
          <motion.h1
          animate={{
              color: "#1ea7fd",
              x: 0,
            }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            Hello, World!
            </motion.h1>
          </motion.div> */}
      </div>
      </SmoothScroll>
    </main>
  );
}
