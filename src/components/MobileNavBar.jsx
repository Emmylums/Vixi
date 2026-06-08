import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";


const MobileNavBar = ({ isVisible, activeLink, onClose, className }) => {
  
  const [activeTab, setActiveTab] = useState(activeLink);

  function action(){
    setActiveTab(activeLink)
  }

  const menuItems = [
      { name: "Home", link: ""},
      { name: "About", link: "about"},
      { name: "Shop", link: "shop"},
      { name: "FAQ", link: "faq"},
      { name: "Contact", link: "contact"},
  ];

  return (
    <>
      <div onClick={onClose} className={`${isVisible ? "bg-black/40 backdrop-blur-sm z-50 fixed top-0 w-full h-screen" : ""}`}>

      </div>
      <div
        className={`sm:hidden landscape:hidden fixed right-0 top-0 w-64 h-screen px-4 bg-[rgb(77,77,77)] text-[#dfe3e7] transform font-display4 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50 ${className}`}
      >
        <div className="flex justify-between items-center px-2 mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="sm:hidden landscape:hidden text-xl" onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2"> 
              <Link to={`/${item.link}`}>
                <button
                  onClick={action}
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeTab === item.name
                    ? "bg-gray-900 text-white"
                    : ""
                  }`}
                  >
                    {item.name}
                    {item.icon && item.icon}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="px-4 mt-5 space-x-4">
          <Link to="/register" >
            <button className="mb-5 bg-white text-black px-4 py-2 rounded-md">Register</button>
          </Link>
          <Link to="/login" className="text-left py-2 rounded">
            <button className="mb-5 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-white hover:text-black hover:bg-white px-4 py-2 rounded-md">Login</button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileNavBar;
