import React, { useState, useEffect } from 'react';

export const Counter = () => {
  // set the state
  const [counter, setCounter] = useState(0);
  
  // use the effect whenever counter changes
  useEffect(() => {
    if (isPrime(counter)) {
      document.body.style.backgroundImage = 'linear-gradient(to right, coral, teal)';
    } else {
      document.body.style.backgroundImage = "";
    }
  }, [counter]);

  // create an easy-to-use increment function
  const increment = () => { setCounter(counter + 1)};

  return (  
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={increment}>Click Me!</button>
    </div>
  )
}


// Helper function for the custom hook
const isPrime = (num) => {
  const squareRoot = Math.sqrt(num)
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return num > 1;
}
