import React, {useState, useEffect} from 'react';

import User from "../components/User";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Spinner from "../../shared/UIElements/Spinner"
import {useHttpClient} from '../../shared/hooks/httphook'

const AllUsers = (props)=>{
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedUsers,setLoadedUsers] = useState();
    useEffect(()=>{
        const sendAllUserRequest = async ()=>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/users/all');

            setLoadedUsers(responseData.users);
            console.log(loadedUsers);
        }
        catch(error){
        }
        };
        sendAllUserRequest();
        },[]);
    
        return(
            <React.Fragment>
                <ErrorModal error={error} onClear={clearError}/>
                {isLoading && (
                <div className = "center">
                    <Spinner/>
                </div>
                )}
                <div className = "center">
                    <h1>User List</h1>
                <ul>
                    {!isLoading && loadedUsers && (loadedUsers.map((user)=>{
                       return <User key={user.id} firstname = {user.firstname} lastname ={user.lastname}/>
                    }))}
                </ul>
                </div>
            </React.Fragment>
            )
    


}
export default AllUsers;