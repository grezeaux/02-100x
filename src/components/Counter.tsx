import React from 'react';
import './Counter.css';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter-section">
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <button 
          className="counter-btn decrement-btn" 
          onClick={onDecrement}
          disabled={count <= 0}
          aria-label="Decrease count"
        >
          −
        </button>
        <button 
          className="counter-btn increment-btn" 
          onClick={onIncrement}
          disabled={count >= 100}
          aria-label="Increase count"
        >
          +
        </button>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
};

export default Counter;

