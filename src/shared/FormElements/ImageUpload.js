import React,{useRef, useState, useEffect} from 'react';

import Button from '../../shared/FormElements/Button';

import './ImageUpload.css'

const ImageUpload = props =>{
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

const pickedImage = (event)=>{
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
    

    const pickImageHandler= () =>{
        filePickerRef.current.click();
    }

    return(
        <div>
           <input
           id={props.id}
           ref={filePickerRef}
           style={{display:'none'}}
           type="file"
           accept=".jpg,.png,.jpeg"
           onChange={pickedImage}
           /> 
            <div className={`${props.center && 'center'}`}>
                <div className = 'image-picker-center'>
                    {!previewUrl && props.updateimageUrl && <img className = 'image-preview' src = {`http://localhost:5000/${props.updateimageUrl}`} alt="Preview"/>}
                    {previewUrl && <img className = 'image-preview' src = {previewUrl} alt="Preview"/>}
                    {!previewUrl && !props.updateimageUrl && <p >Please pick an image!</p>}
                    <div>
                        <Button type="button" styleBut={{margin:'0 0 0 .5rem '}}  onClick={pickImageHandler}>PICK IMAGE</Button>
                    </div>
                </div>
                
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    )
}

export default ImageUpload;