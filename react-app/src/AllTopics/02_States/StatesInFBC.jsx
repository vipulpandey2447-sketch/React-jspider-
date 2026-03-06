 import { useState } from "react";
 
 const StatesInFBC =() =>{
    
    const[data,setData]= useState("Hello Everyone ❤️");// [ud,f]
     const[cart,setCart]= useState("Add to cart");
    const handleBtn =()=> {
        setData("Byee Evreyone 👍 ");
    };
    const handleCartbtn=()=> {
       setCart("Go to cart")
    }


    return(
        <>
        <h1>Learn States in function Based </h1>
        <h2>{data}</h2>
        <button onClick={handleBtn}>update</button>
        <hr />
        <button onClick={handleCartbtn}>{cart} </button>
        </>
    );
};

export default StatesInFBC;