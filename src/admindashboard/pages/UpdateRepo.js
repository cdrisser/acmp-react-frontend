import React, {useContext, useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';

import Modal from "../../shared/UIElements/Modal";
import Button from '../../shared/FormElements/Button'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';
import Repository from '../../repository/pages/Repository';
import AddDocToRepo from '../components/AddDocToRepo';

const UpdateRepo = props =>{
    const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [idToDelete, setidToDelete] = useState();
    
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
          await sendRequest(`http://localhost:5000/api/repo/${idToDelete}`,
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
          <div className = "center">
                <Spinner/>
          </div>
        )
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
        Sure you want to delete this document? This can't be reversed!
        </p>
    </Modal>
            <ErrorModal error={error} onClear={clearError}/>
            <div>
                <h1>Update Repo</h1>
                <div>
                    <h2>Delete</h2>
                    <Repository delete ={showDeleteWarningHandler}/>
                    
                </div>
                <div>
                    <h2>Upload New Doc</h2>
                    <AddDocToRepo/>
                </div>
            </div>
    </React.Fragment>
        
            
            
      
       
    )
}

export default UpdateRepo;