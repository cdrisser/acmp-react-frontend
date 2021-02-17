import React from 'react'
import { AuthContext } from '../context/auth-context';

import Button from '../FormElements/Button'
import Modal from '../UIElements/Modal';

const SignupModal = ((props)=>{
    return(
        <Modal 
        onCancel ={props.onClear}
            header = "Verifying Membership"
            show = {props.showSignup}
            footer={<Button onClick={props.onClear}>Okay</Button>}>
            <p>Please give up to 3 business days to verify your membership</p>
        </Modal>
    );
});

export default SignupModal;