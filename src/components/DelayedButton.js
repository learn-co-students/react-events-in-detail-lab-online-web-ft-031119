import React from'react';

class DelayedButton extends React.Component {

click= event => {
  event.persist();
   setTimeout(() => {
     this.props.onDelayedClick(event);
   }, this.props.delay);
 };




  render(){
    return(
      <button
        onClick= {this.click}>Click</button>
    )
  }
}

export default DelayedButton;
