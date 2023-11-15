import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarComp/Navbar";

function UserProfile() {
  const [userData, setUserData] = useState(null);

  const fetchUserInformation = async (username) => {
    try {
      const response = await fetch(`https://api.example.com/users/${username}`);
      const userData = await response.json();
      setUserData(userData);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching user information");
      setIsLoading(false);
      console.error("Error fetching user information:", error);
    }
  };

  useEffect(() => {
    const username = useParams().username;
    if (username) {
      fetchUserInformation(username);
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="userProfile">
        <img src={userData.profilePicture} alt="Profile Picture" />
        <h2>{userData.name}</h2>
        <p>Email: {userData.email}</p>
        <p>Bio: {userData.bio}</p>
      </div>
    </>
  );
}

export default UserProfile;
