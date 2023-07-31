import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Store from './pages/Store.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import logo from './logo.svg';
import ResponsiveNavigation from './components/ResponsiveNavigation.jsx';

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/home'
    },
    {
      text: 'About',
      path: '/about'
    },
    {
      text: 'Store',
      path: '/store'
    },
    {
      text: 'FAQ',
      path: '/faq'
    },
    {
      text: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation navLinks={ navLinks } logo={ logo } />
      <Router>
        <Home path="/home" />
        <About path="/about" />
        <Store path="/store" />
        <FAQ path="/faq" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;