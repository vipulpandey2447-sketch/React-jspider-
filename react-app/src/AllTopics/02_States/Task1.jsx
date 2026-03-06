import { useState } from "react";

const Task1=()=>{
    const[show,setShow]=useState(false);
    return(
        <>
        <h1>State Task 1</h1>
        <button onClick={()=>setShow((prev)=>!prev)}>{show ?"Hide": "Show"}</button>
        {show && ( <div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React.JS</li>
        </ul>
          </div>)}
        </>
    )
}
export default Task1;