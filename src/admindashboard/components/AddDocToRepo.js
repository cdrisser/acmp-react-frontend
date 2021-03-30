import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'

import Input from "../../shared/FormElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook'
import Button from '../../shared/FormElements/Button';
import {useHttpClient} from '../../shared/hooks/httphook'
import {AuthContext} from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import SuccessModal from '../../shared/UIElements/SuccessModal'
import DocUpload from '../../shared/FormElements/DocUpload';


const AddDocToRepo = (props)=>{
    const auth = useContext(AuthContext);
    const{isLoading, error, sendRequest, clearError } = useHttpClient();
    const [newProfileSuccess, setNewProfileSuccess]= useState(false);
    const[radioButtonValue, setRadioButtonValue] = useState('misc');
  const [formState, inputHandler] = useForm({
    repotitle:{
        value:'',
        isValid:false
    },
    repodescription:{
        value:'',
        isValid:false
    },
    file:{
        value:'',
        isValid:false
    }
},
false);

    const repoInputHandler = async event =>{
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("repotitle",formState.inputs.repotitle.value)
            formData.append("repodescription",formState.inputs.repodescription.value)
            formData.append("type", radioButtonValue)
            formData.append("file",formState.inputs.file.value)
            
        try
        {
            await sendRequest('http://localhost:5000/api/repo/',
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
        props.docadded(true)
    }
    const radioButtonListener = (event)=>{
        setRadioButtonValue(event.target.value);
    }

    return (
    <React.Fragment>
        {isLoading && <Spinner/>}
        <ErrorModal error={error} onClear ={clearError}/>
        < SuccessModal showSuccess={newProfileSuccess} onClear ={clearSuccessListener} header='Success!' message='Your document has been successfully uploaded!'/>
        <form id = 'form' className='form-control' onSubmit={repoInputHandler}>

            <Input element="text" id="repotitle" label="Title" errorText ="Please enter a valid title" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <Input element="text" id="repodescription" label="Description" errorText="Please enter a valid description" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
            <div className='center radio-buts-repo'>
            
            <label htmlFor="media"><input type="radio" id="media" name="type" value="media" onChange={radioButtonListener}/> Media</label>
            <label htmlFor="docs"><input type="radio" id="docs" name="type" value="docs" onChange={radioButtonListener}/> Documents</label>
            <label htmlFor="misc" ><input type="radio" id="misc" name="type" value="misc" defaultChecked onChange={radioButtonListener}/> Miscellaneous</label>
            </div>
            <DocUpload id ="file" onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]}/>
            <Button styleBut={{marginTop:'.5rem'}} type = "submit" disabled = {!formState.isValid}>Add</Button>
        </form>
    </React.Fragment>)
} 
export default AddDocToRepo;