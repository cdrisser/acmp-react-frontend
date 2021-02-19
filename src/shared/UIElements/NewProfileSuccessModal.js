import React from 'react'
import Modal from '../UIElements/Modal';
import Button from '../FormElements/Button'

const NewProfileSuccessModal = props=>{
 return(
    <Modal 
    onCancel ={props.onClear}
        header = "New Profile Successfully Created"
        show = {props.showSuccess}
        footer={<Button onClick={props.onClear}>Okay</Button>}>
        <p>Your profile has successfully been created!</p>
    </Modal>
 )
};
export default NewProfileSuccessModal;