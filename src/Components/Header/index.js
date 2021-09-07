import React from "react";

import { Header, Title, Strong, Subtitle, TextWrapper } from "./styles";

import { withRouter } from "react-router";

const HeaderMenu = props => {
  return (
    <Header>
      <TextWrapper>
        <Title>
          Minha <Strong>Semana</Strong>
        </Title>
        <Subtitle>
          Previsões meteorológicas de acordo com a sua localidade
        </Subtitle>
      </TextWrapper>
    </Header>
  );
};

export default withRouter(HeaderMenu);
