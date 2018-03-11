import React from "react";
import { render } from "react-dom";
import styled from 'styled-components';

import { Title } from "./title";
import { Subtitle } from "./subtitle";
import { News } from "./news";
import { Sidebar } from "./sidebar";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
`;

const Border = styled.div`
  border: 1px solid black;
`;

const Content = styled.div`
  display: block;
  border: 1px solid black;
`;

const App = () => (
  <Container>
    <Border>
      <Sidebar />
    </Border>
    <Content>
      <Title name="Emilee" />
      <Subtitle />
      <News />
    </Content>
  </Container>
);

render(<App />, document.getElementById("root"));
