// navbar component

import React from 'react';
import './navbar.css';
import { useDisplayMode } from '../state/displayMode';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function Navbar() {
  const [displayMode, setDisplayMode] = useDisplayMode();

  const toggle = () => {
    (setDisplayMode as () => void)();
  }
  return (
    <nav>
      <button onClick = {() => toggle()} className="displayMode">
        {displayMode === 'light' ? <BsSun size = "20" /> : <BsMoon size = "20" />}
      </button>
      <ul>
        <li>
          
        </li>
        <li>
          <a href = "/">Home</a>
        </li>
        <li>
          <a href = "/contact">Contact/Joining</a>
        </li>
        <li>
          <a href = "/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
