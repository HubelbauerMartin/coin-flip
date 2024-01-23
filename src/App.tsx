import { useCallback, useState } from 'react';
import heads from '/heads.png';
import tails from '/tails.png';
import './App.css';

function App() {
  const [coin, setCoin] = useState<'heads' | 'tails'>();
  const handleButtonClick = useCallback(() => {
    setCoin(() => (Math.random() > 0.5 ? 'heads' : 'tails'));
  }, []);

  return (
    <>
      <h1>Flip a coin</h1>
      {(!coin || coin === 'heads') && <img src={heads} alt="heads" />}
      {(!coin || coin === 'tails') && <img src={tails} alt="tails" />}
      <div className="card">
        <button onClick={handleButtonClick}>Flip</button>
      </div>
    </>
  );
}

export default App;
