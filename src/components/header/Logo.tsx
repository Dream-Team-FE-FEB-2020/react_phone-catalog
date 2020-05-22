import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/home" className="logo">logo link</Link>
  );
};

export default Logo;
