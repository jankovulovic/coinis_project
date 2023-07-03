import React from "react";
import classes from "./Form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const Form = () => {
  return (
    <div className={classes.Form}>
      <div className={classes.Form_box}>
        <form>
          <div className={classes.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Full Name"
              className={classes.Form_box_input_userName}
            />
          </div>
          <div className={classes.Form_box_input}>
            <label htmlFor="email"></label>
            <div className={classes.Form_box_input_box}>
              <div className={classes.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder=" Markomarkovic@gmail.com" />
            </div>
          </div>
          <div className={classes.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="something about yourself in few worlds"
            ></textarea>
          </div>

          <div className={classes.Form_box_input_social}>
            <div className={classes.Form_box_input}>
              <label htmlFor="facebook"></label>
              <div className={classes.Form_box_input_box}>
                <div className={classes.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder=" Marko Markovic" />
              </div>
            </div>
          </div>
          <div className={classes.Form_box_input_social}>
            <div className={classes.Form_box_input}>
              <label htmlFor="Twitter"></label>
              <div className={classes.Form_box_input_box}>
                <div className={classes.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder=" Marko Markovic" />
              </div>
            </div>
          </div>
          <div className={classes.Form_box_input_social}>
            <div className={classes.Form_box_input}>
              <label htmlFor="Instagram"></label>
              <div className={classes.Form_box_input_box}>
                <div className={classes.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder=" Marko Markovic" />
              </div>
            </div>
          </div>
          <div className={classes.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={classes.Form_box_input_box}>
              <div className={classes.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" />
              <div className={classes.Form_box_input_box_icon}></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
