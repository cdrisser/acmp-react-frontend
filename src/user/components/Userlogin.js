import React, {useState, useContext} from 'react'

import Input from "../../shared/FormElements/Input"
import Button from "../../shared/FormElements/Button"
import {useForm} from "../../shared/hooks/formhook"
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {AuthContext} from '../../shared/context/auth-context'

const Userlogin = props =>{
    const auth = useContext(AuthContext);
    const[isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [formState,inputHandler,setFormData]  = useForm({
        email:{
            value:'', 
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }

    },false);

    
    const switchModeHandler = () =>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                firstname:undefined,
                lastname:undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid);
        }
        else{
            setFormData({
                ...formState.inputs,
                firstname:{
                    value:'',
                    isValid:false
                },
                lastname:{
                    value:'',
                    isValid:false
                }
            },
            false
            );
        }
        setIsLoginMode((prevMode) => !prevMode);
           
    }
    const loginSubmitHandler = async event =>{
        event.preventDefault();
        if(isLoginMode){
            fetch()
        }
        else{
            try{
                setIsLoading(true);
                const response =  await fetch('http://localhost:5000/api/users/signup',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    firstname:formState.inputs.firstname.value,
                    lastname:formState.inputs.lastname.value,
                    email:formState.inputs.email.value,
                    password:formState.inputs.password.value
                })
            });
                const responseData = await response.json();
                console.log(responseData);
                setIsLoading(false)
                auth.login();
            }catch(error){
                console.log(error);
                setIsLoading(false)
                setError(error.message||"Something went wrong, please try again")
            }
        }
        
    } 
    return(
        <React.Fragment>
        {isLoginMode?<h1>Log in</h1>:<h1>Sign up</h1>}
        <form className = " form-control-login" onSubmit={loginSubmitHandler}>
            {!isLoginMode && <Input id = 'firstname' element = "text" label = 'First name:' errorText = "Please enter a valid first name" onInput={inputHandler} validators ={[VALIDATOR_REQUIRE()]}/>}
            {!isLoginMode && <Input id = 'lastname' element = "text" label = 'Last name:' errorText = "Please enter a valid last name" onInput={inputHandler} validators ={[VALIDATOR_REQUIRE()]}/>}
            <Input id = 'email' element = 'text' label = "Email:" placeholder = 'username@email.com' errorText ="Please enter a valid email address" onInput={inputHandler} validators={[VALIDATOR_EMAIL()]}/>
            <Input id = 'password' element = 'text' label = 'Password:' placeholder = '********'  errorText ="Please enter 8 or more characters" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(8)]}/>    
            <Button disabled = {!formState.isValid} type = "submit">{isLoginMode?'Log in':'Sign up'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode ?'Sign up':'Log in'}</Button>
            
            </React.Fragment>


        
    )
}

export default Userlogin;