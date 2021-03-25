import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Input from "../../shared/FormElements/Input"
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook'
import Button from '../../shared/FormElements/Button';
import {useHttpClient} from '../../shared/hooks/httphook'
import {AuthContext} from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import SuccessModal from '../../shared/UIElements/SuccessModal'

const AddEvent = (props)=>{
        const auth = useContext(AuthContext);
        const{isLoading, error, sendRequest, clearError } = useHttpClient();
        const [newProfileSuccess, setNewProfileSuccess]= useState(false);
      const [formState, inputHandler] = useForm({
        name:{
            value:'',
            isValid:false
        },
        type:{
            value:'',
            isValid:false
        },
        street:{
            value:'',
            isValid:false
        },
        city_state_zip:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        cost:{
            value:'',
            isValid:false
        },
        cost:{
            value:'',
            isValid:false
        }
        
        
    },
    false);
    
        
        const eventsInputHandler = async event =>{
            event.preventDefault();
            const datearr = document.querySelector('input[type="date"]').value.split("-");
            const date = `${datearr[1]}-${datearr[2]}-${datearr[0]}`;
            let neweventjson =JSON.stringify({
                name:formState.inputs.name.value,
                type:formState.inputs.type.value,
                address:{street:formState.inputs.street.value,city_state_zip:formState.inputs.city_state_zip.value},
                description:formState.inputs.description.value,
                cost:formState.inputs.cost.value,
                date:date
            })
            
            try{
                await sendRequest('http://localhost:5000/api/events/',
                'POST', 
                neweventjson,
                {Authorization: "Bearer " + auth.token,
                'Content-Type':'application/json'}
                )
                setNewProfileSuccess(true);
                props.addedevent(true);
            }
            catch(error){
    
            }   
        };
    
        const clearSuccessListener = ()=>{
            setNewProfileSuccess(false);
            props.addedevent(false);

        }
        return (
        <React.Fragment>
            {isLoading && <Spinner/>}
            <ErrorModal error={error} onClear ={clearError}/>
            < SuccessModal showSuccess={newProfileSuccess} onClear ={clearSuccessListener} header='Success!' message='Your event has been successfully uploaded!'/>
            <form  id = 'form' className='form-control' onSubmit={eventsInputHandler}>
                <h2>Add Event</h2>
                <Input element="text" id="name" label="Name " errorText ="Please enter a valid name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" id="type" label="Type " errorText="Please enter a valid type" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" id="street" label="Street " errorText="Please enter a valid street" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="text" id="city_state_zip" label="City State Zip " errorText="Please enter a valid city state and zip" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <Input element="textarea" rows='3' id="description" label="Description " errorText="Please enter a valid description between 45-130" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(45), VALIDATOR_MAXLENGTH(130)]}/>
                <Input element="text" id="cost" label="Cost " errorText="Please enter a valid cost" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                <div><label htmlFor="date">Date:</label><input type= "date" id="date" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}></input></div>
                <div className='button-center'>
                    <Button type = "submit" disabled = {!formState.isValid}>Add Event</Button>
                </div>
            </form>
        </React.Fragment>)
    } 


export default AddEvent;