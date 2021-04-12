import React from "react";
import "./Profile.css";
const Profile = ({ userData }) => {
    return (
        <div className="user">
            <div className="avatar">{userData.username[1].toUpperCase()}</div>
            <div className="info">
                <h1>{userData.name}</h1>
                <h4> Phone: {userData.phone}</h4>
                <h4>Web: {userData.website}</h4>
            </div>
        </div>
    );
};

export default Profile;
