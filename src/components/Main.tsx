import { color, motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProfileImg from "./Profile-img";
import Reveal from "./Reveal";
export default function Main() {
  return (
    <main className="main">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          width: "100%",
        }}
      >
        <motion.div style={{ width: "50%", fontSize: "0.5em" }}>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <Reveal>
            <motion.h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem eos suscipit dolorem nesciunt esse magnam optio
              distinctio est maxime temporibus ad consequatur quos vitae
              excepturi, aperiam repudiandae velit nisi ullam?
            </motion.h1>
          </Reveal>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          <Reveal>
          <motion.h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem eos suscipit dolorem nesciunt esse magnam optio
            distinctio est maxime temporibus ad consequatur quos vitae
            excepturi, aperiam repudiandae velit nisi ullam?
          </motion.h1>
          </Reveal>
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
    </main>
  );
}
