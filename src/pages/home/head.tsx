// import React from 'react';
// import Typewriter from 'typewriter-effect';
import Navbar from '../../components/navbar';
import { MdLocationPin } from 'react-icons/md';


export default function Header() {
/*
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const aboutTextRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
        }
      });
    });
    observer.observe(aboutRef.current!);
    observer.observe(aboutTextRef.current!);
  });
  */

  return (
    <>
    <Navbar />
    <header>
      <div className = "header-content">
        <img className = "logo" src = "/imgs/club.webp" alt = "Programming Club Icon"/>
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
          Programming Club
        </h1>
        <p className = "header-p"><MdLocationPin /> Prospect High School </p>
      </div>
    </header>

    <div className = "filler"></div>
    </>
  )
}