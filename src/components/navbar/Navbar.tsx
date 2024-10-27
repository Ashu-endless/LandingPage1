"use client";
import { FC, useState } from "react";
import Themebutton from "../themebutton/Themebutton";
import Link from 'next/link';
import Connect from "../contactmodal/Connect";
import Modal from "../modal/Modal";

const Navbar:FC = () => {



    const [quotedisplay, setquotedisplay] = useState(false)
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);
    return <> <header style={{zIndex:1}} className={`text-gray-600 body-font fixed top-0 w-full dark:text-gray-400 ${colorChange
    ? "bg-gradient-to-r from-blue-800 to-indigo-900 text-white"
    : ""}`}>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="text-l font-bold title-font text-gray-500 tracking-widest">AuthCor</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" href="/" >Home</Link>
        <Link className="mr-5 hover:text-gray-900" href="about" >About</Link>
        <Link className="mr-5 hover:text-gray-900" href="services">Services</Link>
        <Link className="mr-5 hover:text-gray-900" href="contact" >Contact</Link>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button onClick={()=>{setquotedisplay(true)}}  className="inline-flex items-center lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Get a quote
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>

      <Themebutton/>
      
    </div>
  </header>
  <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

  <Connect  />
  </Modal>
  </>

}

export default Navbar;
