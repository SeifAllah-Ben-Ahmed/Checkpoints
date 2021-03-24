import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
    return (
        <div className="App">
            <ProfilePhoto src="./Avatar.jpg" />
            <FullName name="Ben Ahmed Seif Allah" />
            <Address Address="39 rue fathel ben achour megrine checker" />
        </div>
    );
}

export default App;
