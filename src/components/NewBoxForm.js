import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBox(this.state);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height:</label>
        <input
          name="height"
          type="text"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="width"> Width: </label>
        <input
          name="width"
          type="text"
          onChange={this.handleChange}
          value={this.state.width}
        />
        <br />
        <label htmlFor="color"> backgroundColor: </label>
        <input
          name="color"
          type="text"
          value={this.state.color}
          onChange={this.handleChange}
        />{" "}
        <br /> <br />
        <button type="submit">Add a new Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
