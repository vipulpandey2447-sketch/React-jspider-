import React, { useState } from 'react'

const ControlledFromTask1 = () =>{
       const [firstname,setfirstname]=useState("");
       const [lastname,setlastname]=useState("");
       const [DOB,setDOB]=useState("");
       const [Emailid,setEmailid]=useState("");
       const [MNo,setMNo]=useState("");
       const [message,setmessge]=useState("");


 const handlefirstname=(e)=>{
            setfirstname(e.target.value);
        };
        const handlelastname=(e)=>{
            setlastname(e.target.value);
        };
         const handleDOB=(e)=>{
            setDOB(e.target.value);
        };
        const handleEmailid=(e)=>{
            setEmailid(e.target.value);
        };
 const handleMNo=(e)=>{
            setMNo(e.target.value);
        };

const handleForm=(e)=>{
    e.preventDefault();
    console.log("Form sumitted");

 setfirstname("");
 setlastname("");
 setDOB("");
 setEmailid("");
 setMNo("");
  
 setmessge(`Welcome ${firstname} ${lastname}`);
      
    
}







  return (
    <div>
      <h1>HTML From</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="firstname">First Name : </label>
        <input type="text" id='firstname' value={firstname} onChange={handlefirstname}/>
         <br /> <br />
         <label htmlFor="lastname">Last Name : </label>
        <input type="text" id='lastname' value={lastname} onChange={handlelastname}/>
        <br /><br />
        <label htmlFor="DOB">Date of Birth :</label>
        <input type="text" id='DOB' value={DOB} onChange={handleDOB}/>
        <br /><br />
        <label htmlFor="Emailid">Email id : </label>
        <input type="text" id='Emailid' value={Emailid} onChange={handleEmailid}/>
        <br /><br />
        <label htmlFor="M.No ">M.No : </label>
        <input type="text" id='M.No' value={MNo} onChange={handleMNo}/>
        <br /><br />
      <button>Submit </button>
      <button>Reset</button>
      </form>
            {message && <h2>{message}</h2> }

    </div>
  )
}

export default ControlledFromTask1; 