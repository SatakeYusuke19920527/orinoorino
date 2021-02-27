import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Table,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentC = () => {
    const [ count,setCount ] = useState(0);
    const [data,setData] = useState([])

    useEffect(() => {
        console.log('useEffect が呼び出されました。');
      }, [count]);

    console.log(data)

    const handleclick = () => { 
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setData(res.data)  
      })}

    return (
        <div>
        <div>ComponentC</div>
        <Link to="./">ComponentAへ移動</Link>
        <Link to="componentb">ComponentBへ移動</Link>
        <Button onClick={handleclick}>押せ</Button>

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
    <tr key={d.id}>
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
        
    );
};


export default ComponentC;