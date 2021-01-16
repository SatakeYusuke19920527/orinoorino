import React from 'react'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const ComponentB = () => {
    const history = useHistory()
    const backPage = () => {
        history.push("/")
    }
    return (
        <div>
        <div>ComponentB</div>
        <Link to="componentc">ComponentCへ移動</Link>
        <button onClick = {backPage}>ホームへ戻る</button>
        </div>
    );
};

export default ComponentB;