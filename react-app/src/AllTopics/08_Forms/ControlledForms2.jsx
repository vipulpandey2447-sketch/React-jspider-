import React, { useState } from 'react'


const ControlledForms2 = () => {
     const [formData,setData]=useState({
        username: "",
        email: "",
        password: "",
     });

     const handleChange =(e)=>{
        let {name,value}=e.target;

        setData({...formData,[name]: value});
     };
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        console.log(formData);
        // to get existing user from local storage,if user are present parse it else initialize with empty array[]

        let users = JSON.parse(localStorage.getItem("users")) || []
        console.log(users);
      // create userData data with id 
      let userData={ ...formData, id: Math.random()};

      // add useData to users arrray 
      users.push(userData);

      // setuser array to local storage after converting to string
      localStorage.setItem("users", JSON.stringify(users));
        // clear form after submit
        setData({
            username: "",
            email: "",
            password: "",
        });
     };

  return (
    <div>
      <h1>Learn controlled Forms</h1>
      <p>Manage multiple input with single state</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='Enter username' value={formData.username} onChange={handleChange} />
        <br /><br />
        <input type="text" name='email' placeholder='Enter email' value={formData.email} onChange={handleChange}/>
        <br /><br />
        <input type="text" name='password' placeholder='Enter password' value={formData.password} onChange={handleChange}/>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}


export default ControlledForms2; 
