import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserID } from "../action";

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserID(user_id));
}

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User_pic" />
      <div className="User_details">
        <p className="User_details-name">{name}</p>
        <p className="User_details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
