import { createBrowserHistory } from 'history';

export default  createBrowserHistory();

{*/import React from "react";
import { Link } from "react-router-dom";
import ContactListNav from "./ContactListNav";
import {
  Button,
  Dialog,
  DialogAcions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
} from "@mui/material";
import { Input, Navbar, NavbarBrand, Label } from "reactstrap";
import { AccountCircle, Menu } from "@material-ui/icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Update() {
  return (
    <div>
      <h1>Personal Information</h1>
      <div style={{display:'flex'}}>
        <Box>
          <TextField label="First Name" textarea="example" />
          <TextField label="Last Name" textarea="example" />
        </Box>
      </div>
      <div>
        <Label> Email </Label>
        <Box>
          <TextField label='Email'/>
        </Box>
        <TextField />
      </div>
    </div>
  );
}

export default Update;
/*}
