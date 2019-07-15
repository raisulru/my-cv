import React from "react";
import { Tag } from "antd";
import { TitleBlock } from "../components";

const skill = ["Python", "JavaScript", "AWS", "Django", "Flask", "Node js", "Express JS", "Numpy", "Pandas", "Redis", "Design Pattern", "ELK", "Postgres", "Nginx", "Gunicorn", "Docker", "CI/CD"]

function Skills() {
  return (
    <div className="skills mb-30">
      <TitleBlock title="Skills" />
      {skill.map(skill => {
        return (
          <Tag key={skill} className="skill-tag">{skill}</Tag>
        )
      })}
    </div>
  );
}

export default Skills;
