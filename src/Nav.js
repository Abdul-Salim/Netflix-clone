import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
        console.log("blackkkkkkk");
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=600"
        alt="Netflix Logo"
      />
      {/* <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_image/124011999041155"
      /> */}
    </div>
  );
}

export default Nav;
