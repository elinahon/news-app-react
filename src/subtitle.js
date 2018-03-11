import React from 'react';

export class Subtitle extends React.Component {
 state = {
   searchText: ""
 } 
 handleChange = (evt) => {
   this.setState({searchText: evt.target.value})
 }
  render() {
    return (
      <div>
        <div>
          <input
          type="text"
          value={this.state.searchText}
          onChange={this.handleChange}
          />
        </div>
        <h2>
        World | Tech | State | Local | Your News
        </h2>
        {this.state.searchText}
      </div>
    );
  }
}