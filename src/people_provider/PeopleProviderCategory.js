import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import people from "../assets/drivers/people.json";
import categories from "../assets/drivers/categories.json";
import * as mat from "@mui/material";
import * as icon from "@mui/icons-material";
import "./peopleProvider.css";
// console.log(categories)
class PeopleProvider extends Component {
  render() {
    console.log(this.props.category);
    // get abbreivation from the category name
    let categorySymbol = categories.data.filter((el) => {
      return el.name === this.props.category;
    })[0].abbr;
    // console.log(categorySymbol);

    // get the student urls from the abbreivation names
    let students = people.data.filter(
      (el) => JSON.stringify(el.category) === JSON.stringify(categorySymbol)
    );

    return (
      <div
        className={`pplpro_bg ${
          categorySymbol === "sa"
            ? "cat1"
            : categorySymbol === "ec"
            ? "cat2"
            : categorySymbol === "ep"
            ? "cat3"
            : categorySymbol === "ch"
            ? "cat4"
            : categorySymbol === "hw"
            ? "cat5"
            : null
        }`}
      >
        <mat.Grid container>
          <mat.Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ display: "flex" }}
          >
            <mat.Grid
              item
              xs={12}
              alignItems="center"
              justifyContent="center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <mat.Paper
                className={`cat_content ${
                  categorySymbol === "sa"
                    ? "content1"
                    : categorySymbol === "ec"
                    ? "content2"
                    : categorySymbol === "ep"
                    ? "content3"
                    : categorySymbol === "ch"
                    ? "content4"
                    : categorySymbol === "hw"
                    ? "content5"
                    : null
                }`}
              >
                <mat.Grid container spacing={4}>
                  <mat.Grid item md={12} xs={12}>
                    <mat.Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      <h2>
                        <span className="back_cl">{this.props.category}</span>
                      </h2>
                    </mat.Grid>
                    <mat.Grid container justifyContent="center">
                      <p className="back_cl">{this.props.info}</p>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Grid>
              </mat.Paper>
            </mat.Grid>
          </mat.Grid>
        </mat.Grid>
      </div>
    );
  }
}

export default PeopleProvider;
