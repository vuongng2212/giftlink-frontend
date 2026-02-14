import React from 'react';

export default function GiftDetails({ gift }) {
  if (!gift) return null;
  return (
    <div style={{ marginTop: 16, borderTop: '1px solid #ccc', paddingTop: 16 }}>
      <h2>{gift.name}</h2>
      <p><strong>Category:</strong> {gift.category}</p>
      <p><strong>Price:</strong> ${gift.price}</p>
      <p>{gift.description}</p>
    </div>
  );
}
