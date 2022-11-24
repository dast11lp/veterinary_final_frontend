import React, { useEffect, useState } from "react";
import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { AboutUs } from "../components/AboutUs";
import { AddPet } from "../components/AddPet";
import { AppointmentPerPet } from "../components/AppointmentPerPet";
import { Contact } from "../components/Contact";
import { AppointmentsPerPet } from "../components/details/AppointmentsPerPet";
import { OwnerDetails } from "../components/details/OwnerDetails";
import { OwnerPets } from "../components/details/OwnerPets";
import { PetDetails } from "../components/details/PetDetails";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Owners } from "../components/Owners";
import { Pets } from "../components/Pets";
import { Register } from "../components/Register";
import { getCurrentUser, logout } from "../services/auth-services";

export const MyRouter = () => {
  const [authenticated, setAuthenticated] = useState([]);

  const idUser = !getCurrentUser() ? 0: getCurrentUser().id;

  console.log(getCurrentUser());

  console.log(idUser);

  useEffect(() => {
    const navList = [];
    const accountNavList = [];

    const isAuthenticated = () => {
      if (localStorage.getItem("user")) {
        navList.push(<>
          <ul>
            <li>
              <NavLink to={`/pets-usuario/${idUser}`}>Mis mascotas</NavLink>
            </li>
          </ul>
        </>)
        accountNavList.push()
      }
    };
    isAuthenticated();

    setAuthenticated(...navList);
  }, []);

  return (
    <BrowserRouter forceRefresh={true}>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
          </ul>

          {authenticated}

          <ul>
            <li>
              <NavLink to="/about-us">Nosotros</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        

        <div>
          <nav className="account">
            <ul className="log">
              <li className="log-item">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="log-item">
                <NavLink to="/register">Register</NavLink>
              </li>
              <li className="log-item">
                <NavLink
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  LogOut
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        </nav>
      </header>

      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reserve-appointment/:idPet" element={<AppointmentPerPet />} />
          <Route path="/pets-usuario/:idUser" element={<OwnerPets />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/onwer/:id" element={<OwnerDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-pet-appointments/:idPet" element={<AppointmentsPerPet />} />
          <Route path="/pet-register/:idUser" element={<AddPet />} />
          <Route path="/pet-details/:idPet" element={<PetDetails />} />
        
        </Routes>
      </section>

      {/* <footer className="footer">
        <strong>&copy;CopyRight</strong>
      </footer> */}
    </BrowserRouter>
  );
};
