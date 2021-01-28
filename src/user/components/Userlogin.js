import React, {useState, useContext} from 'react'

import Input from "../../shared/FormElements/Input"
import Button from "../../shared/FormElements/Button"
import {useForm} from "../../shared/hooks/formhook"
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {AuthContext} from '../../shared/context/auth-context'

const Userlogin = props =>{
    const auth = useContext(AuthContext);
    const[isLoginMode, setIsLoginMode] = useState(true);
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
            },formState.inputs.email.isValid && formState.inputs.password.isValid);
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
    const loginInputHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs)
        auth.login();
    } 
    return(
        <React.Fragment>
        {isLoginMode?<h1>Log in</h1>:<h1>Sign up</h1>}
        <form className = " form-control-login" onSubmit={loginInputHandler}>
            {!isLoginMode && <Input id = 'firstname' element = "text" label = 'First name:' errorText = "Please enter a valid first name" onInput={inputHandler} validators ={[VALIDATOR_REQUIRE()]}/>}
            {!isLoginMode && <Input id = 'lastname' element = "text" label = 'Last name:' errorText = "Please enter a valid last name" onInput={inputHandler} validators ={[VALIDATOR_REQUIRE()]}/>}
            <Input id = 'email' element = 'text' label = "Email:" placeholder = 'username@email.com' errorText ="Please enter a valid email address" onInput={inputHandler} validators={[VALIDATOR_EMAIL()]}/>
            <Input id = 'password' element = 'text' label = 'Password:' placeholder = '********'  errorText ="Please enter 8 or more characters" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(8)]}/>    
            <Button disabled = {!formState.isValid} type = "submit">{isLoginMode?'Log in':'Sign up'}</Button>
            <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode ?'Sign up':'Log in'}</Button>
            </form>
            </React.Fragment>


        
    )
}

export default Userlogin;