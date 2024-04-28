import React, { useState,useEffect } from 'react';

const StateExample = () => {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      setCount((Count) => Count + 1);
    }, 1000);

  });
    return (
      <>
      <h3 className='count'>the count now is {Count} </h3>
      </>
    );

};




export default StateExample;