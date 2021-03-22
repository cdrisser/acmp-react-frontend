import React from 'react';
import './LatestNewsList.css';
import LatestNewsItem from './LatestNewsItem';

const NewsList = props =>{
    if(props.items.length ===0){
        return(<div >
                <p>There is no current news.  Check back soon!</p>
        </div>
        ); 
    }
    return (
    <div className="current-news" >
        <header className="header_photo">
            <h1 className= "">Current News</h1>

        </header>
        
        <ul className="news-list">
            {props.items.map(latest =>{
                return <LatestNewsItem key ={latest.id} headline = {latest.headline} body = {latest.newsbody} date = {latest.date} delete={props.delete} id = {latest.id}/>
            })}
        </ul>
    </div>
    );
};
export default NewsList;