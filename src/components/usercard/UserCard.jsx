import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleDescriptionClick = () => {
    navigate(`/user/${user.login.uuid}`, { state: { user } });
  };

  return (
    <div className="user-card">
      <img
        src={`https://robohash.org/${user.login.uuid}?size=150x150`}
        alt="Robot avatar"
      />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>{user.email}</p>
      <button className="description-btn" onClick={handleDescriptionClick}>
        Description
      </button>
    </div>
  );
};

export default UserCard;
