import React from 'react';
import {useLocation} from 'react-router-dom';

import './LatestNewsList.css';
import LatestNewsItem from './LatestNewsItem';

const NewsList = props =>{
const location = useLocation()
;
    if(props.items.length ===0){
        return(<div >
                <p>There is no current news.  Check back soon!</p>
        </div>
        ); 
    }
    return (
    <div className="current-news" >
        
        {location.pathname !== '/admin' &&<h1>Current News</h1>}

        
        
        <ul className="news-list">
            {props.items.map(latest =>{
                return <LatestNewsItem key ={latest.id} headline = {latest.headline} body = {latest.newsbody} date = {latest.date} delete={props.delete} id = {latest.id}/>
            })}
        </ul>
    </div>
    );
};
export default NewsList;