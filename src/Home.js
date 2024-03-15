import { motion } from "framer-motion";

import React from "react";

const Home = () => {
  return (
    <div className="layout-home">
      {/* intro */}
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1, x: 15, y: 0 }}
        whileInView={{ opacity: 1, x: 15, y: 0 }}
        className="intro"
      >
        <h1 className="nome">Kevin Imerti</h1>
        <br />
        <h5 className="descrizione-home">
          Appassionato di tecnologia e sviluppo web. Sono alla continua scoperta di framework e librerie da esplorare.  
           <i className="uil uil-smile"></i> </h5>
        
        {/* BOTTONE Cv */}
        <br />
        <a href="https://www.dropbox.com/scl/fi/lvox8ziq9mf76l8n8two1/ITA_KEVIN-IMERTI.pdf?rlkey=h5ji1vmklblhfvv2ar44613cb&dl=0" target="_blank" download="CV KEVIN IMERTI" rel="noreferrer">
           <button className="dc">
            {" "}
            Download Cv <i className="uil uil-download-alt"></i>{" "}
          </button>{" "}
        </a>
      </motion.div>
      {/* Foto */}
      <motion.div
        initial={{ opacity: 0 }}
       
        whileInView={{ opacity: 1, scale: 1 }}
        className="io"
      ></motion.div>
      {/* link */}
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="link"
      >
        <a className="icone-link"
          href="https://github.com/kevin96bit"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <a
          className="icone-link"
          href="https://www.linkedin.com/in/kevin-imerti-197440222/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
