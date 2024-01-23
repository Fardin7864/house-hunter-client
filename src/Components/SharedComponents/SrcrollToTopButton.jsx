import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {BsArrowUpCircleFill} from "react-icons/bs";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-5 right-5 p-2 text-3xl rounded-lg bg-gray-500 z-10 text-white awesome-btn awesome-btns ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
    <BsArrowUpCircleFill/>
    </button>
  );
};

export default ScrollToTopButton;
