import React,{useEffect, useState, useContext} from 'react';
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
    const [renderUpdateButton, setRenderUpdatedButton] = useState(false);
    const auth = useContext(AuthContext);
    
    useEffect(()=>{
        const sendAllProfileRequest = async()=>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/profiles/all');
            setLoadedProfiles(responseData.profiles);
            
            //check if user has a profile and render button to update;
           responseData.profiles.forEach((user)=>{
                if (user.profileCreator===auth.userId){
                    setRenderUpdatedButton(true);
                }
                })
            
        }
        catch(error){

        }
    };
    sendAllProfileRequest();
    },[sendRequest])
    
    
    

    return( 
        <React.Fragment >
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
        <h1>Member Profiles</h1> 
        <Button styleBut = {{position:"fixed", top:"5rem", right:"1rem"}} to ="/newprofile" inverse>New Profile</Button>
        {renderUpdateButton && <Button styleBut = {{position:"fixed", top:"8rem", right:"1rem"}} to ="/updateprofile" inverse>Update Profile</Button>}
        {!isLoading && loadedProfiles &&<ProfilesList profiles ={loadedProfiles}/>}
    </React.Fragment>
        
    
    );
};

export default Profiles;             