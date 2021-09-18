import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Container,
  Button,
} from "reactstrap";
import { Assistant, PostAdd, Share } from "@material-ui/icons";
import history from "./History";
import { GlobalContext } from "./Context/GlobalState";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userName: "",
      email: "",
      isOpen: false,
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setToggle = () => {
    this.setState({
      isOpen: true,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/");
  };
  render() {
    const { name, userName, email } = this.state;
    return (
      <div className="create-user-page">
        <div>
        <Navbar>
        <NavbarBrand href="/">Contact List</NavbarBrand>
      </Navbar>
        </div>
        <Container style={{ "margin-top": "10px", marginRight: "10px" }}>
          <Row>
            <Col>
              <h1 style={{ "font-family": "Glory,sans-serif" }}>
                Connect with friends and the world around with you.
              </h1>
              <div style={{ marginTop: "50px" }}>
                <div style={{ marginBottom: "20px", "font-weight": "700" }}>
                  <PostAdd style={{ fill: "#80b0ff", MarginRight: "50px" }} />
                  See Photos and Updates
                  <span style={{ fontWeight: "400" }}>from friends</span>
                </div>
                <div style={{ marginBottom: "20px", "font-weight": "700" }}>
                  <Assistant style={{ fill: "#fa8fff" }} />
                  Share what's new
                  <span style={{ fontWeight: "400" }}>
                    in your life on your Timeline
                  </span>
                </div>
                <div style={{ "font-weight": "700" }}>
                  <Share style={{ fill: "#00c8ff" }} />
                  Find More
                  <span style={{ fontWeight: "400" }}>
                    of what you're looking for with Facebook Search
                  </span>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <h1 className="text-center">Create User</h1>
              <p>It's free and anyone can be added.</p>
              <Form
                style={{ width: "100%", padding: "10px 0px" }}
                onSubmit={this.submitHandler}
              >
                <FormGroup style={{ display: "flex", padding: "10px 0px" }}>
                  <Label style={{ "font-weight": "500", fontSize: "10px" }}>
                    Name
                  </Label>
                  <Input
                    style={{ height: "30px" }}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.changeHandler}
                    placeholder="Full Name" required
                  />
                </FormGroup>
                <FormGroup style={{ display: "flex", padding: "10px 0px" }}>
                  <Label style={{ "font-weight": "500", fontSize: "10px" }}>
                    User Name
                  </Label>
                  <Input
                    style={{ height: "30px" }}
                    value={userName}
                    type="text"
                    name="userName"
                    placeholder="Thanos"
                    onChange={this.changeHandler} required
                  />
                </FormGroup>
                <FormGroup style={{ display: "flex", padding: "10px 0px" }}>
                  <Label style={{ "font-weight": "500", fontSize: "10px" }}>
                    Email
                  </Label>
                  <Input
                    style={{ height: "30px" }}
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    placeholder="Example:abcd@efgh.com" required
                  />
                </FormGroup>
                <Button
                  style={{
                    alignItems: "center",
                    paddingRight: "10px",
                    marginLeft: "50px",
                    paddingLeft: "10px",
                    "background-color": "#4a8fff",
                    color: "white",
                    "font-weight": "700",
                  }}
                  type="submit"
                >
                  Create Profile
                </Button>
                <Link
                  style={{
                    alignItems: "center",
                    paddingRight: "10px",
                    marginLeft: "20px",
                    paddingRight: "20px",
                    "background-color": "#ffff",
                    color: "#4a8fff",
                    "font-weight": "700",
                  }}
                  to="/"
                  className="btn"
                >
                  Cancel
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Create;
