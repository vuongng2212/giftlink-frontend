import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import GiftDetails from './components/GiftDetails/GiftDetails';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import Search from './components/Search/Search';

export default function App() {
  const [gifts, setGifts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('main'); // main, register, login
  const [user, setUser] = useState(() => localStorage.getItem('username') || null);

  useEffect(() => {
    fetch('http://localhost:3000/api/gifts')
      .then(r => r.json())
      .then(setGifts)
      .catch(console.error);
  }, []);

  function openDetails(gift) {
    setSelected(gift);
    window.scrollTo(0,0);
  }

  function onLogin(username) {
    setUser(username);
    localStorage.setItem('username', username);
    setView('main');
  }

  function onLogout() {
    setUser(null);
    localStorage.removeItem('username');
  }

  function onSearchResults(results) {
    setGifts(results);
    setView('main');
  }

  return (
    <div>
      <Navbar onNavigate={setView} user={user} onLogout={onLogout} />
      <div style={{ padding: 16 }}>
        <Search onResults={onSearchResults} />
        {view === 'register' && <RegisterPage />}
        {view === 'login' && <LoginPage />}
        {view === 'main' && <MainPage gifts={gifts} onSelect={openDetails} />}
        {selected && <GiftDetails gift={selected} />}
      </div>
    </div>
  );
}
