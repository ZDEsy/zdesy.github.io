import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-scroll";
import Themetoggle from "../components/themetoggle";
import Switch from "../components/languageSwitch";
import useContent from "../content_option";

const Headermain = () => {
  const { logotext, socialprofils, section } = useContent();
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Switch />
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link to="home" smooth={true} duration={50} offset={-60} onClick={handleToggle} className="my-3">
                                          { section.menuhome }
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="portfolio" smooth={true} duration={50} offset={-60} onClick={handleToggle} className="my-3">
                                          { section.portfolio }
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="about" smooth={true} duration={50} offset={-60} onClick={handleToggle} className="my-3">
                                          { section.menuabout }
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link to="contact" smooth={true} duration={50} onClick={handleToggle} className="my-3">
                                          { section.menucontact }
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
                          <a href={socialprofils.facebook} target="_blank" rel="noreferrer">Facebook</a>
                          <a href={socialprofils.github} target="_blank" rel="noreferrer">Github</a>
                          <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
