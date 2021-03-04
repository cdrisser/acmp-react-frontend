import React,{useRef, useState, useEffect} from 'react';

import Button from './Button';

import './DocUpload.css'

const DocUpload = props =>{
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(()=>{
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
},[file]);

const pickedFile = (event)=>{
    let pickedFile;
    let fileIsValid = isValid;
    if(event.target.files && event.target.files.length === 1){
        pickedFile = event.target.files[0];
        setFile(pickedFile);
        setIsValid(true);
        fileIsValid = true;
        
    }
    else{
        setIsValid(false);
        fileIsValid = false;
    }
    props.onInput(props.id, pickedFile,fileIsValid);
};
    

    const pickFileHandler= () =>{
        filePickerRef.current.click();
    }

    return(
        <div>
           <input
           id={props.id}
           ref={filePickerRef}
           style={{display:'none'}}
           type="file"
           onChange={pickedFile}
           /> 
            <div className={`${props.center && 'center'}`}>
               <div>
               {!previewUrl && <p>Please choose a file</p>}
               </div>
               <Button type="button" onClick={pickFileHandler}>Choose File</Button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    )
}

export default DocUpload;