import React from "react";
import { Row, Col } from "antd";
import { TitleBlock } from "../components";

function SingleProject(props) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link} className="single-project">
      <div className="project-name">
        <img src={props.logo} alt="" className="logo" />
        <h4 className="name">{props.name}</h4>
      </div>
      <div className="desc">{props.description}</div>
      <div className="contribution">
        {/* <b>Contribution :</b> {props.contribution} */}
      </div>
    </a>
  );
}
function Projects() {
  return (
    <div className="worker-exprience mb-30">
      <TitleBlock title="Projects" />
      <Row gutter={16}>
  
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Kinship AI"
            logo="assets/images/kutumbita.png"
            link="https://kutumbita.com/"
            description="Micro service architecture, Enterprise level worker management, Connect with them, Surveys, Issues and HR services with Chatbot."
            // contribution="Managing and Maintaining full responsibilities of some micro services."
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="OMIS"
            logo="assets/images/omis.png"
            link="https://www.facebook.com/omis.bd/?__tn__=kCH-R&eid=ARAC1ey6_O_xkPKw4IbjlBbWGIaUaevIulkek7kNVWefO-Y0YyQZ1-h5ycoU0Kls4yURd-EDjwb26rS6&hc_ref=ARRmiqHUYdFE7DIX637db2B8MuIe5SY5JYUiBf8Yvyl_CAy-9iYXpKZGYhetPckL82o&fref=nf&__xts__[0]=68.ARAmvWiah3DkYCjPMZsTRXNDh63cBAAgEhXvr3B4Sz4p_X2Xr8Eg2B80c9RRjPd_JZedlTDf0-THNjfEIroP1HP_vueywne-c2pEpOOX5yC_jHWOp_GxFrGpMqzlwpn19QcjsNivJ4Pn98-TGuuw3vmiomOvhI7fYwdULx-5OvvvhbAdmQCAbHd9yz9hLFbfuJkuJ3wH8rALmj1hqfLFs20pL1bqagZA5ZutW390DhcDiOZn0L_eQoiNE7se-zU5Cv4WooqKOfjTvVD70VRZUcXkaVG4Lixor_0qm3BmfAWV_4lDLrxEQFVGeuh96oJ62eYtU0IdGg6-muux15PUhF1UpQ-FpGSoWwkTUekNwVSUntJ1pE2G7GLWOL5QSFO-WQJ4YOxdZxPzGth6ca-z5_k8Eoper4nQSDJV1WrsDx8Z1R6RMtnTcaj0CXZtGwzR_Ct-VYirKUGHeVn4T-FWGC8Ni1HWc9wH5AMluNCKzAc-G1giaTKzUnvqgA"
            description="A Online Medical Information System Enterprise SASS app for Pharmacies, Diagnostic centres and Hospitals."
            // contribution="Psd to html conversion with DOM manipulation"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            // name="Assignmenthero"
            logo="assets/images/assignmenthero.png"
            link="https://www.assignmenthero.com/"
            description="E-learning platform for students used in Melbourne, Australia."
            // contribution="Psd to html conversion with DOM manipulation"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Collabhero"
            logo="assets/images/collabhero.png"
            link="https://www.facebook.com/collabhero/"
            description="E-learning platform for students used in Melbourne, Australia."
            // contribution="Psd to html conversion with DOM manipulation"
          />
        </Col>
        <Col xs={24} md={12} xl={8} lg={12}>
          <SingleProject
            name="Stack Zoom"
            // logo="assets/images/pixels.png"
            // link="http://salmanrahman.com/projects/pixels/"
            description="A stack market statistics and analytics web app mainly used in European Countries."
            // contribution="Psd to html conversion with DOM manipulation"
          />
        </Col>
       
      </Row>
    </div>
  );
}

export default Projects;
