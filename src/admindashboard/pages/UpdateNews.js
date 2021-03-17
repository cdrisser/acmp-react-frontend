import React,{useContext, useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Modal from "../../shared/UIElements/Modal";
import Button from '../../shared/FormElements/Button'
import Spinner from '../../shared/UIElements/Spinner'
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';

import MemberDashboard from '../../memberdashboard/pages/Memberdashboard'
import AddNews from '../components/AddNews';
const UpdateNews = props =>{
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
          await sendRequest(`http://localhost:5000/api/news/${idToDelete}`,
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
        <div className = 'center'>
            <MemberDashboard admindisplay delete={showDeleteWarningHandler}/>
            <AddNews/>
            </div>
        </React.Fragment>
    )
}

export default UpdateNews;