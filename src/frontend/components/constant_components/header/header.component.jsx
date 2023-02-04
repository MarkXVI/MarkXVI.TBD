import React from "react";
import '../../../stylesheets/header.stylesheet.css';
import logo from './../../../assets/MarkXVI_LOGO.svg';

const Header = (setActivePanel) => {

    return (
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <h1>MarkXVI.TBD</h1>
          <nav>
            <ul>
              <li><a onClick={() => setActivePanel.setActivePanel('start')}>Home</a></li>
              <li><a onClick={() => setActivePanel.setActivePanel('3dstart')}>3D-Home</a></li>
              <li><a onClick={() => setActivePanel.setActivePanel('cv')}>CV</a></li>
              <li><a onClick={() => setActivePanel.setActivePanel('3dcv')}>3D-CV</a></li>
              <li><a onClick={() => setActivePanel.setActivePanel('contact')}>Contact</a></li>
            </ul>
          </nav>
        </header>
      );
};

export default Header;
