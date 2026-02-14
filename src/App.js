import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import GiftDetails from './components/GiftDetails/GiftDetails';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Search from './components/Search/Search';

export default function App() {
  const [gifts, setGifts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [user, setUser] = useState(() => localStorage.getItem('username') || null);
  const navigate = useNavigate();

  // Fetch all gifts
  function fetchAllGifts() {
    const API_URL = process.env.API_URL || 'http://localhost:3000';
    fetch(`${API_URL}/api/gifts`)
      .then(r => r.json())
      .then(setGifts)
      .catch(console.error);
  }

  useEffect(() => {
    fetchAllGifts();
  }, []);

  function openDetails(gift) {
    setSelected(gift);
    navigate(`/gifts/${gift._id}`);
    window.scrollTo(0,0);
  }

  function onLogin(username) {
    setUser(username);
    localStorage.setItem('username', username);
    navigate('/');
  }

  function onLogout() {
    setUser(null);
    localStorage.removeItem('username');
    navigate('/');
  }

  function onSearchResults(results, isClear) {
    setSelected(null);
    if (isClear) {
      fetchAllGifts();
    } else {
      setGifts(results);
    }
  }

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 24, background: '#fff', minHeight: '80vh', borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Search onResults={onSearchResults} />
              <MainPage gifts={gifts} onSelect={openDetails} />
            </>
          } />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/gifts/:id" element={<GiftDetails gift={selected} />} />
        </Routes>
      </div>
    </div>
  );
}
