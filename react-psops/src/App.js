import "./App.css";
import Profile from "./profile/Profile";

function App() {
    return (
        <div className="App">
            <Profile
                fullName="ben ahmed seif allah"
                bio="this iis my bio"
                profession="web developer"
            >
                <img
                    height="50%"
                    src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
                    alt="profile img"
                />
            </Profile>
        </div>
    );
}

export default App;
