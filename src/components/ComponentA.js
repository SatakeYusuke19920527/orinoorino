import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComponentA = () => {
  const [ count,setCount ] = useState(0);

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
  }, []);

    return (
        <div>
        <div>ComponentA</div>
        <Link to="componentb">ComponentBへ移動</Link>
        <Link to="componentc">ComponentCへ移動</Link>
        <div>count : {count}</div>
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>カウント</button>
        </div>
        </div>
    );
};

export default ComponentA;