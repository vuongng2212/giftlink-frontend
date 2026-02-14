import React, { useState } from 'react';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const API_URL = process.env.API_URL || 'http://localhost:3000';
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) setMessage('Đăng ký thành công!');
    else setMessage(data.error || 'Lỗi đăng ký');
  };

  return (
    <form onSubmit={handleRegister}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Đăng ký</button>
      <div>{message}</div>
    </form>
  );
}

export default RegisterPage;
