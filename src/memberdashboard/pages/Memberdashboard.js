import React,{useContext, useEffect, useState} from 'react';
import NewsList from '../components/LatestNewsList';
import UserLogin from '../../user/components/Userlogin'

import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/httphook'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import './Memberdashboard.css'

const Dash = ()=>{
const auth = useContext(AuthContext);
const{isLoading, error, sendRequest, clearError } = useHttpClient();
const [loadedNews, setLoadedNews] = useState();

    useEffect(()=>{
        const sendNewsRequest = async ()=>{
            try{
                const responseData = await sendRequest('http://localhost:5000/api/news/');
                setLoadedNews(responseData.news);
            }
            catch(error){

            }
        };
        sendNewsRequest();
    },[sendRequest])

return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
       {!isLoading && loadedNews && <div>
        {!auth.isLoggedIn ? 
        <div className="dashboard-container">
            <NewsList items = {loadedNews} /><UserLogin/></div>:
            
          <div className="flex-column">
                    <h1 >HELLO!</h1>
                    <span>Welcome back, {auth.username}!</span>
                    <NewsList items = {loadedNews} />
                </div>

        }
        </div>}
    </React.Fragment>
);
};

export default Dash;