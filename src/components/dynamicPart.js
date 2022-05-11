import React,{props} from 'react';
import '../styles/App.css';
import Button from './Button';

function Dpart(props) {
  return (
    <div className='dynamic'>
        <h3 className='in'>Book name: {props.name}</h3>
        <h3 className='in'>Author name: {props.author}</h3>

        <h3 className='in'>rating: {props.rating}</h3>
        <img src={props.sc}/>
        <div className='in'>
          <h3>Synopsis:</h3>
          <p>{props.syno}</p>
          
        </div>
    </div>
  );
}

        /*<Button name="rate" class="rate"/>
          <Button name="review" class="review"/>*/

export default Dpart;
