import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../components/NavbarComp/Navbar";
import GenresFilter from "../../components/GenresFilterComp/GenresFilter";

import person_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

function Register() {
  const [filteredGenres, setFilteredGenres] = useState([]);

  return (
    <div className="login-page">
      <Navbar></Navbar>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input type="person" placeholder="Username" />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>

          <h2>Music Genres:</h2>
          <GenresFilter
            setFilteredGenres={setFilteredGenres}
            initialChecked={false}
          ></GenresFilter>
        </div>

        <div className="submit-container">
          <div className="submit">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Register;
