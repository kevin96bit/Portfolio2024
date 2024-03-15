import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="container-service">
      {/* titolo in grande */}
      <motion.div
        className="titolo-service"
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1, y: 12 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="service-scritta">Work</h1>
        <div className="service-paragrafo">
          <h4>
            <i className="uil uil-channel"></i> Le idee migliori sono spesso le più semplici{" "}
            <i className="uil uil-channel"></i>
          </h4>
        </div>
      </motion.div>
      <motion.div className="box-card-service" whileInView={{y:20}}>
        {/* card1 find your personal trainer */}
        <div className="card1">
          <div className="box-immagine1"></div>
          <div className="card-paragrafo">
            <h3 className="testo-dentro-card">
              Side-project in fase di sviluppo che aiuta ad abbinare personal trainer a clienti <br />{" "}
              <a
                href="https://github.com/kevin96bit/FindYourPersonalTrainer"
                className="link-card"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <i className="uil uil-github-alt git-cards"></i>
              </a>
            </h3>
          </div>
        </div>
        {/* card 2 portale-dipendenti  */}
        <div className="card2">
          <div className="box-immagine2"></div>
          <div className="card-paragrafo">
            <h3 className="testo-dentro-card">
              Gestionale "dipendenti" per approfondire le interrogazioni sql e testarle  <br />{" "}
              <a
                href="https://github.com/kevin96bit/Portale-dipendenti"
                className="link-card"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <i className="uil uil-github-alt git-cards"></i>
              </a>
            </h3>
          </div>
        </div>
        {/* card 3 Logic Store */}
        <div className="card3">
          <div className="box-immagine3"></div>
          <div className="card-paragrafo">
            <h3 className="testo-dentro-card">
              Piccolo store per divertirmi con css e utilizzare sessioni e autenticazioni php <br />{" "}
              <a
                href="https://github.com/kevin96bit/LogicStore/"
                className="link-card"
                target="_blank"
                rel="noreferrer"
              >
                 GitHub <i className="uil uil-github-alt git-cards"></i>{" "}
              </a>
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
