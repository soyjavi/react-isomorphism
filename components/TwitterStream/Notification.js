import React from 'react';
// require('./Notification.css')

export default class Notification extends React.Component {
  render() {
    return (
      <p className='notification'>
        Hey! There are {this.props.count} new tweets!
        <a href="#top" onClick={this.props.onClick}>Click here to see them.</a>
      </p>
    )
  }
}
