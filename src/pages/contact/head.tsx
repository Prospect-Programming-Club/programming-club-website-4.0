import React from 'react';
import { MdLocationPin } from 'react-icons/md';

import "../home/home.css"

export default function Header() {

  return (
    <>
    <header>
      <div className = "header-content">
        <h1 className = "header-h1">
          {/*
          <Typewriter
            options = {{
              strings: ['Programming Club'],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 9999999999,
              cursor: "",
            }}
          />
          */}
          Contact
        </h1>
        <p className = "contact-p">How to contact the Programming Club</p>
      </div>
    </header>

    {/*
    <div className = "hidden" ref = {aboutRef}>
      <h1 className = "about-h1">Who we are</h1>
      <p className = "text-right flyfromright hidden abouttext" ref = {aboutTextRef}>We are the Prospect Programming Club, located at <a className = "about-link" href = "https://prospect.cuhsd.org/" target = "_blank">Prospect High School </a></p>
    </div>
        */}
    </>
  )
}