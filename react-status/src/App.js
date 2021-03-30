import React from "react";
import Profile from "./component/Profile";
import "./App.css";
import Time from "./component/Time";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.person = {
            fullName: "ben ahmed seif allah",
            bio:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum repellat possimus deleniti expedita omnis assumenda natus sapiente in laborum.",
            profession: "web developer",
            imgSrc:
                "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
        };
    }
    render() {
        return (
            <div className="App">
                <Time />
                <Profile
                    fullName={this.person.fullName}
                    bio={this.person.bio}
                    profession={this.person.profession}
                    imgSrc={this.person.imgSrc}
                />
            </div>
        );
    }
}

export default App;
