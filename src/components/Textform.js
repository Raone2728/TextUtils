
import React, { useState } from 'react'



function Textfrom(props){
    const [text,setText]=useState("");

   const  handleUpperClick=()=>{
        
       let newText=text.toUpperCase();
       setText(newText);
    }
    const handleOnChange=(event)=>{
           setText(event.target.value);
    }
   
    const handleLowerClick=()=>{
         const lower=text.toLowerCase();
         setText(lower);
    }
    const handleClerClick=()=>{
        setText("");
    }
    const handlePreview=()=>{
       let p=document.getElementById("preview");
        p.innerHTML=text;
    }
    const handleCopy=()=>{
          const box=document.getElementById("mybox");
          box.select();
          navigator.clipboard.writeText(text.Value);
    }
    return (
          <>
       <div className="container"  style={{ color: props.mode==='dark' ? 'white' : '#042743'}}  >
       <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
  <textarea className="form-control"  value={text} style={{ backgroundColor: props.mode==='dark' ? '#042743' : 'white',color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleOnChange} id="mybox" rows="7"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpperClick}>Convert to Uppercase </button>
<button className='btn btn-primary mx-1' onClick={handleLowerClick}>Convert to Lowercase </button>
<button className='btn btn-primary mx-1' onClick={handleClerClick}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
       </div>
       <div className="container my-3" style={{ color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} character</p>
        <h2>Preview</h2>
        <p id="preview"></p>
        <button className='btn btn-primary mx-1' onClick={handlePreview} >click here to preview</button>
       </div>
</>
    )
}
export default Textfrom;