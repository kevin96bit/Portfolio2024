import React from "react";
import { motion } from "framer-motion";

const Frontend = () => {
  return (
    <motion.div className="frontend" whileInView={{x:60}}>
      <h3 className="colore-livello-front">Livello FrontEnd <i className="uil uil-flip-h-alt"></i></h3>
      <div className="container-box">
        <div className="box1-abilita">
          <h6 className="abilita-front">- HTML</h6>
          <h6 className="abilita-front">- CSS</h6>
          <h6 className="abilita-front">- Javascript</h6>
        </div>
        <div className="box2-abilita">
          <h6 className="abilita-front">- Bootstrap</h6>
          <h6 className="abilita-front">- Tailwind</h6>
          <h6 className="abilita-front">- React</h6>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
