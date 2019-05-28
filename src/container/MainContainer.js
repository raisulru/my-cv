import React, { Component } from "react";
import { Summary, WorkExprience, Projects, Education, Skills, StudyAndRnD } from "./";

export class MainContainer extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content-body">
          <Summary />
          <WorkExprience />
          <Projects />
          <Skills />
          <StudyAndRnD />
          <Education />
          
        </div>
      </div>
    );
  }
}

export default MainContainer;
