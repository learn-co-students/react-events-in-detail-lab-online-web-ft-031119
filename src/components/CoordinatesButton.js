// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    let coordinates = new Array();
    coordinates[0] = e.clientX;
    coordinates[1] = e.clientY;
    this.props.onReceiveCoordinates(coordinates);
  }
    render() {
      return (
        <button onClick={this.handleClick}></button>
      );
    }

}
