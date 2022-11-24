import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const PetDetails = () => {
  const [pet, setPet] = useState({});
  const {idPet} = useParams();

  useEffect(() => {
    const getPet = async () => {
      const url = `http://localhost:8080/pet/details?id=${idPet}`;
      const pet = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const petJson = await pet.json();
      setPet(petJson);
      console.log(await petJson);
    };

    getPet();
  }, []);

  return (  
    <div className="container">
      <div className="row row-cols-2">
        <div className="col">Nombre:</div>
        <div className="col">{`${pet.name}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Altura:</div>
        <div className="col">{`${pet.high}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Peso:</div>
        <div className="col">{`${pet.weight}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">especie:</div>
        <div className="col">{`${pet.species}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Raza:</div>
        <div className="col">{`${pet.breed}`}</div>
      </div>
    </div>
  );
}
