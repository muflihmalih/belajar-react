import React, {useState} from "react";
import Axios from "axios";

const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const onSubmit = (e) =>{
    e.preventDefault()
    //alert(username+password)
    // if(!username || !password){
    //   return alert("harus mengisi username dan password")
    // }
    Axios.post('http://localhost:8000/api/login', {
      username,
      password
    })
    .then(function (response) {
      alert("succes")
      console.log (response.data)
    })
    .catch(function (error) {
      alert("error")
    });
  }

  return (
    <div>
     <h1>login</h1>
      <form onSubmit={onSubmit}>
        <label>
          username
        </label>
        <input value={username} onChange={e=>setUsername(e.target.value)} required/>
        <label>
          password
        </label>
        <input value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
