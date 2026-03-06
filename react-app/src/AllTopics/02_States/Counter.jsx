import { useState } from "react";

const Counter=()=> {
    const[count,setCount]=useState(0);

    const incre =()=>{
        //efficient way to update the state using call back function 
        setCount((prev)=> prev+3);
    };
    const decre =()=>{
         setCount((prev)=>prev>0? prev-1:0);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <>
        <h1>Counter :{count}</h1>
        <button onClick={incre}>increment</button>
        <button onClick={decre}>Decre</button>
        <button onClick={reset}>Reset</button>
        </>
    )
};

export default Counter;