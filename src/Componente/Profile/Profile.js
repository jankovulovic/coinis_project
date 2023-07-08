import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import profile1 from "../../Assets/profile1.jpg";
import profile2 from "../../Assets/profile2.jpg";
import profile3 from "../../Assets/profile3.jpg";
import profile4 from "../../Assets/profile4.jpg";
import profile5 from "../../Assets/profile5.jpg";
import profile6 from "../../Assets/profile6.jpg";
import profile7 from "../../Assets/profile7.jpg";
import profile8 from "../../Assets/profile8.jpg";
import profile9 from "../../Assets/profile9.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [randomImage, setRandomImage] = useState(null);
  const [userData, setUserData] = useState(null);
  //   const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    const profileImages = [
      profile1,
      profile2,
      profile3,
      profile4,
      profile5,
      profile6,
      profile7,
      profile8,
      profile9,
    ];

    const randomIndex = Math.floor(Math.random() * profileImages.length);
    const selectedImage = profileImages[randomIndex];
    setRandomImage(selectedImage);
  }, []);

  useEffect(() => {
    // Fetch user data
    axios
      .get("http://127.0.0.1:8000/api/user/")
      .then((response) => {
        console.log(response);
        const userData = response.data;
        setUserData(userData);

        // axios
        //   .get(
        //     `http://127.0.0.1:8000/api/v2/songs/0/?page_size=1000&user_id=${1}`
        //   )
        //   .then((response) => {
        //     const songsData = response.data;
        //     setSongsData(songsData);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching songs data:", error);
        //   });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <div>Profile Informations</div>
      {userData && (
        <div>
          <img
            src={randomImage}
            alt="Profile"
            className={classes.profileImage}
          />
          <div>
            <div>Email: testtest@gmail.com{userData.email}</div>
            <div>Username: Test Test{userData.username}</div>
            <div>Songs added: 3 </div>
          </div>
        </div>
      )}
      <div>List of Songs added:</div>
      <div>
        <Link className={classes.songFlex} to="/">
          <div className={classes.imgDiv}>
            <img src={profile1} alt="Profile man" />
          </div>
          <div className={classes.songInfo}>
            <div className={classes.songTitle}>
              <b>Author</b>: testong author
            </div>
            <div className={classes.songTitle}>
              <b>Name</b>: Title test
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Profile;

// {
//   /* {songsData.map((song) => (
//           <div key={song.song_id}>
//             <img src={song.author_link} alt={song.author_name} />
//             <div>Author: {song.author_name}</div>
//             <div>Title: {song.title}</div>
//           </div>
//         ))} */
// }
