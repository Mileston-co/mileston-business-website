// src/components/Header.js
import React from 'react';
import Logo from './../components/Logo';
import NavLink from './../components/NavLink';
import RightActions from './RightActions';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="grid grid-cols-3 px-10 py-5 fixed top-0 w-full bg-white">
    <div></div>
    <div className='flex justify-center'>
      <Logo />
    </div>
    <div className='flex justify-end'>
      <RightActions />
    </div>

  </header>
);

export default Header;
