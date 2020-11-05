import React,{useState} from "react";
import Axios from "axios";

const Signup = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

  const onSubmit = (e) =>{
    e.preventDefault()
    //alert(username+password)
    Axios.post('http://localhost:8000/api/signup', {
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
      <h1>signup</h1>
      <form onSubmit={onSubmit}>
        <label>
          username
        </label>
        <input value={username} onChange={e=>setUsername(e.target.value)}/>
        <label>
          password
        </label>
        <input value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Signup;
