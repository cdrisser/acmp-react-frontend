import React,{useContext, useState} from 'react';
import { useHistory} from 'react-router-dom';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Modal from "../../shared/UIElements/Modal";
import Spinner from '../../shared/UIElements/Spinner'
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';
import Profiles from '../../profiles/pages/Members'
import Button from '../../shared/FormElements/Button'
const UpdateAdminProfile = props =>{
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
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/profiles/${idToDelete}`,
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
    return(
        <React.Fragment>
            <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Are you sure?"
            footerclassName="place-item__modal-actions"
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
        <h1>UPDATE PROFILES</h1>
        <Profiles delete = {showDeleteWarningHandler}/>
        </React.Fragment>
    )
}
export default UpdateAdminProfile;