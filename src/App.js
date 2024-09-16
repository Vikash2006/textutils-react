
import './App.css';
// import Abt from './components/Abt';
import Navbar from './components/Navbar';

import Forms from './components/Forms';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light');//whether dark mode is on or  not
  const[text,settext]=useState('enable dark mode');
  const[alert,setalert]=useState(null);


  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
 const bluemode=()=>{
     document.body.style.backgroundColor='blue'
      document.body.style.color='white'
      
 }
 const greenmode=()=>{
  document.body.style.backgroundColor='green'
   document.body.style.color='white'
}
const defaulter=()=>{
  document.body.style.backgroundColor='white'
   document.body.style.color='black'
}
  const togglemode=()=>{
    if(mode ==='light'){
      setmode('dark');
      settext("enable light mode");
      showalert("dark mode has been enabled","success")
      document.body.style.backgroundColor='grey'
      document.body.style.color='white'
      document.title="vikash(2)"
      // setInterval(() => {
      //   document.title="tetutils is amazing"
      // }, 1000);
      // setInterval(() => {
      //   document.title="tetutils download know"
      // }, 1500);
    }
   
    else{
      setmode('light');
      settext("enable dark mode");
      showalert("light mode has been enabled","success")
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.title="vikash(3)"
    }
  }
  return (
   
    <> 
  {/* <Router> */}
 <Navbar title='vikash' abouttext="About" mode={mode} togglemode={togglemode} text={text} bluemode={bluemode}
 greenmode={greenmode} defaulter={defaulter } class={"btn  btn-primary" }/  >

 <Alert alert={alert}/>

<div className="container my-3">

{/* <Routes> */}

{/* <Route path="/about" element={<Abt />} />
         
<Route path="/" element={ } /> */}
<Forms showalert={showalert} heading="enter your text  " />
 {/* </Routes> */}
 
 </div>
{/* </Router> */}




    </>
  );
}

export default App;
