import React, { useState } from 'react';

export default function App() {
  const [pins, setPins] = useState([]);
  const [boards, setBoards] = useState([]);

  async function fetchPins() {
    const res = await fetch('/.netlify/functions/getPins');
    const data = await res.json();
    setPins(data.items || []);
  }

  async function fetchBoards() {
    const res = await fetch('/.netlify/functions/getBoards');
    const data = await res.json();
    setBoards(data.items || []);
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>🌸 YumeSpin — My Pinterest Portal 🌸</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Boards</h2>
        <button onClick={fetchBoards} style={{ padding: '8px 12px', marginBottom: 12 }}>Load Boards</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {boards.map(board => (
            <div key={board.id} style={{ padding: 12, border: '1px solid #ccc', borderRadius: 8, minWidth: 150 }}>
              {board.name}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Feed</h2>
        <button onClick={fetchPins} style={{ padding: '8px 12px', marginBottom: 12 }}>Load Pins</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
          {pins.map(pin => (
            <div key={pin.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 8 }}>
              {pin.media?.length > 0 && (
                <img src={pin.media[0].url} alt={pin.title || 'pin'} style={{ width: '100%', borderRadius: 6 }} />
              )}
              <h4 style={{ marginTop: 8 }}>{pin.title || pin.note || 'Untitled'}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
