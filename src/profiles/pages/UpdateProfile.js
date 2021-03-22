import React, {useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import Modal from "../../shared/UIElements/Modal";
import Input from "../../shared/FormElements/Input";
import Button from '../../shared/FormElements/Button'
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner'
import {VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_URL} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook';
import { useHttpClient } from "../../shared/hooks/httphook";
import {AuthContext} from '../../shared/context/auth-context';
import ImageUpload from '../../shared/FormElements/ImageUpload'
import './UpdateProfile.css'


const UpdateProfile = ()=>{
  const auth = useContext(AuthContext);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadProfile,setLoadedProfile] = useState();
    const profileId = useParams().profileId;
  const history = useHistory();
    const [formState, inputHandler, setFormData] = useForm({
        firstname:{
            value:"",
            isValid:false
        },
        lastname:{
            value:"",
            isValid:false
        },
        linkedin:{
            value:"",            
            isValid:false
        },
        image:{
            value:"",
            isValid:false
        },
        elevator:{
            value:"",            
            isValid:false
        }
    },
    false);

    useEffect(()=>{
      const fetchProfile = async ()=>{
        try{
          const responseData = await sendRequest(
            `http://localhost:5000/api/profiles/${auth.userId}`);
            setLoadedProfile(responseData.profile);
        
            setFormData({
              firstname:{
                  value:responseData.profile.firstname,
                  isValid:true
              },
              lastname:{
                  value:responseData.profile.lastname,
                  isValid:true
              },
              linkedin:{
                  value:responseData.profile.linkedin,
                  isValid:true
              },
              image:{
                  value:responseData.profile.image,
                  isValid:true
              },
              elevator:{
                  value:responseData.profile.elevator,
                  isValid:true
              }
          },
          true)

        }
        catch(error){
          
        }
      }
      fetchProfile();
    },[sendRequest, profileId, setFormData])

   
    
    const updatePlaceHandler = async event =>{
        event.preventDefault();
      try{
            const formData = new FormData();
            formData.append("firstname",formState.inputs.firstname.value)
            formData.append("lastname",formState.inputs.lastname.value)
            formData.append("image",formState.inputs.image.value)
            formData.append("linkedin",formState.inputs.linkedin.value)
            formData.append("elevator",formState.inputs.elevator.value)
            formData.append("profileCreator",auth.userId)
            
        await sendRequest(`http://localhost:5000/api/profiles/${auth.userId}`,
        'PATCH',
        formData,
        {Authorization: "Bearer " + auth.token}
        );
        
        history.push('/profiles')
      }
      catch(error){

      }
    }
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
    
      const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try{
          await sendRequest(`http://localhost:5000/api/profiles/${loadProfile.id}`,
            'DELETE',
            null,
            {Authorization: "Bearer " + auth.token});
            history.push('/profiles')
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

      if(!loadProfile && !error){
        return(
          <h2 style = {{textAlign:'center'}}>No Profile found</h2> 
        )
      }
      
      
    return (
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
          Do you want to proceed and delete this profile? This can't be reversed!
        </p>
      </Modal>
        <h2 style = {{textAlign:'center'}}>Update Profile</h2> 
        <Button danger onClick={showDeleteWarningHandler} styleBut = {{position:"fixed", top:"5rem", right:"1rem"}}>
              DELETE
            </Button>
            <ErrorModal error={error} onClear={clearError}/>
        {!isLoading && loadProfile &&(
            <form className="form-control" onSubmit={updatePlaceHandler}>
                <Input element="text" id="firstname" label="First Name" errorText ="Please enter a valid first name" value = {loadProfile.firstname} valid = {true} onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" id="lastname" label="Last Name" errorText="Please enter a valid last name" onInput={inputHandler} value = {loadProfile.lastname} valid = {true} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" type ="url" id="linkedin" label="LinkedIn URL" errorText="Please enter your linkedin URL" onInput={inputHandler} value = {loadProfile.linkedin} valid = {true}  validators={[VALIDATOR_URL()]}/>
                <ImageUpload id ="image" updateimageUrl ={loadProfile.image} onInput={inputHandler}/>
                <Input element="textarea" id="elevator" label="Elevator speech" errorText="Please tell us about you!" rows="10" cols="50" onInput={inputHandler} value = {loadProfile.elevator} valid = {true} validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(500)]}/>
                <Button type = "submit" disabled = {!formState.isValid}>Update Profile</Button>
            </form>)}
    </React.Fragment>
        );
};

export default UpdateProfile;