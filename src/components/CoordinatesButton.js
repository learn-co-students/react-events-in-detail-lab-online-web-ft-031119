// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    state = {  }

    coordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.coordinates}>Hello</button>
            </div>
         );
    }
}
 
export default CoordinatesButton;