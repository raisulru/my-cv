import React from "react";
import { Timeline, List, Icon } from "antd";
import { TitleBlock } from "../components";
const kutumbitaData = [
  "Play an important role as a Full Stack Developer.",
  "Provide end to end solution architecture, code reviewer, clean code and best practice instructor.",
  "Managed and Maintained full responsibilities of some micro services."
];
const InterconnectionData = [
  "Developed and wrote end to end solutions with test according to instructions",
  "Trained up team on some technologies"
];
const oasisData = [
  "Wrote front end code",
  "trained up some team on front end development and python programming",
  "Discussed and executed marketing plan with team."
];

function SingleExprience(props) {
  return (
    <div className="single-exprience">
      <div className="top-bar">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
          className="company-name"
        >
          <h3>{props.companyName}</h3>
        </a>
        <h4 className="year">{props.year}</h4>
      </div>
      <h4>Software Engineer</h4>
      <div className="responsiblities">
        <List
          size="small"
          header={<p>Responsibilities : </p>}
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <Icon className="mx-10" type="check" /> {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
function WorkExprience() {
  return (
    <div className="worker-exprience mb-30">
      
      <TitleBlock title="Work Exprience" />
      <Timeline>
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience" />}>
          <SingleExprience
            link="https://kutumbita.com/"
            companyName="Kutumbita"
            year="OCT 2018 - Present"
            data={kutumbitaData}
          />
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience" />}>
          <SingleExprience
            link="http://www.interconnectionbd.com/"
            companyName="Interconnection LTD"
            year="JUL 2017 - JUN 2018"
            data={InterconnectionData}
          />
        </Timeline.Item>
        <Timeline.Item dot={<img src="assets/images/exprience.svg" style={{ height: "20px"}} alt="exprience" />}>
          <SingleExprience
            link="https://www.facebook.com/oasisitbd/"
            companyName="Oasis IT"
            year="OCT 2016 - JUN 2017"
            data={oasisData}
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default WorkExprience;
