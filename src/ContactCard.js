import axios from "axios";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./GetNew.css";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid'
import {
  Table,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { Edit } from "@material-ui/icons";

export default class GetNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({ persons: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate() {
    console.log("Hello User!");
  }
  deleteProfile(persons) {
    console.log(persons)
  }

  render() {
    const columns = [
      { field:'slNo',headerName:'Serial Number',width:'70' },
      {field:'name',headerName:'Name',width:'130'},
      {field:'userName',headerName:'UserName',width:'130'},
      {field:'email',headerName:'Email',width:'130'},
      {field:'website',headerName:'Website',width:'130'}
    ]
    return (
      <div style={{ display: "flex" }} className="contact-card">
        <Table hover>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Location</th>
              <th>username</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.persons.map((person, index) => (
            <tbody key={person.id}>
              <th className="text-center">{person.id}</th>
              <td>
                {person.name}
                <Edit className="edit-btn" />
              </td>
              <td>Los Angeles,United States America</td>
              <td>
                {person.username}
                <Edit className="edit-btn" />
              </td>
              <td>
                {person.email}
                <Edit className="edit-btn" />
              </td>
              <td>
                {person.website}
                <Edit className="edit-btn" />
              </td>
              <td>
                <UncontrolledDropdown className="btn btn-warning">
                  <DropdownToggle
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      fontSize: "16px",
                      fontWeight: "700",
                      border: "none",
                    }}
                    className="action-btn"
                  >
                    Actions
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className="text-center">
                      <Link to="/update" style={{ width: "40px" }}>
                        Edit
                      </Link>
                    </DropdownItem>
                    <DropdownItem className="text-center">
                      <Button onClick={this.deleteProfile(person.id)}>Delete</Button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}
