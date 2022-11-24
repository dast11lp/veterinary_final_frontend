import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authHeader } from "../services/auth-header";

export const AppointmentPerPet = () => {
  const [appointments, setAppointments] = useState([]);
  const { idPet } = useParams();
  const [message, setMessage] = useState();
  const [hidden, sethidden] = useState("");

  const {idUser} = useParams();

  const navigate = useNavigate();


  useEffect(() => {
    const getAppointmentss = async () => {
      const url = `http://localhost:8080/appointment/list?idUser=${3}`;
      const appointments = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeader()
        },
      });
      const appointmentsJson = await appointments.json();
      console.log(appointmentsJson);
      setAppointments(appointmentsJson);
    };
    console.log();
    getAppointmentss();
  }, [message]);

  const getMyAppointment = async (id) => {
    const url = `http://localhost:8080/appointment/request?idPet=${idPet}&idAppointment=${id}`;
    const reservedAppointment = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const reservedAppointmentJson = await reservedAppointment.json();
    console.log(reservedAppointmentJson);
    console.log(reservedAppointmentJson.Message);
    sethidden("");
    
    if (reservedAppointmentJson) {
      setMessage(reservedAppointmentJson.Message);
    }

    if(!reservedAppointmentJson.Message){
        navigate("/")
    }
  };


  const closeModal = function () {
    sethidden("hidden");
    setMessage(null);
  };

  if (appointments.length > 0) {
    return (
      <>
        {
          message != null && <div className={`my-modal ${hidden}`}>
          <button className="close-modal" onClick={closeModal} >&times;</button>
          <h1>Alerta! 💥</h1>
          <p>
            {message}
          </p>
        </div>
        }

        {appointments.map((appointment, i) => (
          <div key={i} className="card my-card">
            <div className="card-body">
              <h5 className="card-title">Fecha: {appointment.dateAndTime}</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">{}</h6> */}
              <h6 className="card-subtitle mb-2 text-muted">
                Oficina: {appointment.office}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Veterinario: {appointment.veterinarian.email}
              </h6>
              <Link
                onClick={() => {
                  getMyAppointment(appointment.id);
                }}
                className="card-link"
              >
                Agendar
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
};
