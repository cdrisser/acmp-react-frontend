import React,{useEffect, useState, useContext,useCallback} from 'react';
import ProfilesList from '../components/ProfilesList';
import {useHttpClient} from '../../shared/hooks/httphook';
import {AuthContext} from '../../shared/context/auth-context'

import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import Button from '../../shared/FormElements/Button'


import '../components/Members.css'

const Profiles = ()=>{
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
   
        
    

    return( 
        <React.Fragment >
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
        <h1>Member Profiles</h1> 
        
        {renderUpdateButton ? 
            <Button styleBut = {{position:"fixed", top:"8rem", right:"1rem"}} to ="/updateprofile" inverse>Update Profile</Button>
            :
            <Button styleBut = {{position:"fixed", top:"5rem", right:"1rem"}} to ="/newprofile" inverse>New Profile</Button>
        }
        {!isLoading && loadedProfiles &&<ProfilesList profiles ={loadedProfiles}/>}
    </React.Fragment>
        
    
    );
};

export default Profiles;             