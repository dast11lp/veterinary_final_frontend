import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth-services";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) =>{
    e.preventDefault();
    try {
        await login(email, password).then(
          () => {
            navigate("/")
            window.location.reload();
          }
        )
      
    }catch(err){

    }
  }


  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
              type="text" 
              placeholder='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
        />
         <input 
              type="text" 
              placeholder='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
        />
      <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}


