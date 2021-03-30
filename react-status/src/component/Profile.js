import React from "react";
import { useState } from "react";

const Profile = ({ imgSrc, profession, fullName, bio }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button
                style={{ padding: "10px 20px" }}
                onClick={() => setShow(!show)}
            >
                {show ? "hide" : "show"}
            </button>
            {show ? (
                <div>
                    <img src={imgSrc} alt="imageProfile" />
                    <h1> {fullName} </h1>
                    <h2> {profession} </h2>
                    <p> {bio} </p>
                </div>
            ) : null}
        </div>
    );
};

export default Profile;
