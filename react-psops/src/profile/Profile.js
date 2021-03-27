import React from "react";
import propTypes from "prop-types";

const Profile = ({ profession, bio, fullName, children }) => {
    const inlineStyle = {
        color: "blue",
        display: "flex",
        margin: "5px",
        alignItems: "center",
        justifyContent: "center",
        whidth: "100%",
        height: "100vh",
    };
    const handleName = () => {
        return alert(fullName);
    };
    return (
        <div style={inlineStyle}>
            {children}
            <div>
                <h1>{fullName}</h1>
                <h2>{bio}</h2>
                <h3>{profession}</h3>
                <button onClick={handleName}> handleName </button>
            </div>
        </div>
    );
};

Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
};

export default Profile;
