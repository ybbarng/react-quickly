import React, { Component } from 'react';

class Link extends Component {
  render() {
    const url = this.props.label
      .toLowerCase()
      .trim()
      .replace(' ', '-');

    return (
      <div>
        <a href={url}>
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default Link;
