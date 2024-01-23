import { useCallback, useState } from 'react';
import heads from '/heads.png';
import tails from '/tails.png';
import './App.css';

const srcMap = { heads, tails };

function App() {
  const [coin, setCoin] = useState<'heads' | 'tails'>('heads');
  const handleClick = useCallback(() => {
    setCoin(() => (Math.random() > 0.5 ? 'heads' : 'tails'));
  }, []);

  return (
    <>
      <h1>Flip a coin</h1>
      <img key={Date.now()} onClick={handleClick} src={srcMap[coin]} alt={coin} title={coin} />
    </>
  );
}

export default App;
