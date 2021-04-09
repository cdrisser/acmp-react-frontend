import React,{useContext, useEffect, useState} from 'react';
import LatestNewsList from '../components/LatestNewsList';
import UserLogin from '../../user/components/Userlogin'
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/httphook'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import './MemberDashboard.css'

const MemberDashboard= (props)=>{
    
const auth = useContext(AuthContext);
const{isLoading, error, sendRequest, clearError } = useHttpClient();
const [loadedNews, setLoadedNews] = useState();

    useEffect(()=>{
        
        const sendNewsRequest = async ()=>{
            try{
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/news/`);
                setLoadedNews(responseData.news);
            }
            catch(error){

            }
        };
        sendNewsRequest();
    },[sendRequest,props.newsadded])

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
            <LatestNewsList items = {loadedNews} delete ={props.delete} />}
        </React.Fragment>
        )
    }
    const loginRender = !auth.isLoggedIn ? 
        <div className="row-flex-container news-background">
            <LatestNewsList items = {loadedNews} /><UserLogin styletag='dashboard-login'/></div>:
            
          <div className="flex-column news-background">
                    
                    <LatestNewsList items = {loadedNews} />
                    
                </div>
    
        

return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}

       {!isLoading && loadedNews && <div>
           {auth.isLoggedIn && <div className='welcome-msg'>Welcome back, {auth.username}!</div>}
        <div className='header-photo-container'>
           
            <div className='header-photo'>
            <h2>ACMP ARIZONA MEMBERS</h2>
            </div>
        </div>
        {loginRender}
        </div>}
    </React.Fragment>
);
};

export default MemberDashboard;