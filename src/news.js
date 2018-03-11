import React from "react";
import styled from 'styled-components';

const Borderss = styled.div`
  border-top: 1px solid black;
`;

export class News extends React.Component {
  render() {
    return (
      <div>
        <Borderss>
          <p>Something</p>
          <img alt="image"/>
        </Borderss>
        <Borderss>
          <p>Other Thing</p>
          <img alt="image"/>
        </Borderss>
        <Borderss>
          <p>Blah</p>
          <img alt="image"/>
        </Borderss>
        <Borderss>
          <p>???</p>
          <img alt="image"/>
        </Borderss>
      </div>
    );
  }
}
