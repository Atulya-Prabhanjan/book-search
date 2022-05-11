import React,{props} from 'react';

function Button(props){
    return(
        <button className={props.class} onClick={props.func}>{props.name}</button>
    )
}

export default Button;