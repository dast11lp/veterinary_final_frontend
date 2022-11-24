import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { petRegister } from '../services/auth-services';

export const AddPet = () => {
  const [name, setName] = useState("");
  const [high, setHigh] = useState("");
  const [weight,setWeight]= useState("");
  const [species,setSpecies]= useState("");
  const [breed,setBreed]= useState("");

  const navigate = useNavigate();

  const {idUser} = useParams();

  const handleRegister = async (e) =>{
    e.preventDefault();
    try {
        await petRegister(name, high, weight, species, breed, idUser)
        .then(
          () => {
            navigate(`/pets-usuario/${idUser}`);
          }
        )
        
      
    }catch(err){

    }
  }

  // name, high, weight, species, breed, idUser

  return (
    <div className="form" onSubmit={handleRegister}>
      <div className="container__child signup__form">
        <form >
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              type="text" 
              placeholder='Nombre'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Altura</label>
            <input
              className="form-control"
              type="text" 
              placeholder='Altura'
              value={high}
              onChange={(e)=> setHigh(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Peso</label>
            <input
              className="form-control"
              type="text" 
              placeholder='peso'
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Especie</label>
            <input
              className="form-control"
              type="text"
              placeholder='Especie'
              value={species}
              onChange={(e)=> setSpecies(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label >Raza</label>
            <input
              className="form-control"
              type="text"
              placeholder='Raza'
              value={breed}
              onChange={(e)=> setBreed(e.target.value)}
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
}
