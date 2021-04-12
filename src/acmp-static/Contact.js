import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'

import Input from "../shared/FormElements/Input"

import {VALIDATOR_EMAIL, VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH} from '../shared/util/validators';
import {useForm} from '../shared/hooks/formhook'
import Button from '../shared/FormElements/Button';
import {useHttpClient} from '../shared/hooks/httphook';
import ErrorModal from '../shared/UIElements/ErrorModal';
import Spinner from '../shared/UIElements/Spinner';
import SuccessModal from '../shared/UIElements/SuccessModal'
import MainNav from './MainNav';
import Footer from '../shared/Footer/Footer';
import '../index.css';

const Contact = ()=>{
        const{isLoading, error, sendRequest, clearError } = useHttpClient();
        const [messageSent, setMessageSent]= useState(false);
      const [formState, inputHandler] = useForm({
        name:{
            value:'',
            isValid:false
        },
        email:{
            value:'',
            isValid:false
        },
        message:{
            value:'',
            isValid:false
        }
        
    },
    false);
    
    const history = useHistory();
        
        const contactInputHandler = async event =>{
            event.preventDefault();
            
            try{
            console.log(`${process.env.REACT_APP_BACKEND_URL}/messages/`);
                await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/messages/`,
                'POST', 
                JSON.stringify({
                    name:formState.inputs.name.value,
                    email:formState.inputs.email.value,
                    message:formState.inputs.message.value
                }),
                {'Content-Type':'application/json'}
                )
                setMessageSent(true);
            }
            catch(error){
    
            }   
        };
    
        const clearSuccessListener = ()=>{
            setMessageSent(false);
            history.push('/contact')
        }
        return (
    <React.Fragment>
        {isLoading && <Spinner/>}
        <ErrorModal error={error} onClear ={clearError}/>
        < SuccessModal showSuccess={messageSent} onClear ={clearSuccessListener} header='Message Recieved' message='Message Recieved! We will contact you within 72 hours'/>
        <MainNav/>
        <section>
            <p className = "meettheteam-h1">Contact Us</p>
        </section>
        <div className = 'contact-container'>
            <section className = "contact-main">
                    <div className = "contact-form-l">

                    <form className = 'acmp-contact-form'  onSubmit={contactInputHandler}>
                        <h2 className='h2-profile'>Send a message</h2>
                        <Input element="text" id="name" placeholder='Name'  errorText ="Please enter a valid  name" onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(2)]}/>
                        <Input element="text"  id="email" placeholder='Email' errorText="Please enter your email " onInput={inputHandler} validators={[VALIDATOR_EMAIL()]}/>
                        <Input element="textarea" rows='4' id="message" placeholder='Message' errorText="Please enter a valid message"  onInput={inputHandler} validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(250)]}/>
                        <div className='button-center'>
                            <Button type = "submit" disabled = {!formState.isValid}>Submit</Button>
                        </div>
                    </form>
                </div>
            <div className = "contact-form-r">
                        <div className = "flex-change">
                        <div>
                    <i className="icon ion-ios-globe"></i>
                            </div>
                        <div>
                    <p>Need to become an ACMP global member first?</p>
                        </div>
                    </div>
                <div className = "flex-change">
                    <a className ="global-button" href="https://www.acmpglobal.org/page/join_acmp" target = "_blank" rel="noopener noreferrer">Go There</a>
                </div>


                    <div className = "flex-change">
                <p className ="heading-contact">Other Ways to Contact Us</p>
                        </div>
                <div className = "flex-change">
                        <p>acmparizona@gmail.com </p>
                        
                </div>
                <div className = "flex-change">
                    
                        <a href="https://www.linkedin.com/in/acmp-arizona" target = "_blank"  rel="noopener noreferrer">www.linkedin.com/in/acmp-arizona</a>
                
                </div>
                <div className = "flex-change">
                    
                        <a href='https://www.facebook.com/ACMPArizona' target = "_blank"  rel="noopener noreferrer">www.facebook.com/ACMPArizona</a>
                        
                    </div> 
                </div>
            </section>
        </div>
        <Footer/>
    </React.Fragment>
)};

export default Contact;