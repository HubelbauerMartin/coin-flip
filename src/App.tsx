import { useState } from 'react';
import heads from '/heads.png';
import tails from '/tails.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Flip a coin</h1>
      <img src={heads} alt="heads" />
      <img src={tails} alt="tails" />
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
