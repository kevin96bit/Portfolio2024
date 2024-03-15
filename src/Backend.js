import React from "react";
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <motion.div className="backend" whileInView={{x:-60}}>
      <h3 className="colore-livello-back">Livello BackEnd<i className="uil uil-database"></i></h3>
      <div className="container-box-back">
        <div className="box1-abilita-back">
          <h6 className="abilita-back">- PHP</h6>
          <h6 className="abilita-back">- MySql</h6>
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;
