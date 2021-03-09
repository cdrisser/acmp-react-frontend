import React from 'react';
import './LatestNewsList.css';
import LatestNewsItem from './LatestNewsItem';

const NewsList = props =>{
    if(props.items.length ===0){
        return(<div className = "center">
                <p>There is no current news.  Check back soon!</p>
        </div>
        ); 
    }
    return (
    <div className="current-news" >
        <h2 className= "current-news-header">Current News</h2>
        <ul className="news-list">
            {props.items.map(latest =>{
                return <LatestNewsItem key ={latest.id} header = {latest.headline} body = {latest.body} date = {latest.date}/>
            })}
        </ul>
    </div>
    );
};
export default NewsList;