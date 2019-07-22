import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        const xy = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(xy)
    }

    render() {
        return (
            <button onClick={this.handleClick} />
        )
    }
}