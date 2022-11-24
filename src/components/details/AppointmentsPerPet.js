import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const AppointmentsPerPet = () => {

  const {idPet} = useParams();

  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const url = `http://localhost:8080/pet/my-appointments/${idPet}`;
      const request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const requestJson = await request.json();
      setAppointments(requestJson);
      console.log(await requestJson);
    };

    getAppointments();
  }, []);


  const cancelMyAppointment = async (idPet, idAppointment) => {
    const url = `http://localhost:8080/appointment/cancel/${idPet}/${idAppointment}`;
    const canceledAppointment = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const canceledAppointmentJson = await canceledAppointment.json();
    console.log(canceledAppointmentJson);
    console.log(canceledAppointmentJson.Message);
    window.location.reload();    
    if (canceledAppointmentJson) {
      setMessage(canceledAppointmentJson.Message);
    }
  };

  return (
    <>
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
                  cancelMyAppointment(idPet, appointment.id)
                }}
                className="card-link"
              >
                Eliminar cita
              </Link>
            </div>
          </div>
        ))}
      </>
  )
}
