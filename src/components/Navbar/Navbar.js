import React from 'react';

export default function Navbar({ onNavigate, user, onLogout }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: '#fafafa', borderBottom: '1px solid #eee' }}>
      <div>
        <strong style={{ cursor: 'pointer' }} onClick={() => onNavigate('main')}>GiftLink</strong>
      </div>
      <div>
        {!user && (
          <>
            <button onClick={() => onNavigate('register')}>Register</button>
            <button onClick={() => onNavigate('login')}>Login</button>
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
