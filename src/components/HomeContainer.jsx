import { Header } from "./Header";
import { Content } from "./Content";
import { SkillsContainer } from "./SkillsContainer";
import { ProjectContainer } from "./ProjectContainer";
import { FooterContainer } from "./FooterContainer";
import React, { Fragment } from "react";

const HomeContainer = () => {
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

export default HomeContainer;
