import React, { useState } from 'react'

const ControlledForms1 = () => {
       const [firstname,setfirstname]=useState("");
        const [lastname,setlastname]=useState("");
        const [message,setmessge]=useState("");

        const handlefirstname=(e)=>{
            setfirstname(e.target.value);
        };
        const handlelastname=(e)=>{
            setlastname(e.target.value);
        };
        
        const handleForm =(e)=>{
            e.preventDefault();
            console.log("form sumitted");
         let data ={
            fullname:{ firstname , lastname }
         };
         console.log(data);

          
        // clearing input feilds
        setfirstname("");
        setlastname("");
  
        setmessge(`Welcome ${firstname} ${lastname} `);
        }


  return (
    <div>
      <h1> learn  ControlledForms1 </h1>

      <form onSubmit={handleForm}>
        <label htmlFor="firstname">first name :</label>
        <input type="text" id='firstname' value={firstname} onChange={handlefirstname} />
        <br /><br />
         <label htmlFor="lastname">last  name :</label>
        <input type="text" id='lastname' value={lastname} onChange={handlelastname}/>
        <br /><br />

        <button>Submit </button>
      </form>
      {message && <h2>{message}</h2> }
    </div>
  )
}

export default ControlledForms1; 
