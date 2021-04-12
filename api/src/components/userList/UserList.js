import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../UserProfile/Profile";

function UserList() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data))

            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <header
                style={{
                    textAlign: "center",
                    backgroundColor: "rgba(57, 255, 189,0.5)",
                    color: "white",
                    padding: "20px",
                    position: "sticky",
                    top: "0",
                }}
            >
                <h1>API Checkpoint</h1>
            </header>
            {Data.map((user) => (
                <Profile userData={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;
