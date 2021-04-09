import React,{useEffect, useState, useContext} from 'react';

import Button from "../../shared/FormElements/Button"
import {useHttpClient} from '../../shared/hooks/httphook';
import {AuthContext} from '../../shared/context/auth-context'
import {useLocation} from 'react-router-dom';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import EventList from '../components/EventList';
import Modal from '../../shared/UIElements/Modal';

const Events = (props)=>{
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedEvents, setLoadedEvents] = useState();
    const [eventid,setEventId] = useState();
    const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    useEffect(()=>{
        const sendAllEventsRequest = async()=>{
        try{
            const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/events/all`);
             setLoadedEvents(responseData.events);

            
        }
        catch(error){
        }
    };
    sendAllEventsRequest();
    
    },[sendRequest,showConfirmModal,props.added]);

    const showConfirmHandler = eventid => {
        setShowConfirmModal(true)
        setEventId(eventid)
        };
        
    const cancelConfirmHandler = () => {
        setShowConfirmModal(false);
        };
    
    const registerEventHandler = async (event)=>{
        event.preventDefault();
        
        
        try{
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/events/register/${eventid}`,
                'POST',
                JSON.stringify({id:auth.userId}),
                {Authorization: "Bearer " + auth.token,
                'Content-Type':'application/json'});
                setShowConfirmModal(false);
            }
        catch(error){

            }
    }
    

    return( 
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        <Modal
        show={showConfirmModal}
        onCancel={cancelConfirmHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick = {cancelConfirmHandler}>CANCEL</Button>
            <Button  onClick = {registerEventHandler}>REGISTER</Button>
          </React.Fragment>
        }
      >
        <p>
          Are you sure you'd like to register for this event?
        </p>
      </Modal>
        {useLocation().pathname !== '/admin' &&<h1>ACMP Events</h1>}
        {isLoading && (
            <div >
                <Spinner/>
            </div>
        )}
                {!isLoading && loadedEvents&& <div><EventList events={loadedEvents} delete={props.delete} register= {showConfirmHandler} />
             </div>}
        
        
    </React.Fragment>
    );
};

export default Events;             