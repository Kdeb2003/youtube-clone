// TopNavBar.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './TopNavBar.css'; // Import the CSS file
import {
  AiOutlineGoogle,
  AiOutlineLogout,
  AiOutlineYoutube,
  AiOutlineSetting,
} from 'react-icons/ai';
import { CameraEnhance, Notifications } from '@mui/icons-material';
import {
  FaChevronRight,
  FaUsers,
  FaSignInAlt,
  FaYoutube,
  FaMoneyBillAlt,
  FaShieldAlt,
  FaMoon,
  FaLanguage,
  FaGlobe,
  FaKeyboard,
  FaRegQuestionCircle,
  FaRegCommentAlt,
} from 'react-icons/fa';

const TopNavBar = () => {
  const location = useLocation();
  const isVideoPage = location.pathname.includes('/video/');

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isBlackWindowVisible, setIsBlackWindowVisible] = useState(false);

  const handleProImageClick = () => {
    setIsBlackWindowVisible(!isBlackWindowVisible);
  };

  return (
    <div id="topNavBar">
      <div id="logoContainer">
        <img src="/images/new.png" alt="YoLogo" id="logo" />
        <div id="searchBarContainer">
          <SearchBar />
        </div>
      </div>
      <div id="iconsContainer">
        <CameraEnhance style={{ cursor: 'pointer', color: 'white' }} />
        <Notifications style={{ cursor: 'pointer', color: 'white' }} />
        <img
          src="/images/pro.jpeg"
          alt="Profile"
          id="profileImage"
          onClick={handleProImageClick}
        />
      </div>
      <div id="newComponents">
        {!isVideoPage &&
          Array(14).fill(null).map((_, index) => (
            <div
              key={index}
              className={`componentSpacing ${hoveredIndex === index ? 'hoverStyle' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index <= 13 && <div id="transparentRect"></div>}
              {index === 0 && "All"}
              {index === 1 && "Mixes"}
              {index === 2 && "Music"}
              {index === 3 && "Marvel"}
              {index === 4 && "Hollywood"}
              {index === 5 && "LoFi"}
              {index === 6 && "Bollywood"}
              {index === 7 && "Arijit"}
              {index === 8 && "IronMan"}
              {index === 9 && "Amazon"}
              {index === 10 && "Shopping"}
              {index === 11 && "Shoes"}
              {index === 12 && "Feshion"}
              {index === 13 && <FaChevronRight id="chevronRight" />}
            </div>
          ))}
      </div>
      {isBlackWindowVisible && (
        <div id="blackWindow">
          <img src="/images/pro.jpeg" alt="Profile" id="profileImage" />
          <p id="nameText">Kushal Deb</p>
          <p id="emailText">kushal003deb@gmail.com</p>
          <p id="button">View your channel</p>
          <div id="lineStyle"></div>
          <div className="scrollComponent">
            <AiOutlineGoogle id="iconStyle" />
            <p>Google Account</p>
          </div>
          {/* ... (repeat for other scroll components) */}
          <div id="lineStyle1"></div>
          {/* ... (repeat for other line styles) */}
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
