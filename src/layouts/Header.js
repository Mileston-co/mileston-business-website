// src/components/Header.js
import React from 'react';
import Logo from './../components/Logo';
import RightActions from './RightActions';

const Header = () => (
  <header className="grid grid-cols-2 lg:grid-cols-3 items-center px-10 py-5 w-full bg-white"
    style={{zIndex: -50}}
  >
    <div className='hidden lg:block'></div>
    <div className='flex justify-start lg:justify-center'>
      <Logo />
    </div>
    <div className='flex justify-end'>
      <RightActions />
    </div>

  </header>
);

export default Header;
