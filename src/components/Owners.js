import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

export const Owners = () => {
  const [owners,setOwners] = useState([]);

  useEffect(()=>{
    const getOwners = async () =>{
      const url = 'http://localhost:8080/owner/list';
      const ownerList = await fetch(url, {
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const ownerListJson = await ownerList.json();
      setOwners(ownerListJson);
    };

    getOwners();
  },[]);

  return (
    <>
      {owners.map((owner, i) => 
       <div key = {i} className="card my-card">
       <div className="card-body">
         <h5 className="card-title">{owner.firstname}</h5>
         <Link to={`/onwer/${owner.id}`} className="card-link">Perfil</Link>
       </div>
     </div>
      )}
    </>
  )
}

