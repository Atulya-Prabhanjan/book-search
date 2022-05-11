import React,{props} from 'react';

function A(props){
    return(
        <a href={props.link}>{props.words}</a>
    )
}

export default A;