import { useState } from "react";

const ThemeChange =()=>{
    const [Theme,setTheme]=useState("Dark");

    const handleTheme=()=>{
        console.log("Theme changed");
        setTheme((prev)=>(prev ==="Dark" ? "light" :"Dark"));
        document.body.style.backgroundColor= Theme=== "Dark"? "black":"white";
        document.body.style.Color= Theme=== "Dark"? "white":"black";
    };

    console.log(Theme);

    return(
         <section
          // style={{backgroundColor:Theme==="Dark"?"black" :"white",color: Theme=== "Dark"? "white" :"black"}}
          >
        <h1>Theme Change Task</h1>
        <button onClick={handleTheme}>{Theme}</button>
        </section>
    );
};

export default ThemeChange;






