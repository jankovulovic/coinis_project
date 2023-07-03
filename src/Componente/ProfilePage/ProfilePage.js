import React from "react";
// import { useState, useMemo, useCallback, useContext } from "react";
// import { useDropzone } from "react-dropzone";
import classes from "./ProfilePage.module.css";
import Form from "../ProfilePage/Form/Form";
import img from "../../Assets/profileimage.png";

const ProfilePage = () => {
  // const [fileUrl, setFileUrl] = useState(null);
  return (
    <div className={classes.countainer}>
      <div className={classes.profile}>
        <div className={classes.profile_info}>
          <h1>Profile</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <hr></hr>
        </div>
        <div className={classes.profile_box}>
          <div className={classes.profile_box_img}>
            <img
              src={img}
              alt="profile upload"
              height={200}
              width={200}
              className={classes.profile_box_img_img}
            />
          </div>
          <div className={classes.profile_box_form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
