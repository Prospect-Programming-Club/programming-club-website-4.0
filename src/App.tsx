import React from 'react';
import './App.css';
import { useDisplayMode } from './state/displayMode';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [displayMode] = useDisplayMode();
  const location = useLocation();

  React.useEffect(() => {
    if (displayMode === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [displayMode]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="App">
      {location.pathname === '/' ? <Home /> : null}
      {location.pathname === '/contact' ? <Contact /> : null}
      {location.pathname === '/blog' ? <Blog /> : null}
    </div>
  );
}

export default App;
