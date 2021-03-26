import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';

import './LatestNewsItem.css';
import {AuthContext} from '../../shared/context/auth-context'
import Button from '../../shared/FormElements/Button';

const LatestNewsItem = (props)=>{
        const auth = useContext(AuthContext);
    const location = useLocation().pathname === '/admin';
    return (
        <li className = "news-item">
                <h2>{props.headline}</h2>
                <p className='date-news'><em>{props.date}</em></p>
                <hr></hr>
                <p className='body-news'>{props.body}</p>
                <div className='button-center'>
                {auth.admin && location && <Button styleBut={{margin:'.25rem 0'}} onClick={()=>{props.delete(props.id)}}>Delete</Button>}
                </div>
  </li>
    );

}

export default LatestNewsItem;