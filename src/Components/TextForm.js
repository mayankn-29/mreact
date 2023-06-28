//import React from 'react'
import React, {useState} from "react";

export default function TextForm() {

  const ToUpperCase =() =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const OnChange = (event) =>{
    //console.log('OnChange')
    setText(event.target.value)
  }
  const [text,setText] = useState("Enter Text Here!");

  return (
    <div>
      <h1>Enter Your Data Here</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={OnChange} value={text } ></textarea>
</div>

<button className="btn btn-primary mx-1 my-1" onClick={ToUpperCase} >Convert to uppercase</button>
    </div>
  )
}
