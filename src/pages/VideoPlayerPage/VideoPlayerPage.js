// VideoPlayerPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FaShare, FaSort } from 'react-icons/fa';
import SideCards from '../../components/SideCards/SideCards';
import './VideoPlayerPage.css'; // Import the CSS file

const VideoPlayerPage = () => {
  const { videoId } = useParams();

  const videoUrls = [
    '/videos/1.mp4',
    '/videos/2.mp4',
    '/videos/2.mp4',
  ];

  const imageUrls = [
    '/images/img1.png',
    '/images/img2.png',
    '/images/img3.png',
  ];

  const selectedVideoUrl = videoUrls[parseInt(videoId, 10) - 1];
  const selectedImageUrl = imageUrls[parseInt(videoId, 10) - 1];

  const [isHovered, setIsHovered] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubscribeClick = () => {
    setIsSubscribed((prev) => !prev);
  };

  const handleLikeClick = () => {
    setLikeClicked((prev) => !prev);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setDislikeClicked((prev) => !prev);
    setLikeClicked(false);
  };

  return (
    <div className="container">
      <div className="player">
        <ReactPlayer url={selectedVideoUrl} width="70%" height="70%" controls />
        {videoId === '1' && (
          <>
            <div className="text-container">
              <p>Stranger Things Season 4 || Netflix Originals || Horror and Thriller || Latest 2023 || Netflix India</p>
            </div>
            <img src={selectedImageUrl} alt="Image" className="image" />
            <div className="text-container-1">
              <p>Netflix India</p>
            </div>
            <div className="text-container-2">
              <p>125M Subscribers</p>
            </div>
            <div className="video1-text-1">
              <p>Dream Episodes - 2023</p>
            </div>
            <div className="video1-text-1 video1-text-2">
              <p>48 minutes || Thriller</p>
            </div>
            <div className="video1-text-3">
              <p>Netflix Originals</p>
            </div>
                        <div className="video1-text-3">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-4">
              <p>6M Views. 2 Years</p>
            </div>
            <div className="video1-text-1 video1-text-5">
              <p>Webseires Latest - 2023</p>
            </div>
            <div className="video1-text-1 video1-text-6">
              <p>32 minutes ||Girls Section</p>
            </div>
            <div className="video1-text-3 video1-text-7">
              <p>Movies Review Channel</p>
            </div>
            <div className="video1-text-3 video1-text-8">
              <p>280k Views. 1 Year</p>
            </div>
            <div className="video1-text-1 video1-text-9">
              <p>Shadow: Devil's World</p>
            </div>
            <div className="video1-text-1 video1-text-10">
              <p>1.20 Hours ||Latest Series</p>
            </div>
            <div className="video1-text-3 video1-text-11">
              <p>Amazon Prime</p>
            </div>
            <div className="video1-text-3 video1-text-12">
              <p>498k Views. 7 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-13">
              <p>The Boys: Destroyers</p>
            </div>
            <div className="video1-text-1 video1-text-14">
              <p>7 minutes ||Trailer</p>
            </div>
            <div className="video1-text-3 video1-text-15">
              <p>Amazon Prime</p>
            </div>
            <div className="video1-text-3 video1-text-16">
              <p>20M Views. 5 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-17">
              <p>Wanda Vision|| 2023</p>
            </div>
            <div className="video1-text-1 video1-text-18">
              <p>5 minutes ||Trailer</p>
            </div>
            <div className="video1-text-3 video1-text-19">
              <p>Marvel Studios</p>
            </div>
            <div className="video1-text-3 video1-text-20">
              <p>8M Views. 10 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-21">
              <p>1996 Series|| All Episodes</p>
            </div>
            <div className="video1-text-1 video1-text-22">
              <p>30 minutes ||Explained</p>
            </div>
            <div className="video1-text-3 video1-text-23">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-24">
              <p>671K Views. 3 Months</p>
            </div>
            <div className="video1-text-1 video1-text-25">
              <p>Wednesday|| All Episodes</p>
            </div>
            <div className="video1-text-1 video1-text-26">
              <p>45 minutes ||Explained</p>
            </div>
            <div className="video1-text-3 video1-text-27">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-28">
              <p>800K Views. 2 Months</p>
            </div>
            <div className="video1-text-1 video1-text-29">
              <p>Herry Potter|| Latest News</p>
            </div>
            <div className="video1-text-1 video1-text-30">
              <p>25 minutes ||Breaking News</p>
            </div>
            <div className="video1-text-3 video1-text-31">
              <p>Hollywood News</p>
            </div>
            <div className="video1-text-3 video1-text-32">
              <p>10M Views. 10 Days</p>
            </div>
            <div className="rectangle-box"></div>
            <div className=" video1-text-33">
              <p>11M Views</p>
            </div>
            <div className=" video1-text-34">
              <p>1 Year Ago</p>
            </div>
            <div className=" video1-text-35">
              <p>#strangerthings</p>
            </div>
            <div className=" video1-text-36">
              <p>#hollywoodseries</p>
            </div>
            <div className=" video1-text-37">
              <p>Presenting Stranger Things [Horror + Thriller] Season 4 Latest</p>
            </div>
            <div className=" video1-text-38">
              <p>_____________________________________</p>
            </div>
            <div className=" video1-text-39">
              <p>For horror experience </p>
            </div>
            <div className=" video1-text-40">
              <p>1,300 Comments </p>
            </div>
            <img src="/images/pro.jpeg" alt="Profile" className="profile-image" />
          </>
        )}
        {videoId === '3' && (
          <>
            <div className="text-container">
              <p>Wednesday Dance || Netflix Originals || Season 1 || Dance || Thriller || Latest 2023 || Netflix India</p>
            </div>
            <img src={selectedImageUrl} alt="Image" className="image" />
            <div className="text-container-1">
              <p>Wednesday</p>
            </div>
            <div className="text-container-2">
              <p>15M Subscribers</p>
            </div>
          </>
        )}
        {videoId === '3' && (
          <>
            <div className="text-container">
              <p>Wednesday Dance || Netflix Originals || Season 1 || Dance || Thriller || Latest 2023 || Netflix India</p>
            </div>
            <img src={selectedImageUrl} alt="Image" className="image" />
            <div className="text-container-1">
              <p>Wednesday</p>
            </div>
            <div className="text-container-2">
              <p>15M Subscribers</p>
            </div>
            <div className="video1-text-1">
              <p>Dream Episodes - 2023</p>
            </div>
            <div className="video1-text-1 video1-text-2">
              <p>48 minutes || Thriller</p>
            </div>
            <div className="video1-text-3">
              <p>Netflix Originals</p>
            </div>
                        <div className="video1-text-3">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-4">
              <p>6M Views. 2 Years</p>
            </div>
            <div className="video1-text-1 video1-text-5">
              <p>Webseires Latest - 2023</p>
            </div>
            <div className="video1-text-1 video1-text-6">
              <p>32 minutes ||Girls Section</p>
            </div>
            <div className="video1-text-3 video1-text-7">
              <p>Movies Review Channel</p>
            </div>
            <div className="video1-text-3 video1-text-8">
              <p>280k Views. 1 Year</p>
            </div>
            <div className="video1-text-1 video1-text-9">
              <p>Shadow: Devil's World</p>
            </div>
            <div className="video1-text-1 video1-text-10">
              <p>1.20 Hours ||Latest Series</p>
            </div>
            <div className="video1-text-3 video1-text-11">
              <p>Amazon Prime</p>
            </div>
            <div className="video1-text-3 video1-text-12">
              <p>498k Views. 7 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-13">
              <p>The Boys: Destroyers</p>
            </div>
            <div className="video1-text-1 video1-text-14">
              <p>7 minutes ||Trailer</p>
            </div>
            <div className="video1-text-3 video1-text-15">
              <p>Amazon Prime</p>
            </div>
            <div className="video1-text-3 video1-text-16">
              <p>20M Views. 5 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-17">
              <p>Wanda Vision|| 2023</p>
            </div>
            <div className="video1-text-1 video1-text-18">
              <p>5 minutes ||Trailer</p>
            </div>
            <div className="video1-text-3 video1-text-19">
              <p>Marvel Studios</p>
            </div>
            <div className="video1-text-3 video1-text-20">
              <p>8M Views. 10 Hours</p>
            </div>
            <div className="video1-text-1 video1-text-21">
              <p>1996 Series|| All Episodes</p>
            </div>
            <div className="video1-text-1 video1-text-22">
              <p>30 minutes ||Explained</p>
            </div>
            <div className="video1-text-3 video1-text-23">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-24">
              <p>671K Views. 3 Months</p>
            </div>
            <div className="video1-text-1 video1-text-25">
              <p>Wednesday|| All Episodes</p>
            </div>
            <div className="video1-text-1 video1-text-26">
              <p>45 minutes ||Explained</p>
            </div>
            <div className="video1-text-3 video1-text-27">
              <p>Netflix Originals</p>
            </div>
            <div className="video1-text-3 video1-text-28">
              <p>800K Views. 2 Months</p>
            </div>
            <div className="video1-text-1 video1-text-29">
              <p>Herry Potter|| Latest News</p>
            </div>
            <div className="video1-text-1 video1-text-30">
              <p>25 minutes ||Breaking News</p>
            </div>
            <div className="video1-text-3 video1-text-31">
              <p>Hollywood News</p>
            </div>
            <div className="video1-text-3 video1-text-32">
              <p>10M Views. 10 Days</p>
            </div>
            <div className="rectangle-box"></div>
            <div className=" video1-text-33">
              <p>10M Views</p>
            </div>
            <div className=" video1-text-34">
              <p>1 Year Ago</p>
            </div>
            <div className=" video1-text-35">
              <p>#wednesday@1</p>
            </div>
            <div className=" video1-text-36">
              <p>#netflixseries</p>
            </div>
            <div className=" video1-text-37">
              <p>Presenting Wednesday [Horror + Thriller] Season 1 2023</p>
            </div>
            <div className=" video1-text-38">
              <p>___________________________________________</p>
            </div>
            <div className=" video1-text-39">
              <p>Watch supernatural actions </p>
            </div>
            <div className=" video1-text-40">
              <p>1,197 Comments </p>
            </div>
            <img src="/images/pro.jpeg" alt="Profile" className="profile-image" />
          </>
        )}
        <button
          className={`button subscribe-button ${isHovered ? 'hover' : ''} ${isSubscribed ? 'subscribed' : ''}`}
          onClick={handleSubscribeClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
        <div>
          <button className="button like-button" onClick={handleLikeClick}>
            {likeClicked ? <AiFillLike className="filled-icon" /> : <AiOutlineLike className="icon" />}
            147k
          </button>
          <button className="button dislike-button" onClick={handleDislikeClick}>
            {dislikeClicked ? <AiFillDislike className="filled-icon" /> : <AiOutlineDislike className="icon" />}
          </button>
          <button className="button share-button">
            Share
            <FaShare className="share-icon" />
          </button>
        </div>
        <button
          className={`button sort-button`}
        >
          <FaSort className="sort-icon" />
        </button>
        <div className="video1-text-41">
          <p>Sort</p>
        </div>
        <div
          contentEditable
          className="comment-field"
          onFocus={(e) => e.target.textContent === 'Add Comment' && (e.target.textContent = '')}
          onBlur={(e) => e.target.textContent === '' && (e.target.textContent = 'Add Comment')}
        >
          Add Comment
        </div> 
        <button
          className={`comment-button`}
        >
          Comment
        </button>  
        <button
          className={`cancel-button`}
        >
          Cancel
        </button> 
      </div>
      <SideCards />
    </div>
  );
};

export default VideoPlayerPage;
