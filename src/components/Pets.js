import React, { useEffect, useState } from "react";

export const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const url = "http://localhost:8080/pet/list";
      const petList = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const petListJson = await petList.json();
      console.log(petListJson);
      setPets(petListJson);
    };
    getPets();
  }, []);

  return (
    <>
      {pets.map((pet, i) => (
        <div key = {i} className="card my-card">
          <div className="card-body">
            <h5 className="card-title">{pet.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{pet.owner.firstname}</h6>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      ))}
    </>
  );
};
