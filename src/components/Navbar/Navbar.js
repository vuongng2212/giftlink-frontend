import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: '#fafafa', borderBottom: '1px solid #eee' }}>
      <div>
        <strong style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>GiftLink</strong>
      </div>
      <div>
        {!user && (
          <>
            <button onClick={() => navigate('/register')}>Register</button>
            <button onClick={() => navigate('/login')}>Login</button>
          </>
        )}
        {user && (
          <>
            <span style={{ marginRight: 8 }}>Hello, {user}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
