import React from "react";
import { Tag } from "antd";
import { TitleBlock } from "../components";

const skill = ["Deep Learning", "Classification", "Regression", "ANN", "CNN", "RNN", "LSTM", "NLTK", "Chatbot", "NLP", " Data analysis", "Data Visualisation"]

function StudyAndRnD() {
  return (
    <div className="skills mb-30">
      <TitleBlock title="Study and RnD" />
      {skill.map(skill => {
        return (
          <Tag key={skill} className="skill-tag">{skill}</Tag>
        )
      })}
    </div>
  );
}

export default StudyAndRnD;
