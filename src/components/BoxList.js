import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

import uuid from "uuid/v4";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(item) {
    let newItem = { ...item, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newItem]
    }));
  }

  removeBox(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => {
        return box.id !== id;
      })
    });
  }

  render() {
    // console.log(this.state.boxes);

    let boxes = this.state.boxes.map(box => {
      return (
        <Box
          removeBox={this.removeBox}
          key={box.id}
          id={box.id}
          height={box.height}
          width={box.width}
          color={box.color}
        />
      );
    });

    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
