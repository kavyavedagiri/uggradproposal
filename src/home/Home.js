import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import categories from "../assets/drivers/categories.json";
import * as mat from "@mui/material";
import "./home.css";
class Home extends Component {
  render() {
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
        {/* BUTTONS - START */}
        <mat.Grid container style={{ display: "flex" }} id="main_menu">
          <mat.Grid container alignItems="center" justifyContent="center">
            <mat.Grid item>
              <h4 className="header_title back_cl">b.sc gradshow</h4>
            </mat.Grid>
          </mat.Grid>
          <mat.Grid container alignItems="center" justifyContent="center">
            <mat.Grid item alignItems="center" justifyContent="center">
              <h1 className="back_cl">next stop</h1>
            </mat.Grid>
          </mat.Grid>
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
                className="island_sx one"
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
                md={4}
                xs={6}
                alignItems="center"
                justifyContent="center"
                className="island_sx two"
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
                xs={12}
                md={4}
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
              <mat.Grid
                item
                xs={6}
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
                xs={6}
                alignItems="center"
                sx={{ justifyContent: { xs: "center", md: "left" } }}
                className="island_sx five"
              >
                <mat.Button
                  size="small"
                  variant="contained"
                  className="home_btn"
                >
                  <Link to={`/themes/${categories.data[4].url}`}>
                    {categories.data[4].name}
                  </Link>{" "}
                </mat.Button>
              </mat.Grid>
            </mat.Grid>
          </mat.Grid>
        </mat.Grid>
        {/* BUTTONS - END */}
        {/* VIDEO - START */}
        <mat.Grid container id="about">
          <mat.Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <mat.Grid item xs={11} alignItems="center" justifyContent="center">
              <mat.Paper className="home_content">
                <mat.Grid container spacing={4}>
                  <mat.Grid item md={8} xs={12}>
                    <iframe
                      title="slideshow"
                      id="ytplayer"
                      type="text/html"
                      width="100%"
                      height="100%"
                      src={categories.about.asset}
                      frameborder="0"
                      allowfullscreen
                    />
                  </mat.Grid>
                  <mat.Grid
                    item
                    md={4}
                    xs={12}
                    sx={{ display: "flex", flexDirection: "column" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <mat.Grid container>
                      <h2>
                        <span className="back_cl">
                          {" "}
                          {categories.about.title}
                        </span>
                      </h2>
                    </mat.Grid>
                    <mat.Grid container justifyContent="center">
                      <p className="back_cl"> {categories.about.content}</p>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Grid>
              </mat.Paper>
            </mat.Grid>
          </mat.Grid>
        </mat.Grid>
        {/* VIDEO - END */}
        {/* MESSAGE - START */}
        <mat.Grid container id="message">
          <mat.Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <mat.Grid item xs={11} alignItems="center" justifyContent="center">
              <mat.Paper className="home_content">
                <mat.Grid container spacing={4}>
                  <mat.Grid
                    item
                    md={4}
                    xs={12}
                    sx={{ display: "flex" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      width="100%"
                      src={
                        require(`../assets/images/${categories.message.asset}`)
                          .default
                      }
                      alt="faculty"
                    />
                  </mat.Grid>
                  <mat.Grid
                    item
                    md={8}
                    xs={12}
                    sx={{ display: "flex", flexDirection: "column" }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <mat.Grid container>
                      {" "}
                      <h2>
                        {" "}
                        <span className="back_cl">
                          {categories.message.title}
                        </span>
                      </h2>
                    </mat.Grid>
                    <mat.Grid container justifyContent="center">
                      <p className="back_cl">{categories.message.content}</p>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Grid>
              </mat.Paper>
            </mat.Grid>
          </mat.Grid>
        </mat.Grid>

        {/* MESSAGE - END */}
      </div>
    );
  }
}

export default Home;
