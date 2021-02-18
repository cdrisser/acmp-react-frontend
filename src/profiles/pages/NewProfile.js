import React, {useContext} from 'react'

import Input from "../../shared/FormElements/Input"
import '../components/NewProfile.css'
import {VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_URL} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook'
import Button from '../../shared/FormElements/Button';
import {useHttpClient} from '../../shared/hooks/httphook'
import {AuthContext} from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
const NewProfile = (props)=>{
    const auth = useContext(AuthContext);
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
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
    picture:{
        value:'',
        isValid:false
    },
    elevator:{
        value:'',
        isValid:false
    }
},
false)
    
    

    const profileInputHandler = async event =>{
        event.preventDefault();
        try{
            await sendRequest('http://localhost:5000/api/profiles/',
            'POST', JSON.stringify({
                firstname:formState.inputs.firstname.value,
                lastname:formState.inputs.lastname.value,
                image:" ",
                linkedin:formState.inputs.linkedin.value,
                elevator:formState.inputs.elevator.value,
                profileCreator:auth.userId
            }),
                {'Content-Type':'application/json'}
            )
        }
        catch(error){

        }   
    };

    return (
    <React.Fragment>
        {isLoading && <Spinner/>}
        <ErrorModal error={error} onClear ={clearError}/>
        <form className="form-control " onSubmit={profileInputHandler}>

            <Input element="text" id="firstname" label="First Name" errorText ="Please enter a valid first name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <Input element="text" id="lastname" label="Last Name" errorText="Please enter a valid last name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <Input element="text" type ="url" id="linkedin" label="LinkedIn URL" errorText="Please enter your linkedin URL" onInput={inputHandler} validators={[VALIDATOR_URL()]}/>
            <Input element="text" type ="file" id="picture" label="Upload a picture" errorText="Please submit a picture" onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]}/>
            <Input element="textarea" id="elevator" label="Elevator speech" errorText="Please tell us about you!" rows="10" cols="50" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(500)]}/>
            <Button type = "submit" disabled = {!formState.isValid}/>
        </form>
    </React.Fragment>)
} 
export default NewProfile;