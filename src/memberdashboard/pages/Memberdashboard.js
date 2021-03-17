import React,{useContext, useEffect, useState} from 'react';
import LatestNewsList from '../components/LatestNewsList';
import UserLogin from '../../user/components/Userlogin'
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/httphook'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import './Memberdashboard.css'

const MemberDashboard= (props)=>{
    
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

    if(props.admindisplay){
        return(
            <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
        {!isLoading && loadedNews && 
        <div className="dashboard-container">
            <LatestNewsList items = {loadedNews} delete ={props.delete} /></div>}
        </React.Fragment>
        )
    }

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
            <LatestNewsList items = {loadedNews} /><UserLogin/></div>:
            
          <div className="flex-column">
                     <div><h1 >HELLO!</h1>
                    <span>Welcome back, {auth.username}!</span>
                    <LatestNewsList items = {loadedNews} /></div>
                </div>

        }
        </div>}
    </React.Fragment>
);
};

export default MemberDashboard;