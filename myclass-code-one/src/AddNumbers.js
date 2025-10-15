import React, { useState } from 'react';

function AddNumbers() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x: Number(x), y: Number(y) }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setError('Error contacting server.');
      console.error(err);
    }
  };

  return (
    <div className='container mt-4'>
      <h2>Add Two Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="Enter x"
          required
        />
        {' + '}
        <input
          type="number"
          value={y}
          onChange={(e) => setY(e.target.value)}
          placeholder="Enter y"
          required
        />
        {' '}
        <button type="submit">Send</button>
      </form>

      {result !== null && <h4>Result: {result}</h4>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AddNumbers;
