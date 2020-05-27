import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/Logo/Logo';
import './Footer.scss';

const Footer = () => {
  const [scrollOn, setscrollOn] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setscrollOn(false);
  }, [scrollOn]);

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
        <button
          type="button"
          className="back-to-top"
          onClick={() => setscrollOn(true)}
        >
          <img src="./img/backToTop.svg" alt="back to top" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
