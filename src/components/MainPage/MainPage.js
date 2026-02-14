import React from 'react';

export default function MainPage({ gifts, onSelect }) {
  return (
    <div>
      <h2>All Gifts</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 12 }}>
        {gifts.map(g => (
          <div key={g._id} style={{ border: '1px solid #ddd', padding: 8 }}>
            <h3>{g.name}</h3>
            <p>{g.category} — ${g.price}</p>
            <button onClick={() => onSelect(g)}>View details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
