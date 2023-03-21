
import React, { useState } from 'react'



function Textfrom(props){


   const  handleUpperClick=()=>{
        
       let newText=text.toUpperCase();
       setText(newText);
    }
    const handleOnChange=(event)=>{
           setText(event.target.value);
    }
    const [text,setText]=useState("Enter the text here");
   
    return (
          <>
       <div className="container">
       <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
  <textarea className="form-control"  value={text}  onChange={handleOnChange}  id="mybox" rows="7"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpperClick}>Convert to Uppercase </button>
       </div>
       <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>334 words, 324 character</p>
        
       </div>
</>
    )
}
export default Textfrom;