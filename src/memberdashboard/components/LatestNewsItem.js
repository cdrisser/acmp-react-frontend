import React from 'react';
import './LatestNewsItem.css';

const LatestNewsItem = (props)=>{
    return (
        <li className = "news-item">
            <div className = "news-item__content"></div>
                <h2>{props.header}</h2>
                <p>{props.body}</p>
        </li>
    );

}

export default LatestNewsItem;