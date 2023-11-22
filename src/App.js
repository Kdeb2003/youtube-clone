
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TopNavBar from './components/TopNavBar/TopNavBar';
import CardSection from './components/CardSection/CardSection';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscription from './pages/Subscription';
import Channel from './pages/Channel';
import History from './pages/History';
import YourVideos from './pages/YourVideos';
import WatchLater from './pages/WatchLater';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';

import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <TopNavBar />
        <div className="flex-container">
          <div className="navbar-container">
            <NavBar />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/channel" element={<Channel />} />
              <Route path="/history" element={<History />} />
              <Route path="/your-videos" element={<YourVideos />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/video/:videoId" element={<VideoPlayerPage />} />
            </Routes>
            <CardSection />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
