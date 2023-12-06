import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarComp/Navbar";

function UserProfile({username, description, profileImage, userFollower, userFollowing, PostsNumber, genres, songs}) {
  return (
    <>
      <Navbar></Navbar>
      <div className="userProfile">
        <img></img>
        <h1></h1>
        <div className="follow-infos">
          <h3 className="follower"></h3>
          <h3 className="following"></h3>
          <h3 className="posts"></h3>
        </div>
        <p></p>
        <div className="genres">
          {genres.map((genre, index))}
        </div>
        <div className="my-songs">
          {songs.map((song, index))}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
