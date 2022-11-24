import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth-services";

export const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname,setFirstname]= useState("");
  const [lastname,setLastname]= useState("");
  const [address,setAddress]= useState("");
  const [phoneNumber,setPhoneNumber]= useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) =>{
    e.preventDefault();
    try {
        await signUp(email, password, firstname, lastname, address,phoneNumber).then(
          () => {
            navigate("/");
            window.location.reload();
          }
        )
        
      
    }catch(err){

    }
  }


  return (
    <div className="form" onSubmit={handleRegister}>
      <div className="container__child signup__form">
        <form >
          <div className="form-group">
            <label htmlFor="username">Correo Electrónico</label>
            <input
              className="form-control"
              type="text" 
              placeholder='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Contraseña</label>
            <input
              className="form-control"
              type="password" 
              placeholder='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Nombre</label>
            <input
              className="form-control"
              type="firstname" 
              placeholder='John'
              value={firstname}
              onChange={(e)=> setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Apellido</label>
            <input
              className="form-control"
              type="text"
              placeholder='Doe'
              value={lastname}
              onChange={(e)=> setLastname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Dirección</label>
            <input
              className="form-control"
              type="text"
              placeholder='Carrera xx #xx - xx'
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Numero de teléfono</label>
            <input
              className="form-control"
              type="text"
              placeholder='1111111'
              value={phoneNumber}
              onChange={(e)=> setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
                <button className="btn btn--form" type="submit" >Registrarse</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};
