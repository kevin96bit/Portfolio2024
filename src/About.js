import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div className="about-container" whileInView={{ x: 155 }}>
        <div className="presentazione">
          <h1 className="about-scritta">About me</h1>
          <h4 className="dev">
            I'm a Full stack <span className="d">D</span>eveloper{" "}
            <i className="uil uil-brackets-curly"></i>
          </h4>
        </div>
      </motion.div>
      <div className="sotto-about">
        <motion.div
          whileInView={{ x: 50, y: -20 }}
          className="contenuto-about"
        ></motion.div>
        <div className="scritte">
          <motion.p whileInView={{ x: -90 }} className="testo">
          Sono affascinato dalla possibilità di creare siti web e applicazioni che siano non solo funzionali, ma anche belli e intuitivi.
            <i className="uil uil-lightbulb-alt"></i>
          </motion.p>
        </div>
      </div>
      <div className="container-abilita">
        <Frontend />
        <Backend />
      </div>
    </>
  );
};

export default About;

