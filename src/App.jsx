import { useState } from "react";
import Header from "./components/Header";
import { Content } from "./components/Content";
import { SkillsContainer } from "./components/SkillsContainer";
import { ProjectContainer } from "./components/ProjectContainer";
import { FooterContainer } from "./components/FooterContainer";
function App() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <SkillsContainer></SkillsContainer>
      <ProjectContainer></ProjectContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
