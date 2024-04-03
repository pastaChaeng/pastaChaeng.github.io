import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false); // Update state when scrolling to section
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-blue-800 bg-opacity-90 border-gray-200 dark:bg-gray-900 fixed w-full z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
            <img
              src='https://i.pinimg.com/736x/e7/c4/e8/e7c4e8cb0e491874d914629fcef9e3b7.jpg'
              className='h-8'
              alt='Arlene Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-gray-400'>
              rlene
            </span>
          </a>
          <div className="flex md:order-2">
            <button type="button" onClick={toggleMenu} className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className={`items-center justify-center w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'fixed inset-0 z-20 overflow-y-auto' : 'hidden'}`} id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white bg-opacity-75 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button onClick={() => scrollToSection('main')} className="block py-3 px-4 text-gray-400 rounded md:text-gray-400 md:p-0 md:hover:bg-gray-100 md:hover:text-gray-700 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:bg-gray-100" aria-current="page">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="block py-3 px-4 text-gray-400 rounded md:text-gray-400 md:p-0 md:hover:bg-gray-100 md:hover:text-gray-700 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:bg-gray-100">Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('certs')} className="block py-3 px-4 text-gray-400 rounded md:text-gray-400 md:p-0 md:hover:bg-gray-100 md:hover:text-gray-700 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:bg-gray-100">Certificates</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resume')} className="block py-3 px-4 text-gray-400 rounded md:text-gray-400 md:p-0 md:hover:bg-gray-100 md:hover:text-gray-700 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:bg-gray-100">Resume</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="block py-3 px-4 text-gray-400 rounded md:text-gray-400 md:p-0 md:hover:bg-gray-100 md:hover:text-gray-700 md:dark:hover:bg-gray-800 md:dark:hover:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:bg-gray-100">Contact Me</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
