import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Navbar = ({ aboutButtonRef, workButtonRef, contactButtonRef }) => {
  
  const [theme,setTheme] = useState("light-mode")

  // funzione che cambia il tempo a seconda del suo valore
  const cambiaTema = ()=> {
    if(theme === "light-mode"){
      setTheme("dark-mode")
    }
    else{
      setTheme("light-mode")
    }
  }

  //  altera in base allo state e gli da  
  useEffect(()=>{
  document.documentElement.className= theme
 },[theme])
  
  
  // fine dark mode test
  
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    aboutButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWork = (e) => {
    e.preventDefault();
    workButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    contactButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // hamburger menu
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerAttivazione = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div>
        <motion.div animate={{ y: 5 }} className="menu">
          <ul>
            <li>
              <a href="#4">
                <i className="uil uil-estate"></i>Home{" "}
              </a>
            </li>
            <li>
              <a href="#3" onClick={handleScrollToAbout}>
                <i className="uil uil-user"></i>About
              </a>
            </li>
            <li>
              <a href="#2" onClick={handleScrollToWork}>
                <i className="uil uil-briefcase-alt"></i>Work
              </a>
            </li>
            <li>
              <a href="#1" onClick={handleScrollToContact}>
                <i className="uil uil-message"></i>Contact
              </a>
            </li>
            {/* Toggle switches a fianco all'ultimo elemento li */}

            {/* <label className="switch">
              <input type="checkbox" onClick={cambiaTema}/>
              <span className="slider round"></span>
            </label> */}
          </ul>
        </motion.div>
      </div>
      <label className="switch">
              <input type="checkbox" onClick={cambiaTema}/>
              <span className="slider round"></span>
            </label>
      {/* // HAMBURGER MENU  */}
      <div
        className={`nav-hamburger ${hamburgerOpen && "open"}`}
        onClick={hamburgerAttivazione}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {hamburgerOpen && (
        <div
          className="container-link-hamburger"
          onClick={hamburgerAttivazione}
        >
          <a href="5">
            <h1>
              Home <i className="uil uil-estate"></i>
            </h1>
          </a>
          <a href="8" onClick={handleScrollToAbout}>
            <h1>
              About <i className="uil uil-user"></i>
            </h1>
          </a>
          <a href="7" onClick={handleScrollToWork}>
            <h1>
              Work <i className="uil uil-briefcase-alt"></i>
            </h1>
          </a>
          <a href="6" onClick={handleScrollToContact}>
            <h1>
              Contact <i className="uil uil-message"></i>
            </h1>
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
