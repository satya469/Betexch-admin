import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { header, body, children } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{header}</h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
    );
  }
}
