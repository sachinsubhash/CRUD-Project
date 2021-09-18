import axios from "axios";
import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  handleChange = (event) => {
      this.setState({
        id: event.target.value,
      });
    };

    // goBack = () => {
    //   this.props.history.push('/')
    // }
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ID:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}