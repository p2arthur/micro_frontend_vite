import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from 'remoteAppButton/Button';
import useCount from 'remoteAppButton/store';

export default function App() {
  const [count, setCount] = useCount();

  return (
    <div>
      <h2>Host app</h2>
      <Button />
      <button onClick={() => setCount(count + 1)}>
        You can also click me{count}
      </button>
    </div>
  );
}
