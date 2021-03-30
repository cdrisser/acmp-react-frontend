import React,{useEffect, useState, useContext,useCallback} from 'react';
import ProfilesList from '../components/ProfilesList';
import {useHttpClient} from '../../shared/hooks/httphook';
import {AuthContext} from '../../shared/context/auth-context'

import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import Button from '../../shared/FormElements/Button'


import '../components/Members.css'

const Profiles = (props)=>{
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedProfiles, setLoadedProfiles] = useState();
    const [renderUpdateButton, setRenderUpdatedButton] = useState();
    const auth = useContext(AuthContext);
    
    useEffect(()=>{
        const sendAllProfileRequest = async()=>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/profiles/all');
             setLoadedProfiles(responseData.profiles);
              
                
            
        }
        catch(error){
        }
    };
    sendAllProfileRequest();
    
    },[sendRequest]);
    
    useEffect(()=>{
        if(loadedProfiles){
            loadedProfiles.forEach((user)=>{
                if(user.profileCreator===auth.userId){
                    setRenderUpdatedButton(true);
                }
            })
        }
    },[loadedProfiles])
   
    
    if(props.delete){
        return(
        <React.Fragment >
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div >
                <Spinner/>
            </div>
        )}
        {!isLoading && loadedProfiles &&<ProfilesList profiles ={loadedProfiles} delete={props.delete}/>}
    </React.Fragment>)
    }

    return( 
        <React.Fragment >
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div >
                <Spinner/>
            </div>
        )}
        <h1>Member Profiles</h1>
        
            <div className='profile-buttons'>
            <Button  to ="/newprofile" >Create</Button>
            <Button  to ="/updateprofile" inverse>Update</Button>
            </div>
        {!isLoading && loadedProfiles &&<ProfilesList profiles ={loadedProfiles} delete={props.delete}/>}
    </React.Fragment>
        
    
    );
};

export default Profiles;             