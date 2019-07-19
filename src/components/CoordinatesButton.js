import React from'react';

class CoordinatesButton extends React.Component {

OnCoordinatesButton= event => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY]);

}





  render(){
    return(
      <button
        onClick= {this.OnCoordinatesButton}>Coords</button>
    )
  }
}

export default CoordinatesButton;
