import React, { useEffect, useState } from 'react';
import Logo from '../header/Logo/Logo';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [scrollOn, setscrollOn] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0);
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
          className='back-to-top'
          onClick={() => setscrollOn(true)}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.528575 5.47124C0.268226 5.21089 0.268226 4.78878 0.528575 4.52843L4.52858 0.528433C4.78892 0.268083 5.21103 0.268083 5.47138 0.528433L9.47138 4.52843C9.73173 4.78878 9.73173 5.21089 9.47138 5.47124C9.21103 5.73159 8.78893 5.73159 8.52858 5.47124L4.99998 1.94265L1.47138 5.47124C1.21103 5.73159 0.788925 5.73159 0.528575 5.47124Z" fill="#313237"/>
            </svg>
          </button>
      </div>
    </footer>
  );
};

export default Footer;
