import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import classes from "./Menu.module.css";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button className={classes.menuButton} {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
