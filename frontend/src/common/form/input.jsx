import React from 'react';

export default function Input(props) {
  return (
   
        <input 
        {...props.input} 
        type={props.type} 
        readOnly={props.readOnly} 
        placeholder={props.placeholder} 
        className="form-control"/>
  
  );
}
