import React from 'react';
import styled from 'styled-components';

export class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <img alt="image here"/>
        <p> Profile--will be clickable </p>
        <Threads />
      </div>
    );
  }
}

const Borders = styled.div`
  border-top: 1px solid black;
`;

export class Threads extends React.Component {
  render () {
    const threads = [{title:"Thread cool", updates:4}, {title:"Thread okay", updates:3}, {title:"Thread wow!", updates:5}, {title:"Thread HOT!!", updates:8}, {title:"Thread meh", updates:1}]
    const display = threads.sort((a,b) => a.updates > b.updates ? -1 : 1);
    const map = threads.map(dataPoint => {
       return(
         <Borders>
          <div>{dataPoint.title} {dataPoint.updates}</div>
        </Borders>
       )
      });
    return (map);
  }
}