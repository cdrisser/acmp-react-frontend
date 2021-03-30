import React, {useContext, useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';

import Modal from "../../shared/UIElements/Modal";
import Button from '../../shared/FormElements/Button'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';
import Events from '../../events/pages/Events'
import AddEvent from './AddEvent'

const UpdateEvents = props =>{
    const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [idToDelete, setidToDelete] = useState();
    const [eventAdded, setEventAdded] = useState();
    const showDeleteWarningHandler = (idToDelete) => {
        setidToDelete(idToDelete);
        
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
    
      const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try{
          await sendRequest(`http://localhost:5000/api/events/${idToDelete}`,
            'DELETE',
            null,
            {Authorization: "Bearer " + auth.token});
            useHistory.push('/')
        }
        catch(error){

        }
      };

      if(isLoading){
        return(
          <div >
                <Spinner/>
          </div>
        )
      }
      const addedEventHandler = (added)=>{
        setEventAdded(added);
      }


    return(
        <React.Fragment>
        <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
        <React.Fragment>
            <Button inverse onClick = {cancelDeleteHandler}>CANCEL</Button>
            <Button danger onClick = {confirmDeleteHandler}>DELETE</Button>
        </React.Fragment>
        }
    >
        <p>
        Sure you want to delete this event? This can't be reversed!
        </p>
    </Modal>
            <ErrorModal error={error} onClear={clearError}/>
            <div >
                <div className='doc-upload-container'>
                    <Events delete ={showDeleteWarningHandler} added={addedEventHandler}  />
                    
                </div>
                <div className='doc-upload-container'>
                    <AddEvent addedevent={addedEventHandler} />
                </div>
            </div>
    </React.Fragment>
        
            
            
      
       
    )
}

export default UpdateEvents;