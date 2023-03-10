import React, { useState, useEffect } from 'react';
 
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  // uncomment the effect below
    // useEffect(() => {
    //   setCounter(counter + 1)
    // })

  return (  
    <div>
      Rapid count: {counter}
    </div>
  )
}
 