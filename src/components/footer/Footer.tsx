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
          <li className="nav__item">
            <Link className="nav__link hover-shadow hover-color animated" to="/github">
              <span>G</span>
              <span>i</span>
              <span>t</span>
              <span>h</span>
              <span>u</span>
              <span>b</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link hover-shadow hover-color animated" to="/contacts">
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link hover-shadow hover-color animated" to="/rights">
              <span>r</span>
              <span>i</span>
              <span>g</span>
              <span>h</span>
              <span>t</span>
              <span>s</span>
            </Link>
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
