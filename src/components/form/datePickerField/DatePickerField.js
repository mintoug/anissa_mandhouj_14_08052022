import * as React from 'react';
import { Label } from '../Label/Label';


export default function BasicDatePicker(props) {


  return (
   
    <div className='input-wrapper'>
        <Label >{props.label}</Label>
         <input 
        type={props.type}
         id={props.id}
         name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
         ></input>
    </div>
  );
}

;
