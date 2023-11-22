// CardSection.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CardSection.css'; // Import the CSS file

const CardSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/'; // Adjust the path as needed

  if (!isHomePage) {
    return null; // Do not render CardSection for non-home pages
  }

  const cardTexts = [
    "Stranger Things Season 5",
    "New Series 1996 Episode 1",
    "Wednesday Episodes Latest",
    "Dream: The god of death",
    "Top 10 Series for girls 2023",
    "Shadow Episodes released",
    "Hollywood Movies 2023",
    "Webseries Explained Hindi",
    "Harry Potter Part 1",
  ];

  const viewTexts = [
    "2.5M Views . 2 Years",
    "65k Views . 1 Years",
    "2M Views . 6 Months",
    "7M Views . 8 Months",
    "25M Views . 3 Years",
    "78k Views . 1 Years",
    "12k Views . 3 Hours",
    "2.6M Views . 1 Years",
    "1M Views . 8 Years",
  ];

  const navigateToVideo = (index) => {
    navigate(`/video/${index + 1}`);
  };

  return (
    <div id="containerStyle">
      {cardTexts.map((text, index) => (
        <div key={index} className="cardStyle" onClick={() => navigateToVideo(index)}>
          <img src={`/images/img${index + 1}.png`} alt={`Image ${index + 1}`} className="cardImage" />
          <div className="circularImageStyle">
            <img src={`/images/img${index + 1}.png`} alt={`Circular Image ${index + 1}`} className="circularImage" />
          </div>
          <div className="textContainerStyle">{text}</div>
          <div className="viewTextStyle">{viewTexts[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
