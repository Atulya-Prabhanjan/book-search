import React,{props} from 'react';
import Dpart from './dynamicPart';

function Map(props){
    console.log("props= "+props.d);
    if(props.d==""){
        return(<h1>No Results were Found!</h1>)
    }
    else
        return(props.d.map( x=> <Dpart key={x.id} name={x.name} author={x.author} rating={x.rating} sc={x.src} syno={x.synopsis}/>))
}

export default Map;