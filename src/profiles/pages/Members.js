import React,{useEffect, useState} from 'react';
import ProfilesList from '../components/ProfilesList';
import {useHttpClient} from '../../shared/hooks/httphook';

import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import Button from '../../shared/FormElements/Button'


import '../components/Members.css'

const Profiles = ()=>{
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedProfiles, setLoadedProfiles] = useState();
    
    useEffect(()=>{
        const sendAllProfileRequest = async()=>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/profiles/all')
            setLoadedProfiles(responseData.profiles);
        }
        catch(error){

        }
    };
    sendAllProfileRequest();
    },[sendRequest])
    console.log(loadedProfiles);
    return( 
        <React.Fragment className='membercontainer'>
        <ErrorModal error={error} onClear={clearError}/>
        {isLoading && (
            <div className = "center">
                <Spinner/>
            </div>
        )}
        <h1>Member Profiles</h1> 
        <Button styleBut = {{position:"fixed", top:"5rem", right:"1rem"}} to ="/newprofile">New Profile</Button>
        <Button styleBut = {{position:"fixed", top:"5rem", right:"1rem"}} to ="/updateprofile" inverse>Update Profile</Button>
        {!isLoading && loadedProfiles &&<ProfilesList profiles ={loadedProfiles}/>}
    </React.Fragment>
        
    
    );
};

export default Profiles;             