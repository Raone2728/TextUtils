
import Navbar from './components/Navbar';
import Textfrom from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'

function App() {

  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
   
    if(mode==='dark'){
      setMode("white");
      console.log('hello')
      document.body.style.backgroundColor='white';
      document.body.style.Color='black';
     
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      document.body.style.Color="white";
   
    }
  }
  return (
    <>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Textfrom heading="Enter the Text to analyze" mode={mode}/>
       {/* <About/> */}
    </>
    
    
  );
}

export default App;
