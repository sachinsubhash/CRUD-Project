import React, { Component } from 'react'
import axios from "axios";
import history from "./History";
import {Form, FormGroup, Input, Label, FormText, Button } from 'reactstrap'

export class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      userName:'',
      email:''
    }
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/users',this.state)
          .then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })
          history.push('/')
  }
  render() {
    const { name, userName, email } = this.state
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label>Name</Label>
            <Input type='text' name='name' value={name} onChange={this.changeHandler} />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input type='text' name='userName' value={userName} onChange={this.changeHandler} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type='text' name='email' value={email} onChange={this.changeHandler} />
          </FormGroup>
          <Button type='submit'>Create User</Button>
        </Form>
      </div>
    )
  }
}

export default Update
