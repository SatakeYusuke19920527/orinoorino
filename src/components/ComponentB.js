import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const [ count,setCount ] = useState(0);
    const [data,setData] = useState([])

    useEffect(() => {
        console.log('useEffect が呼び出されました。');
      }, [count]);

    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res,'res check')
      setData(res.data)
    })

    console.log(data)

    return (
        <div>
        <div>ComponentB</div>
        <Link to="./">ComponentAへ移動</Link>
        <Link to="componentc">ComponentCへ移動</Link>

<div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>UserID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
{data.map(d => 
    <tr>
        <td>{d.userId}</td>
        <td>{d.id}</td>
        <td>{d.title}</td>
        <td>{d.body}</td>
    </tr>
    )
}
  </tbody>
</Table>
</div>

        </div>
    );
};

export default ComponentB;