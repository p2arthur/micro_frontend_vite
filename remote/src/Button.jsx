import { useState } from 'react';
import './Button.css';
import useCount from './store';

export default function Button() {
  const [state, setState] = useCount();

  const handleButtonClick = (event) => {
    setState(state + 1);
  };

  return (
    <div>
      <button className="shared-btn" onClick={handleButtonClick}>
        Click me {state}
      </button>
    </div>
  );
}
