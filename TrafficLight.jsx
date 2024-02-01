import React,{useState,useEffect} from 'react';

export default function TrafficLight() {
  const [light,setLight] = useState("");
  let d = "";
  useEffect(()=>{
    handleChangeLight();
  },[d])
  function handleChangeLight(){
    changeLightRed();
    setTimeout(() => {changeLightGreen()} ,4000);
    setTimeout(() => {changeLightYellow();} ,8000);
    setTimeout(() => {changeLightRed();} ,9000);
  }
      
  function changeLightRed(){
    setLight("red");
  }
  function changeLightGreen(){
    setLight("green");
  }
  function changeLightYellow(){
    setLight("yellow");
  }

  return (
  <div style={{display:"flex",flexDirection:"column",gap:"1em"}}>
    <div style={{backgroundColor:"black",display:"flex",flexDirection:"column",width:"60px",height:"170px",padding:"9px",alignItems:"center",alignContent:"center",gap:"10px",borderRadius:"10px"}}>
      <span style={{backgroundColor:`${light === "red"?"red":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
      <span style={{backgroundColor:`${light === "yellow"?"yellow":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
      <span style={{backgroundColor:`${light === "green"?"green":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
    </div>
    <div style={{backgroundColor:"black",display:"flex",flexDirection:"row",width:"170px",height:"60px",padding:"10px",alignItems:"center",alignContent:"center",gap:"10px"}}>
      <span style={{backgroundColor:`${light === "red"?"red":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
      <span style={{backgroundColor:`${light === "yellow"?"yellow":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
      <span style={{backgroundColor:`${light === "green"?"green":"grey"}`,width:"50px",height:"50px",borderRadius:"50%"}}></span>
    </div>
  </div>
  );
}
