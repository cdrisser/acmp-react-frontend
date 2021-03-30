import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Input from "../../shared/FormElements/Input"
import { VALIDATOR_MINLENGTH} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/formhook'
import Button from '../../shared/FormElements/Button';
import {useHttpClient} from '../../shared/hooks/httphook'
import {AuthContext} from '../../shared/context/auth-context';
import ErrorModal from '../../shared/UIElements/ErrorModal';
import Spinner from '../../shared/UIElements/Spinner';
import SuccessModal from '../../shared/UIElements/SuccessModal'

const AddNews = (props)=>{
        const auth = useContext(AuthContext);
        const{isLoading, error, sendRequest, clearError } = useHttpClient();
        const [newNewsSuccess, setNewNewsSuccess]= useState(false);
      const [formState, inputHandler] = useForm({
        headline:{
            value:'',
            isValid:false
        },
        newsbody:{
            value:'',
            isValid:false
        }
    },
    false);
    
    const history = useHistory();
        
        
    
        const newsInputHandler = async event =>{
            event.preventDefault();

                
            try{
                await sendRequest('http://localhost:5000/api/news/',
                'POST', 
                JSON.stringify({
                    headline:formState.inputs.headline.value,
                    newsbody:formState.inputs.newsbody.value
                }),
                {Authorization: "Bearer " + auth.token,
                'Content-Type':'application/json'}
                )
                setNewNewsSuccess(true);
            }
            catch(error){
    
            }   
        };
    
        const clearSuccessListener = ()=>{
            setNewNewsSuccess(false);
            props.newnews();
        }
        return (
        <React.Fragment>
            {isLoading && <Spinner/>}
            <ErrorModal error={error} onClear ={clearError}/>
            < SuccessModal showSuccess={newNewsSuccess} onClear ={clearSuccessListener} header='Success!' message='Your news has been successfully uploaded!'/>
            <div className = 'add-news-container'>
                <h1>Add News</h1>
                <form  id = 'form' className='form-control' onSubmit={newsInputHandler}>
                    <Input element="text" id="headline" label="Headline " errorText ="Please enter a valid headline" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                    <Input element="textarea"  id="newsbody" label="Body " errorText="Please enter a valid body" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                    <div className='button-center'>
                    <Button type = "submit" disabled = {!formState.isValid}>Add News</Button>
                    </div>
                </form>
            </div>
        </React.Fragment>)
    } 


export default AddNews;