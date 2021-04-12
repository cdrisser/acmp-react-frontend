import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom';
import {useHttpClient} from '../../shared/hooks/httphook';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import RepoList from '../../repository/components/RepoList'
import  './Repository.css'

const Repository = (props)=>{
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDocs, setLoadedDocs] = useState();

    useEffect(()=>{
        
        const sendAllRepoRequest = async()=>{
            const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/repo/alldocs`)
            setLoadedDocs(responseData.documents);
        
        }
        sendAllRepoRequest();
    },[sendRequest, props.docadded])
   
    return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div >
                <Spinner/>
            </div>
        )}
        {useLocation().pathname === '/repo' &&<h1 className='repo-h1'>Repository</h1>}
        <div className = 'repo-container'>
        
         <div className='specific-repo-container'>
         {useLocation().pathname !== '/admin'&&  <img className='repo-img' alt="repo media " src={require('../../images/media-repo.jpg')}></img>}
             <h2>Media</h2>
            {!isLoading && loadedDocs &&  <RepoList repo={loadedDocs.filter(doc=>doc.type==='media')} delete = {props.delete}/>  }
         </div>
         <div className='specific-repo-container'>
       
         {useLocation().pathname !== '/admin' && <img className='repo-img' alt="repo docs " src={require('../../images/docs-repo.jpg')}></img>}
         <h2>Docs</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='docs')} delete = {props.delete}/>}
         </div>   
         <div className='specific-repo-container'>
         
            {useLocation().pathname !== '/admin'&& <img className='repo-img' alt="repo misc "src={require('../../images/misc-repo.jpg')}></img>}
         <h2>Misc</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='misc')} delete = {props.delete}/>}
         </div>      
        </div>

    </React.Fragment>
    )
}

export default Repository;