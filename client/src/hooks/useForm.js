import { useState } from "react";
export function useForm(initialValues,onSubmit){
    const [values,setValues]= useState(initialValues)
    
    function onFormValuesChange(e){
        
        if(e.target.name==="rating"){
            setValues(state=>({...state,[e.target.name]:e.target.value}))
            
            if(Number(e.target.value)>10){
                
                    setValues(state=>({...state,[e.target.name]:10}))
                }
            
        }
        if(e.target.name!==`rating`){
            setValues(state=>({...state,[e.target.name]:e.target.value}))
        }
        

    }
    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setValues(newValues);
    };
    function onFormSubmit(e){
        e.preventDefault()
        const valuesArr = Object.values(values)
        if(valuesArr.includes("")){
            alert(`All fields are required`)
            return
        }
        onSubmit(values)
    }
return {
    values,
    onFormSubmit,
    onFormValuesChange,
    changeValues
}

}