import { useState } from 'react';
import './App.css';

function App() {
  let [num,setNum]= useState(0);
  const increment=()=>{
    setNum(num+1)
  }
  const decrement=()=>{
    setNum(num-1)
  }
  return (
    <div >
               <div id="container">
                     <h1>{num}</h1>
                     <br></br><br></br>
                   <div id="btn">  
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                   </div>
               </div>
    </div>
  );
} 

export default App;
