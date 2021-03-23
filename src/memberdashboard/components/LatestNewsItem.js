import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';

import './LatestNewsItem.css';
import {AuthContext} from '../../shared/context/auth-context'
import Button from '../../shared/FormElements/Button';
const LatestNewsItem = (props)=>{
        const auth = useContext(AuthContext);
    const location = useLocation().pathname === '/admin/updaterepo';
    return (
        <li className = "news-item">
                <h2>{props.headline}</h2>
                <p className='date-news'><em>{props.date}</em></p>
                <hr></hr>
                <p className='body-news'>{props.body}</p>
                
                {auth.admin && location && <Button onClick={()=>{props.delete(props.id)}}>Delete</Button>}
        </li>
    );

}

export default LatestNewsItem;