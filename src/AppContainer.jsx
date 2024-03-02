import React, { Fragment } from "react";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { SkillsContainer } from "./components/SkillsContainer";
import { ProjectContainer } from "./components/ProjectContainer";
import { FooterContainer } from "./components/FooterContainer";
const AppContainer = () => {
  return (
    <Fragment>
      <Header></Header>
      <Content></Content>
      <SkillsContainer></SkillsContainer>
      <ProjectContainer></ProjectContainer>
      <FooterContainer></FooterContainer>
    </Fragment>
  );
};

export default AppContainer;
