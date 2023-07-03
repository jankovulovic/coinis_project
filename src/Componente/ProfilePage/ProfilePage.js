import React, { useState } from "react";
import classes from "./ProfilePage.module.css";
import Form from "../ProfilePage/Form/Form";
import img from "../../Assets/profileimage.png";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Dodajte ostala polja podataka koja želite sačuvati
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveData = () => {
    // Ovde možete izvršiti logiku za čuvanje podataka
    console.log("Podaci su sačuvani:", formData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.profile_info}>
          <h1>Profile</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <hr />
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
            <Form formData={formData} onInputChange={handleInputChange} />
            <button className={classes.button} onClick={handleSaveData}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
