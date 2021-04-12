import React,{useState, useEffect} from 'react';
import Spinner from '../../shared/UIElements/Spinner';
import { useHttpClient } from "../../shared/hooks/httphook";
import IndividualMessages from '../components/IndividualMessages';

const GetMessages = ()=>{
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [messages,setMessages]= useState();

    useEffect(()=>{
        const sendAllMessageRequest = async ()=>{
        try{
            const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/messages`);

            setMessages(responseData.messages);
            
        
        }
        catch(error){
        }
        };
        sendAllMessageRequest();
        },[sendRequest]);

    return(
        <React.Fragment>
            {isLoading && <div><Spinner/></div>}
            <div className='flex-column'>
            <h1>Get Messages</h1>
                <ul>
                    {!isLoading && messages &&
                    (messages.map((msg)=>{
                        return <IndividualMessages key={msg.id} name={msg.name} email={msg.email} message={msg.message}/>
                    })

                    )
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
export default GetMessages;