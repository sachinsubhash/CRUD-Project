import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetNew from "./GetNew";
import ContactCard from './ContactCard'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { AccountCircle, Menu } from "@material-ui/icons";

function Read() {
  const [posts, setPosts] = React.useState(null);
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setPosts(response.data);
      console.log(posts);
    });
  }, []);
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/"><Menu style={{'font-size':'25px'}}/>< AccountCircle style={{'font-size':'45px','padding-right':'15px'}}/>Contact List</NavbarBrand>
        <Link style={{'border':'1px solid blue'}} className='btn' to='/create'>Add User</Link>
      </Navbar>
      <ContactCard />
    </div>
  );
}

export default Read;
