import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [timer , setTimer] = useState(null);
const handleEvent=(e)=>{
  if(e.key==="Enter"){
    setTimer(Math.round(e.target.value));
  }
}
useEffect(()=>{
  if(timer){
 const intervalId= setInterval(()=>{
  setTimer((prevTimer)=>prevTimer-1);
 },1000);
 return ()=>{
  clearInterval(intervalId);
 }
}
},[timer])
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" type="number" onKeyDown={handleEvent} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  )
}



export default App;
