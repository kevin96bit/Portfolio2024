import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";


// aggiungere la sezione "why"
//

// palette dei colori per il layout del sito
// https://mycolor.space/?hex=%23845EC2&sub=1

function App() {
  const aboutButtonRef = useRef(null);
  const workButtonRef = useRef(null);
  const contactButtonRef = useRef(null);

  return (
    <div>
      <section>
        <Navbar
          aboutButtonRef={aboutButtonRef}
          workButtonRef={workButtonRef}
          contactButtonRef={contactButtonRef}
        />
        <Home />
      </section>
      <section ref={aboutButtonRef}>
        <About />
      </section>
      <section className="work-section" ref={workButtonRef}>
        <Service />
      </section>
      <section className="contact-section">
        <Contact contactButtonRef={contactButtonRef} /> 
      </section>
    </div>
  );
}

export default App;
