import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import {Link} from 'react-scroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY >= 300;

      if (shouldBeVisible) {
        setIsVisible(true);
        setShow(true);

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setShow(false);
        }, 2500);
      } else {
        setIsVisible(false);
        setShow(false);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <Link to="top" smooth={true} duration={500}>
    <button
      className={`fixed bottom-5 right-5 px-3 py-2 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white text-white rounded-lg transition-all ease-in-out duration-150 ${
        isVisible ? `opacity-100 z-50 cursor-pointer ${show ? "" : "hidden"}` : "opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faGreaterThan} className="transform-[rotate(270deg)]" />
    </button>
    </Link>
  );
};

export default ScrollToTopButton;