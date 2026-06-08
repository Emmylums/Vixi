import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {Element} from 'react-scroll';
import { faBars, faDove, faPeopleArrows, faPlus, } from "@fortawesome/free-solid-svg-icons"; 
import coin from '../assets/coin.png'
import icon_chat_ticket from '../assets/icon_chat_ticket.png'
import icon_match_ticket from '../assets/icon_match_ticket.png'

const NavBar = ({activeLink}) => {

    const [activeTab, setActiveTab] = useState(activeLink);
    const [isSticky, setIsSticky] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const hideTimerRef = useRef(null);
    
    function action(){
        setActiveTab(activeLink)
    }

    useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY >= window.innerHeight;

      if (shouldBeSticky) {
        setIsSticky(true);
        setShowBackground(true);

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setShowBackground(false);
        }, 5000);
      } else {
        setIsSticky(false);
        setShowBackground(false);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);
    
    const menuItems = [
        { name: "Explore", link: "explore"},
        { name: "Match", link: ""},
        { name: "Message", link: "shop"},
    ];


    return(
            <Element name="top">
                <header className={`select-none font-display2 w-full flex justify-between items-center transition-all duration-100 ease-in z-40 lg:px-10 px-5 text-white ${isSticky ? `bg-black py-3 shadow-lg border border-b border-white/15 ${showBackground ? "fixed" : "absolute"}` : "bg-transparent py-3 landscape:py-3 landscape:lg:py-3 absolute hover:bg-black hover:border-b border-white/15"}`}>
                    <nav className="flex lg:space-x-6 sm:space-x-1 landscape:space-x-6 text-base font-semibold tracking-wide items-center justify-start lg:justify-center ">
                        <Link to="/" smooth="true" duration={700} className="flex text-base space-x-3 text-left font-black items-center cursor-pointer pr-15">
                            <FontAwesomeIcon icon={faDove}></FontAwesomeIcon>
                            <h1 className="tracking-widest text-2xl">Vixi</h1>
                        </Link>
                        {menuItems.map((item) => (
                            <Link to={`/${item.link}`} key={item.name} smooth="true" duration={700} onClick={action}><p className={`hidden md:block hover:text-own-2 pt-2 px-2 pb-1.5 transition duration-500 ease-in-out cursor-pointer text-nowrap ${
                                activeTab === item.name
                                ? " border-b-2 text-white font-bold"
                                : "text-gray-300 hover:text-white"
                            }`}>{item.name}</p></Link>
                        ))}
                    </nav>
                    <nav className="md:w-1/4 items-center space-x-5 md:space-x-2 font-semibold tracking-wide justify-end text-base flex">
                        <Link to="/register">
                            <div className="flex items-center justify-center space-x-1 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white rounded-lg px-2 py-2">
                                <img src={coin} alt="" className="h-6" />
                                <span>0</span>
                                <FontAwesomeIcon icon={faPlus} className="bg-pink-500 rounded-full p-1 text-xs"/>
                            </div>
                        </Link>
                        <div className="flex items-center justify-center space-x-1 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white rounded-lg px-3 py-2">
                            <img src={icon_match_ticket} alt="" className="h-5"/>
                            <span className="pr-2">0</span>
                            <img src={icon_chat_ticket} alt="" className="h-5"/>
                            <span>0</span>
                        </div>
                    </nav>
                </header>
            </Element>
        );
}

export default NavBar;