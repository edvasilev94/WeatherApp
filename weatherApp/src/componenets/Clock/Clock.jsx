import React, { useState, useEffect } from 'react';

import '../Clock/clock.css'


export default function Clock () {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
  
        <li className="nav-li-clock"> {time.toLocaleTimeString()} </li>
  )
};