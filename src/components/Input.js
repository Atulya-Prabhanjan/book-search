import React,{props} from 'react';

function Input(props){
    return(
        <input placeholder={props.place} onChange={props.func} value={props.value}></input>
    )
}

export default Input;