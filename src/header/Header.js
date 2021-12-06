import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
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
      open_drawer: false,
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
              onClick={() => {
                this.setState({ open_drawer: true });
              }}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <icon.Menu />
            </mat.IconButton>
            <mat.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img src={logo} alt="ASDwhite" height="45px"></img>
              </Link>
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
                <Link to="/">MAIN PAGE</Link>
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
        <mat.Drawer
          anchor="left"
          open={this.state.open_drawer}
          className="drawer"
          onClose={() => {
            this.setState({ open_drawer: false });
          }}
        >
          <ul>
            <li>
              <h4
                className="close_btn"
                onClick={() => {
                  this.setState({ open_drawer: false });
                }}
              >
                <icon.CloseOutlined />
              </h4>
            </li>
            <li>
              <h4
                onClick={() => {
                  this.setState({ open_drawer: false });
                }}
              >
                <Link to="/">main page</Link>
              </h4>
            </li>
            <li>
              <h4>undergraduate</h4>
            </li>
            <li>
              <h4>master of architecture</h4>
            </li>
          </ul>
        </mat.Drawer>
      </mat.Box>

      /* HEADER - END */
    );
  }
}
export default withRouter(Header);
