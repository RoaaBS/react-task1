import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [productVisible, setProductVisible] = useState(false); 

  const increase = () => {
    setCount(count + 1);
  };

  const toggleProductVisibility = () => {
    setProductVisible(!productVisible); 
  };

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={toggleProductVisibility}>
        {productVisible ? 'Hide Product' : 'Show Product'}
      </button>

      {productVisible && ( 
        <div>
          <h2>Product Details</h2>
          <h4>Name: iPhone 14</h4>
          <h4>Price: $1200</h4>
          <h4>Description: A premium smartphone with advanced features</h4>
        </div>
      )}
    </>
  );
}

export default App;
