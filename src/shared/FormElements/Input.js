import React,{useReducer, useEffect} from 'react'
import {validate} from '../util/validators'
import './Input.css'

const inputReducer = (state,action)=>{
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                val:action.val,
                isValid:validate(action.val,action.validators)
            }
        case 'TOUCH':
            return{
                ...state,
                isTouched:true
            }
        default:
            return{
                ...state
            }
    }

};

const Input = props =>{
    const[currentState, dispatch] = 
    useReducer(inputReducer,{
        val:props.value || '' ,
        isValid:props.valid || false , 
        isTouched:false});
    
    const {id, onInput} = props;
    const {val, isValid} = currentState;

    useEffect(()=>{
        onInput(id, val, isValid)
    }, [id,val,isValid,onInput]);
 

    const onChangeHandler = event =>{
        dispatch({type:'CHANGE',
        val:event.target.value,
        validators: props.validators});
    }

    const onBlurHandler = ()=>{
        dispatch({type:'TOUCH',
        });
    }

    const element = props.element === 'text' ?( 
    <input id={props.id} type = {props.type} placeholder = {props.placeholder} onChange={onChangeHandler} onBlur={onBlurHandler} value = {currentState.val}></input>
    ):(
        <textarea id={props.id} type ={props.type} placeholder={props.placeholder} cols={props.cols} rows={props.rows} onChange={onChangeHandler}onBlur={onBlurHandler} value = {currentState.val}></textarea>
    )

    return < div className = {`${!currentState.isValid && currentState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
            {element}
            <div >
        {!currentState.isValid && currentState.isTouched && <p>{props.errorText}</p>} 
        </div>
    </div>
}

export default Input;