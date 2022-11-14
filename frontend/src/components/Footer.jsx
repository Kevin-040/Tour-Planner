import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8 bottom-0 w-screen'>
      <div className='container px-4 sm:flex justify-between items-center'>
        <h1 className='px-2'>Tour Planner</h1>
        <ul className='flex flex-wrap'>
          <li className='p-0 px-2'>
            <a href=''>Home</a>
          </li>
          <li className='p-0 px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='p-0 px-2'>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
