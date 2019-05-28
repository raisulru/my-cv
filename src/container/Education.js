import React from "react";
import { Timeline } from "antd";
import { TitleBlock } from "../components";

function Education() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Education" />
      <Timeline>
        <Timeline.Item dot={<img src="assets/images/education.svg" style={{ height: "20px"}} alt="education icon" />}>
          <h4>B.Sc. Engineering (2012-2015)</h4>
          <p>University of Rajshahi</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default Education;
