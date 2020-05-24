import React from 'react';
import Logo from '../header/Logo/Logo';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Logo />
        <ul className="footer__nav-links">
          <li>
            <Link to="/github" className="nav__link">Github</Link>
          </li>
          <li>
            <Link to="/contacts" className="nav__link">Contacts</Link>
          </li>
          <li>
            <Link to="/rights" className="nav__link footer__link">Rights</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
