import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginRegisterPage/Login";
import Register from "./pages/LoginRegisterPage/Register";
import MySongs from "./pages/UsersSongsPage/MySongs";
import OtherSongs from "./pages/UsersSongsPage/OtherSongs";
import MakeSongs from "./pages/MakeSongsPage/MakeSongs";
import UsersProfiles from "./pages/UsersProfilesPage/UsersProfiles";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="Log In" element={<Login></Login>} />
        <Route path="Sign Up" element={<Register></Register>} />
        <Route path="My Songs" element={<MySongs></MySongs>} />
        <Route path="Users songs" element={<OtherSongs></OtherSongs>} />
        <Route path="Make songs" element={<MakeSongs></MakeSongs>} />
        <Route
          path="Users Profiles"
          element={<UsersProfiles></UsersProfiles>}
        />
      </Routes>
    </div>
  );
}

export default App;
