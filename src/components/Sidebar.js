import React, { Component } from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    current: "1"
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="main-sidebar">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-img"
              src="assets/images/logo.png"
              alt="Raisul"
            />
          </Link>
        </div>
        <div className="bio">
          <h2 className="name">Raisul Islam</h2>
          <h3 className="title">Software Engineer</h3>
        </div>
        <div className="btn-group">
          <a className="contact-btn" href="https://www.linkedin.com/in/raisul-islam-5729a8103/" target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" />
          </a>
          <a className="contact-btn" href="https://github.com/raisulru" target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
        </div>
        {/* <Menu
          onClick={this.handleClick}
          mode="inline"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="1">
            <a href="#link3">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#link2">About</a>
          </Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Skills</Menu.Item>
        </Menu> */}
        <div className="contact">
        <p>
            Khilkhet, Dhaka <br /> 01723864330 <br/> raisulru10@gmail.com
          </p>
        </div>
        
        <p>© Copyright ©2019 <br/> All rights reserved |</p>
      </div>
    );
  }
}

export default Sidebar;
