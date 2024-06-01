import { useEffect, useState } from "react";

function App() {
  const [windowsize,setWindowsize] =useState(
    {
      width:window.innerWidth,
      height:window.innerHeight
    }
  )

 useEffect(()=>{
  const handlesize=()=>{
    setWindowsize({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }
  window.addEventListener('resize',handlesize)
  return ()=>{
    window.addEventListener('resize',handlesize)
  }
 },[])
  return (
    <div >
      <p>{windowsize.width}</p>
      <p>{windowsize.height}</p>
    </div>
  );
}

export default App;
