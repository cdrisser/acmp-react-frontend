import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Modal from "../../shared/UIElements/Modal";
import Input from "../../shared/FormElements/Input";
import Button from '../../shared/FormElements/Button'
import {VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_URL} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook';

import './UpdateProfile.css'

const dummyprofile ={
elevator: {value: "asdfffffffffasdfasdf", isValid: true},
firstname: {value: "Shauna", isValid: true},
lastname: {value: "RISSER", isValid: true}
}

const UpdateProfile = ()=>{
    const profileId = useParams().profileId;
    const [showConfirmModal, setShowConfirmModal] = useState(false);
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
        picture:{
            value:"",
            isValid:false
        },
        elevator:{
            value:"",            
            isValid:false
        }
    },
    false)
    useEffect(()=>{
    setFormData({
        firstname:{
            value:dummyprofile.firstname.value,
            isValid:true
        },
        lastname:{
            value:dummyprofile.lastname.value,
            isValid:true
        },
        linkedin:{
            value:'http://www.linkedin.com/in/chrisser',
            isValid:true
        },
        picture:{
            value:'',
            isValid:true
        },
        elevator:{
            value:'testsetestttttttttttttttttttttt',
            isValid:true
        }
    },
    true)}, [setFormData, dummyprofile]);
    // if(dummyprofile.firstname.value !== profileId){
    //     return(
    //         <div>
    //             <h2>Couldnt find place</h2>
    //         </div>
    //     );
    // }
    const updatePlaceHandler = event =>{
        event.preventDefault();
        console.log(formState);
    }
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
      };
    
      const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
    
      const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETING...');
      };
      
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
        {formState.inputs.firstname.value &&
            <form className="form-control" onSubmit={updatePlaceHandler}>
                <Input element="text" id="firstname" label="First Name" errorText ="Please enter a valid first name" value = {formState.inputs.firstname.value} valid = {formState.inputs.firstname.isValid} onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" id="lastname" label="Last Name" errorText="Please enter a valid last name" onInput={inputHandler} value = {formState.inputs.lastname.value} valid = {formState.inputs.lastname.isValid}  validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" type ="url" id="linkedin" label="LinkedIn URL" errorText="Please enter your linkedin URL" onInput={inputHandler} value = {formState.inputs.linkedin.value} valid = {formState.inputs.linkedin.isValid}   validators={[VALIDATOR_URL()]}/>
                <Input element="text" type ="file" id="picture" label="Upload a picture" errorText="Please submit a picture" onInput={inputHandler} value ={formState.inputs.picture.value}  valid = {formState.inputs.picture.isValid}  validators={[VALIDATOR_REQUIRE()]}/>
                <Input element="textarea" id="elevator" label="Elevator speech" errorText="Please tell us about you!" rows="10" cols="50" onInput={inputHandler} value = {formState.inputs.elevator.value} valid = {formState.inputs.elevator.isValid}   validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(500)]}/>
                <input type = "submit" disabled = {!formState.isValid}></input>
            </form>}
    </React.Fragment>
        );
};

export default UpdateProfile;