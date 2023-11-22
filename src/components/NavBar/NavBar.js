import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { FaHome, FaPlay, FaUser, FaHistory, FaVideo, FaClock, FaChevronDown, FaBolt, FaShoppingBag, FaFilm, FaMusic, FaBroadcastTower, FaPodcast, FaCog, FaFlag, FaChevronRight } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation();
  const isVideoPage = location.pathname.includes('/video/');
  const isHomePage = location.pathname === '/';

  const navItems = [
    { icon: <FaHome />, text: 'Home', link: '/' },
    { icon: <FaPlay />, text: 'Shorts', link: '/shorts' },
    { icon: <FaUser />, text: 'Subscription', link: '/subscription' },
    { text: 'You', link: '/you' },
    { icon: <FaHistory />, text: 'History', link: '/history' },
    { icon: <FaVideo />, text: 'Your Videos', link: '/your-videos' },
    { icon: <FaClock />, text: 'Watch Later', link: '/watch-later' },
    { icon: <FaChevronDown />, text: 'Show More', link: '/show-more' },
    { text: 'Subscriptions' },
    { img: '/images/p.jpg', text: 'The Relax Guy', link: '/relax-guy' },
    { img: '/images/vedantu.jpg', text: 'Vedantu', link: '/vedantu' },
    { img: '/images/carry minati.jpg', text: 'Carry Minati', link: '/carry-minati' },
    { img: '/images/lofi.jpg', text: 'Lofi', link: '/lofi' },
    { img: '/images/tseries.jpg', text: 'T-Series', link: '/t-series' },
    { icon: <FaChevronDown />, text: 'Show More 184', link: '/show-more-184' },
    { text: 'Explore' },
    { icon: <FaBolt />, text: 'Trending', link: '/trending' },
    { icon: <FaShoppingBag />, text: 'Shopping', link: '/shopping' },
    { icon: <FaFilm />, text: 'Movies', link: '/movies' },
    { icon: <FaMusic />, text: 'Music', link: '/music' },
    { icon: <FaBroadcastTower />, text: 'Live', link: '/live' },
    { icon: <FaPodcast />, text: 'Podcasts', link: '/podcasts' },
    { icon: <FaCog />, text: 'Settings', link: '/settings' },
    { icon: <FaFlag />, text: 'Report History', link: '/report-history' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setHoveredIndex(null); 
  }, [location]);

  return (
    isHomePage && (
      <div className="navbar-container">
        <style>
          {`
            ::-webkit-scrollbar {
              width: 5px;
            }

            ::-webkit-scrollbar-thumb {
              background-color: #83898b;
            }
          `}
        </style>
        <ul className="navbar-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`navbar-item ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={item.link} className="navbar-link">
                {item.img && <img src={item.img} alt={item.text} className="navbar-img" />}
                {item.icon && <span className="navbar-icon">{item.icon}</span>}
                {item.text && <span className="navbar-text">{item.text}</span>}
                {index === 3 && <FaChevronRight className="navbar-chevron" />}
              </Link>
              {index === 2 || index === 7 || index === 14 || index === 21 || index === 23 ? <div className="navbar-line"></div> : null}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default NavBar;
