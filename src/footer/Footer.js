import React, { Component } from "react";
import * as mat from "@mui/material";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <mat.Grid
        container
        spacing={6}
        style={{ background: "#000", marginTop: "auto" }}
      >
        <mat.Grid item md={6} xs={12}>
          <mat.Grid container className="footer_links">
            <ul>
              <li>Learn more:</li>
              <li>
                <h4>
                  <span className="back_cl">PREVIOUS GRADSHOWS</span>
                </h4>
              </li>
              <li>
                <h4>
                  <span className="back_cl"> ASD Website</span>
                </h4>
              </li>
              <li>
                <h4>
                  <span className="back_cl">SUTD Website</span>
                </h4>
              </li>
            </ul>
          </mat.Grid>
        </mat.Grid>
        <mat.Grid item md={6} xs={12}>
          <mat.Grid
            container
            justifyContent="center"
            className="footer_sponsors"
          >
            <ul>
              <li> Our Sponsors:</li>
              <li>
                <mat.Grid container>
                  <mat.Grid item md={3}>
                    <img
                      src={
                        require("../assets/images/home/LogoSponsor.png").default
                      }
                      alt="logo sponsor"
                      width="60px"
                    />
                  </mat.Grid>
                  <mat.Grid item md={9}>
                    {/*PARTNERS LOGO  */}
                  </mat.Grid>
                </mat.Grid>
              </li>
            </ul>
          </mat.Grid>
        </mat.Grid>

        <mat.Grid
          item
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          © {new Date().getFullYear()} by SUTD ASD
        </mat.Grid>
      </mat.Grid>
    );
  }
}
