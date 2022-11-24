import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const OwnerDetails = () => {
  const [owner, setOwner] = useState({});
  const {idUser} = useParams();

  useEffect(() => {
    const getOwner = async () => {
      const url = `http://localhost:8080/owner/details?id=${idUser}`;
      const owner = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const ownerJson = await owner.json();
      setOwner(ownerJson);
      console.log(await ownerJson);
    };

    getOwner();
  }, []);

  return (  
    <div className="container">
      <div className="row row-cols-2">
        <div className="col">Nombre:</div>
        <div className="col">{`${owner.firstname} ${owner.lastname}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Email:</div>
        <div className="col">{`${owner.email}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Dirección:</div>
        <div className="col">{`${owner.address}`}</div>
      </div>
      <div className="row row-cols-2">
        <div className="col">Teléfono:</div>
        <div className="col">{`${owner.phoneNumber}`}</div>
      </div>
    </div>
  );
};
