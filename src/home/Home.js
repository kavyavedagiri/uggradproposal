import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import categories from "../assets/drivers/categories.json";
import * as mat from "@mui/material";

import * as icon from "@mui/icons-material";
import "./home.css";
class Home extends Component {
  render() {
    if (categories) {
      return (
        <div className="home_bg">
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
          <mat.Grid container id="about">
            <mat.Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ display: "flex" }}
            >
              <mat.Grid
                item
                xs={11}
                alignItems="center"
                justifyContent="center"
              >
                <mat.Paper className="home_content">
                  <mat.Grid container spacing={4}>
                    <mat.Grid item md={12} xs={12} className="iframe_wrapper">
                      <iframe
                        title="slideshow"
                        id="ytplayer"
                        type="text/html"
                        width="100%"
                        height="100%"
                        src={categories.about.asset}
                        frameBorder={0}
                        allowFullScreen
                      />
                    </mat.Grid>
                    <mat.Grid
                      item
                      md={12}
                      xs={12}
                      style={{ color: "#ffffff", textAlign: "center" }}
                    >
                      <p> {categories.about.content}</p>
                      <Link
                        to={"/interviews"}
                        style={{ textDecoration: "underline" }}
                      >
                        INTERVIEWS{" "}
                        <icon.ArrowForwardIos sx={{ fontSize: 14 }} />
                      </Link>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Paper>
              </mat.Grid>
            </mat.Grid>
          </mat.Grid>
          <mat.Grid container className="home_bg" justifyContent="center">
            <mat.Grid container style={{ display: "flex" }} id="main_menu">
              <mat.Grid
                container
                className="home_bg"
                style={{ minHeight: "460px", margin: "0px 13px" }}
              >
                <mat.Grid container>
                  <mat.Grid
                    item
                    md={4}
                    xs={6}
                    alignItems="center"
                    sx={{ justifyContent: { xs: "center", md: "right" } }}
                    className="island_sx one scale"
                  >
                    <mat.Button
                      variant="contained"
                      size="small"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[0].url}`}>
                        {categories.data[0].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                  <mat.Grid
                    item
                    md={6}
                    xs={6}
                    alignItems="center"
                    justifyContent="center"
                    className="island_sx two scale"
                  >
                    <mat.Button
                      size="small"
                      variant="contained"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[1].url}`}>
                        {categories.data[1].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                  <mat.Grid
                    item
                    xs={3}
                    md={3}
                    sx={{ justifyContent: { xs: "center", md: "left" } }}
                    alignItems="center"
                    className="island_sx three"
                  >
                    <mat.Button
                      size="small"
                      variant="contained"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[2].url}`}>
                        {categories.data[2].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                  <mat.Grid item md={6} xs={6} className="nxt_stop scale">
                    <img
                      width="100%"
                      style={{ objectFit: "contain" }}
                      src={
                        require(`../assets/images/home/NEXT_STOP.webp`).default
                      }
                      sx={{ display: { xs: "none", md: "revert" } }}
                      alt="NEXT_STOP"
                    />
                    <h4
                      className="header_title"
                      style={{ textAlign: "center" }}
                    >
                      b.sc gradshow
                    </h4>
                  </mat.Grid>
                  <mat.Grid
                    item
                    xs={3}
                    md={3}
                    alignItems="center"
                    sx={{ justifyContent: { xs: "center", md: "right" } }}
                    className="island_sx four"
                  >
                    <mat.Button
                      size="small"
                      variant="contained"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[3].url}`}>
                        {categories.data[3].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                  <mat.Grid
                    item
                    md={4}
                    xs={6}
                    alignItems="center"
                    sx={{ justifyContent: { xs: "center", md: "right" } }}
                    className="island_sx five scale "
                  >
                    <mat.Button
                      variant="contained"
                      size="small"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[4].url}`}>
                        {categories.data[4].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                  <mat.Grid
                    item
                    md={6}
                    xs={6}
                    alignItems="center"
                    justifyContent="center"
                    className="island_sx six scale"
                  >
                    <mat.Button
                      size="small"
                      variant="contained"
                      className="home_btn"
                    >
                      <Link to={`/themes/${categories.data[5].url}`}>
                        {categories.data[5].name}
                      </Link>{" "}
                    </mat.Button>
                  </mat.Grid>
                </mat.Grid>
              </mat.Grid>
            </mat.Grid>
          </mat.Grid>
          <mat.Grid container id="message">
            <mat.Grid item md={4} xs={12} className="message">
              <img
                height="430px"
                width="100%"
                style={{ objectFit: "contain" }}
                src={require(`../assets/images/home/faculty.jpg`).default}
                alt="faculty"
              />
            </mat.Grid>

            <mat.Grid item md={8} xs={12} className="message nxt_stop">
              <h2 style={{ textAlign: "justify" }}>
                <span>{categories.message.title}</span>
              </h2>
              <p style={{ textAlign: "justify" }}>
                {categories.message.content}
              </p>
            </mat.Grid>
          </mat.Grid>
        </div>
      );
    }
  }
}

export default Home;
