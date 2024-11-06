import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./UserDescription.css";

const UserDescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <p>User data not available.</p>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="title">Robo Friends</h1>

      <div className="user-description-card">
        <Button name="Home" onClick={handleBack} className="home-btn" />

        <img
          src={`https://robohash.org/${user.login.uuid}?size=150x150`}
          alt="Robot avatar"
        />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          {user.name.first} {user.name.last} is a robot in {user.location.state}{" "}
          registered on {user.registered.date}{" "}
        </p>
      </div>
    </div>
  );
};

export default UserDescription;
