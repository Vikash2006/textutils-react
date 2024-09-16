import React,{useState} from 'react'

export default function Forms(props) {
  const[text,setText]=useState('enter your txt here');
  //text='hello alll'//wrong way to change the state
   

   const handleupclick=()=>{
   // console.log("uppercase was clicked")
   
    setText(text.toUpperCase()); //correct way
    props.showalert("text converted to uppercase successsfully","success")
   }

   const handledownclick=()=>{
    // console.log("uppercase was clicked")
    
     setText(text.toLowerCase()); //correct way
     props.showalert("text coverted to lowercase successsfully","success")
    }

    const eraseall=()=>{
      // console.log("uppercase was clicked")
       let newtext= ''
       setText(newtext); //correct way
       props.showalert("text removed successsfully","success")
      }


   const handleOnChange=(event)=>{
   // console.log("on change")
    setText(event.target.value);
   }
   const handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("text copied successsfully","success")
   }
  return (
    <>
    <div className='container'>
        <h3>{props.heading}</h3>
      <div className="form-group">
    
    <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':'black'}}   onChange={handleOnChange}/*this event needs to change the text inside the box */ rows="8"></textarea>
  </div>
   <button className="btn  btn-primary mx-3"  onClick={handleupclick}>convert to uppercase </button>
   <button className="btn  btn-primary mx-3" onClick={handledownclick}>convert to LowerCase </button>
   <button className="btn  btn-primary mx-3" onClick={eraseall}>empty box</button>
   <button className="btn  btn-primary mx-3" onClick={handlecopy}>copy text</button>
    </div>
    <div className="conatiner my-3">
    <h1>your txt summary</h1>
    <p> words {text.split(" ").length-1} {text.length}character</p>
    <p> {0.008* text.split(" ").length} minutes to read</p>
    <h2>preview</h2>
   <p>{text.length>0?text:"enter the text you want to preview here"}</p> 
    </div>
    </>
  )
}
