import React, {useEffect, useState} from 'react'

import {useHttpClient} from '../../shared/hooks/httphook';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import Button from '../../shared/FormElements/Button'
import RepoList from '../../repository/components/RepoList'
import  './Repository.css'

const Repository = ()=>{
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDocs, setLoadedDocs] = useState();

    useEffect(()=>{
        const sendAllRepoRequest = async()=>{
            const responseData = await sendRequest('http://localhost:5000/api/repo/alldocs')
            setLoadedDocs(responseData.documents);
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
        <h1>ACMP Repository</h1>
        <div className = 'repo-container'>
         <div className='specific-repo-container'>
             <h2>Media</h2>
             {!isLoading && loadedDocs &&  <RepoList repo={loadedDocs.filter(doc=>doc.type==='media')}/>  }
         </div>
         <div className='specific-repo-container'>
            <h2>Docs</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='docs')}/>}
         </div>   
         <div className='specific-repo-container'>
            <h2>Misc</h2>
            {!isLoading && loadedDocs && <RepoList repo={loadedDocs.filter(doc=>doc.type==='misc')}/>}
         </div>      
        </div>

    </React.Fragment>
    )
}

export default Repository;