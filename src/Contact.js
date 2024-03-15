import React, { useRef,useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// effetto di framermotion
const effetto = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChilder: 0.1,
    },
  },
};

const Contact = ({contactButtonRef}) => {
 
  
  
  const formRef = useRef();
  const [errore,setErrore] = useState(false)
  const [successo,setSuccesso] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rv3fn7d', 'template_ita', formRef.current, {
        publicKey: 's8SHwkWx0MQP5JnpB',
      })
      .then(
        () => {
          setSuccesso(true);
          console.log('SUCCESS!');
        },
        (error) => {
          setErrore(true);
          console.log('FAILED...', error.text);
        },
      );
  };

  // Console log per controllare il valore del ref
  console.log("Contact ref:", contactButtonRef);

  
  
  return (
    <div style={{display:"flex", flexDirection:"column", padding:"5%"}}>
    <motion.div className="contact" variants={effetto} initial="initial" whileInView="animate" ref={contactButtonRef}>
      <motion.div className="textContainer" variants={effetto}>
        <motion.h1 className="testo-contact">Lasciami una recensione</motion.h1>
        <motion.div className="item" variants={effetto}>
          <h2><i className="uil uil-at"></i> Email</h2>
          <span>kevin96imerti@outlook.it</span>
        </motion.div>
        <motion.div className="item" variants={effetto}>
          <h2><i className="uil uil-map-pin"></i> Indirizzo</h2>
          <span>Via pasolini 3, Fano (PU)</span>
        </motion.div>
        <motion.div className="item" variants={effetto}>
          <h2><i className="uil uil-phone"></i> Cellulare</h2>
          <span>+39 3898777706</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form onSubmit={sendEmail}
        ref={formRef}
        >
          <input type="text" placeholder="Name" name="name"/>
          <input type="email" placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button className="dc">Submit</button>
          {errore &&  <span style={{ color: 'red' }}>"Errore"</span>}
          {successo && <span style={{ color: 'aqua' }}>"Email inviata con successo"</span>}

        </form>
      </div>
    </motion.div>
    <a href="#" style={{textDecoration:"none"}}><h1 className="tornaHome" style={{textAlign:"center",paddingTop:"20px", color:"white"}}>Torna alla Home <i className="uil uil-arrow-up"></i> </h1></a>
    

    </div>

    
    //     <div className="box-immagine-contatti"></div>
   
  );
};

export default Contact;
