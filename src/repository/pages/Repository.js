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
            const responseData = await sendRequest('http://localhost:5000/api/repo/alldocs')
            setLoadedDocs(responseData.documents);
            console.log(responseData);
        }
        sendAllRepoRequest();
    },[sendRequest])
   
    return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
        {useLocation().pathname !== '/admin/updaterepo' &&<h1>ACMP Repository</h1>}
        <div className = 'repo-container'>
         <div className='specific-repo-container'>
             <h2>Media</h2>
             {!isLoading && loadedDocs &&  <RepoList repo={loadedDocs.filter(doc=>doc.type==='media')} delete = {props.delete}/>  }
         </div>
         <div className='specific-repo-container'>
            <h2>Docs</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='docs')} delete = {props.delete}/>}
         </div>   
         <div className='specific-repo-container'>
            <h2>Misc</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='misc')} delete = {props.delete}/>}
         </div>      
        </div>

    </React.Fragment>
    )
}

export default Repository;