import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { authHeader } from '../../services/auth-header';


export const OwnerPets = () => {

  const [errores, setErrores] = useState("");

  const [pets, setPets] = useState([]);

  const {idUser} = useParams();

  useEffect(() => {
    const getPets = async () => {
      try {
      const url = `http://localhost:8080/owner/pet-list?idUser=${idUser}`;
      const petList = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeader()
        },
      });
      const petListJson = await petList.json();
      console.log(petListJson);
      setPets(petListJson);
      } catch (error) {
        setErrores(error.message)
        console.error(error);
      }
    };
    getPets();
  }, []);

   if(pets.length > 0){
    return (
      <>
      <Link to={`/pet-register/${idUser}`}>Registrar Mascota</Link>
        {pets.map((pet, i) => (
          <div key = {i} className="card my-card">
            <div className="card-body">
              <h5 className="card-title">{pet.name}</h5>
              <Link to={`/reserve-appointment/${pet.id}`} className="card-link">Agendar Cita</Link>
              <br></br>
              <Link to={`/my-pet-appointments/${pet.id}`}>Citas Agendadas</Link>
              <br></br>
              <Link to={`/pet-details/${pet.id}`}>Perfil</Link>
            </div>
          </div>
        ))}
      </>
    );
  }
  else {
    return (<Link to={`/pet-register/${idUser}`}>Registrar Mascota</Link>);
  }
}
