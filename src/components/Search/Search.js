import React, { useState } from 'react';

export default function Search({ onResults }) {
  const [category, setCategory] = useState('');

  async function submit(e) {
    e && e.preventDefault();
    const q = category.trim();
    const url = q ? `http://localhost:3000/api/gifts/search?category=${encodeURIComponent(q)}` : 'http://localhost:3000/api/gifts';
    const res = await fetch(url);
    const data = await res.json();
    onResults(data, false);
  }

  async function clearSearch() {
    setCategory('');
    onResults([], true);
  }

  return (
    <form onSubmit={submit} style={{ marginBottom: 12 }}>
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category (e.g. Home)" />
      <button type="submit">Search</button>
      <button type="button" onClick={clearSearch}>Clear</button>
    </form>
  );
}
