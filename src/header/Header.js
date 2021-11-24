import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as mat from "@mui/material";
import * as icon from "@mui/icons-material";
import "./header.css";
// importing images
import logo from "../assets/images/home/LogoASDwhite.png";
import compass from "../assets/images/home/compass.png";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      compass_style: {
        display: "none",
      },
    };
  }
  render() {
    return (
      /* HEADER - START */
      <mat.Box sx={{ flexGrow: 1 }}>
        <mat.AppBar
          position="fixed"
          color="transparent"
          sx={{ boxShadow: 0 }}
          elevation={0}
        >
          <mat.Toolbar>
            <mat.IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <icon.Menu />
            </mat.IconButton>
            <mat.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="ASDwhite" height="45px"></img>
            </mat.Typography>
            <mat.Button
              color="inherit"
              onClick={() => this.props.history.goBack()}
            >
              Exit
            </mat.Button>
          </mat.Toolbar>
        </mat.AppBar>
        <div
          style={this.state.compass_style}
          className="compass_backdrop"
          onClick={(e) => {
            this.setState({ compass_style: { display: "none" } });
          }}
        ></div>
        <mat.Box
          sx={{ display: { xs: "none", md: "block" } }}
          className="compass"
        >
          <img
            src={compass}
            alt="compass"
            onClick={(e) => {
              this.setState({ compass_style: { display: "block" } });
            }}
          />
          <ul style={this.state.compass_style}>
            <li>
              <h4>
                <a href="/">MAIN PAGE</a>
              </h4>
            </li>
            <li>
              <h4>undergraduate</h4>
            </li>
            <li>
              <h4>master of architecture</h4>
            </li>
          </ul>
        </mat.Box>
        <mat.Box
          sx={{ display: { xs: "none", md: "block" } }}
          className="landing_menu"
        >
          <ul>
            <li>
              <h4>
                {" "}
                <a href="#main_menu">MAIN PAGE</a>
              </h4>
            </li>
            <li>
              <h4>
                <a href="#about">about</a>
              </h4>
            </li>
            <li>
              <h4>
                <a href="#message">message</a>
              </h4>
            </li>
          </ul>
        </mat.Box>
      </mat.Box>
      /* HEADER - END */
    );
  }
}
export default withRouter(Header);
