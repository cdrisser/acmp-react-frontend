import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Input from "../../shared/FormElements/Input"
import '../components/NewProfile.css'
import {VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_URL} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook'
import Button from '../../shared/FormElements/Button';
import ImageUpload from '../../shared/FormElements/ImageUpload'
import {useHttpClient} from '../../shared/hooks/httphook'
import {AuthContext} from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import SuccessModal from '../../shared/UIElements/SuccessModal'


const NewProfile = (props)=>{
    const auth = useContext(AuthContext);
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [newProfileSuccess, setNewProfileSuccess]= useState(false);
  const [formState, inputHandler] = useForm({
    firstname:{
        value:'',
        isValid:false
    },
    lastname:{
        value:'',
        isValid:false
    },
    linkedin:{
        value:'',
        isValid:false
    },
    image:{
        value:'',
        isValid:false
    },
    elevator:{
        value:'',
        isValid:false
    },
    email:{
        value:'',
        isValid:false
    }
    
},
false);

const history = useHistory();
    
    

    const profileInputHandler = async event =>{
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("firstname",formState.inputs.firstname.value)
            formData.append("lastname",formState.inputs.lastname.value)
            formData.append("image",formState.inputs.image.value)
            formData.append("linkedin",formState.inputs.linkedin.value)
            formData.append("elevator",formState.inputs.elevator.value)
            formData.append("email",formState.inputs.email.value)
        try{
            await sendRequest('http://localhost:5000/api/profiles/',
            'POST', 
            formData,
            {Authorization: "Bearer " + auth.token}
            )
            setNewProfileSuccess(true);
        }
        catch(error){

        }   
    };

    const clearSuccessListener = ()=>{
        setNewProfileSuccess(false);
        history.push('/profiles')
    }

    return (
    <React.Fragment>
        {isLoading && <Spinner/>}
        <ErrorModal error={error} onClear ={clearError}/>
        < SuccessModal showSuccess={newProfileSuccess} onClear ={clearSuccessListener} header='Success' message='Successfully created profile!'/>
        
        <form className="form-control " onSubmit={profileInputHandler}>
            <h2 className='h2-profile'>Create a profile</h2>
            <Input element="text" id="firstname" label="First Name" errorText ="Please enter a valid first name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <Input element="text" id="lastname" label="Last Name" errorText="Please enter a valid last name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <Input element="text"  id="email" label="Email" errorText="Please enter your email " onInput={inputHandler} validators={[VALIDATOR_EMAIL()]}/>
            <Input element="text" type ="url" id="linkedin" label="LinkedIn URL" errorText="Please enter your linkedin URL" onInput={inputHandler} validators={[VALIDATOR_URL()]}/>
            <ImageUpload id ="image" onInput={inputHandler}/>
            <Input element="textarea" id="elevator" label="Elevator speech" errorText="Please tell us about you!" rows="10" cols="50" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(500)]}/>
            <div className='button-center'>
                <Button type = "submit" disabled = {!formState.isValid}>Create Profile</Button>
            </div>
        </form>
    </React.Fragment>)
} 
export default NewProfile;