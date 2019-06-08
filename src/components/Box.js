import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBox = this.handleRemoveBox.bind(this);
  }

  handleRemoveBox() {
    this.props.removeBox(this.props.id);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.props.color,
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
          }}
        />
        <div>
          <button onClick={this.handleRemoveBox}>
            Remove {this.props.color} Button
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
