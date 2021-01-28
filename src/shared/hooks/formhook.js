import {useCallback, useReducer} from 'react'


const formReducer = (state,action)=>{
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const input in state.inputs){
                if(!state.inputs[input]){
                    continue;
                }
                if (input === action.input){
                    
                    formIsValid = formIsValid && action.isValid;
                
                }
                else{
                    
                    formIsValid = formIsValid && state.inputs[input].isValid;
                }
            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.input]:{value:action.value, isValid:action.isValid}
                },
                isValid:formIsValid
            };
        case 'SET-DATA':
            return{
                inputs:action.inputs,
                isValid:action.formIsValid
            };
        default:
            return state;
    }
}

export const useForm = (initialInputs, initialValidity)=>{
    const [formState,dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialValidity
    });

    const inputHandler = useCallback((id,value,isValid)=>{
        
        dispatch({
            type:'INPUT_CHANGE',
            value:value,
            isValid:isValid,
            input:id
        });
    },[]);

    const setFormData = useCallback((inputData,formValidity)=>{
        dispatch({
            type:'SET-DATA',
            inputs:inputData,
            formIsValid:formValidity
        })
    },[]);

    return [formState, inputHandler,setFormData];
};
