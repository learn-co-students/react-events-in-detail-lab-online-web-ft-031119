// Code DelayedButton Component Here
import React, { Component } from 'react';
class DelayedButton extends Component {
    state = {  }

    handleEvents = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleEvents}>World</button>
            </div>
         );
    }
}
 
export default DelayedButton;