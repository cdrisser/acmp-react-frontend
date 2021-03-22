import React,{useContext, useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';

import SuccessModal from '../../shared/UIElements/SuccessModal'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Modal from "../../shared/UIElements/Modal";
import Spinner from '../../shared/UIElements/Spinner'
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';
import Button from '../../shared/FormElements/Button'
import User from "../../user/components/User";


const AllUsers = (props)=>{
    const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [idToDelete, setidToDelete] = useState();
    const [loadedUsers, setLoadedUsers] = useState();
    const [verifyConfimed, setVerifyConfirmed] = useState(false);
    const [deletedConfirmed, setDeletedConfirmed] = useState(false);


    const showDeleteWarningHandler = (idToDelete) => {
        
        setidToDelete(idToDelete);
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };

      useEffect(()=>{
        const sendAllUserRequest = async ()=>{
        try{
            const responseData = await sendRequest('http://localhost:5000/api/users/all');

            setLoadedUsers(responseData.users);
            
        
        }
        catch(error){
        }
        };
        sendAllUserRequest();
        },[sendRequest, verifyConfimed, deletedConfirmed]);
       

    
      const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try{
          await sendRequest(`http://localhost:5000/api/users/${idToDelete}`,
            'DELETE',
            null,
            {Authorization: "Bearer " + auth.token});
            setDeletedConfirmed(true);
            
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

    
    const verifyMemberListener = async (id,verify_unverify)=>{
        
        try{
            
            await sendRequest(`http://localhost:5000/api/users/verify/${id}`,
              'PATCH',
              JSON.stringify({verify:verify_unverify}),
              {Authorization: "Bearer " + auth.token, 'Content-Type':'application/json'});
              setVerifyConfirmed(true);
                
              
              
          }
          catch(error){
  
          }
    }   
      
        const clearSuccessListener = ()=>{
            setVerifyConfirmed(false);
            setDeletedConfirmed(false);
            
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
                    Sure you want to delete this user? This can't be reversed!
                    </p>
                </Modal>
                <ErrorModal error={error} onClear={clearError}/>
                < SuccessModal showSuccess={deletedConfirmed} onClear ={clearSuccessListener} header='Success' message='Member Deleted'/>
                < SuccessModal showSuccess={verifyConfimed} onClear ={clearSuccessListener} header='Success' message='Member Membership has been updated'/>

                <div >
                    <h1>User List</h1>
                <ul>
                    {!isLoading && loadedUsers  &&(loadedUsers.map((user)=>{
                       return <User key={user.id} firstname = {user.firstname} lastname ={user.lastname} id={user.id} verify={user.verify} delete={showDeleteWarningHandler} verifymember={verifyMemberListener}/>
                    }))}
                </ul>
                </div>
                </React.Fragment>
            )


}
export default AllUsers;