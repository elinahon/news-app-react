import React from "react";

export class Title extends React.Component {
  render() {
    return <h1>Welcome back, {this.props.name}!</h1>;
  }
}
