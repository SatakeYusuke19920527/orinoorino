import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const ComponentA = () => {
  const [ count,setCount ] = useState(0);
  const [data,setData] = useState([])

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
  }, [count]);
  
  axios.get('http://jsonplaceholder.typicode.com/todos')
  .then(res => {
    console.log(res,'res check')
    setData(res.data)
  })

console.log(data)

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
    

export default ComponentA;