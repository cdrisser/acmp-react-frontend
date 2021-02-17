import React, {useState, useEffect} from 'react';

import User from "../components/User";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Spinner from "../../shared/UIElements/Spinner"


const AllUsers = (props)=>{
    const[isLoading,setIsloading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers,setLoadedUsers] = useState();
    
    useEffect(()=>{
        const sendRequest = async ()=>{
        try{
            const response = await fetch('http://localhost:5000/api/users/all');

            const responseData = await response.json();
            
            if(!response.ok){
                throw new Error(responseData.message)
            }
            setLoadedUsers(responseData.users);
            console.log(loadedUsers);
        }
        catch(error){
            
            setError(error.message);
        }
        setIsloading(false);
        };
        sendRequest();
        },[]);

        const errorHandler = ()=>{
            setError(null);
        }
    
        return(
            <React.Fragment>
                <ErrorModal error={error} onClear={errorHandler}/>
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