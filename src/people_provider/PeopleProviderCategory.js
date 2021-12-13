import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import people from "../assets/drivers/people.json";
import categories from "../assets/drivers/categories.json";
import * as mat from "@mui/material";
import "./peopleProvider.css";
class PeopleProvider extends Component {
  constructor() {
    super();
    this.state = {
      open_category: false,
    };
  }
  render() {
    // get abbreivation from the category name
    let categorySymbol = categories.data.filter((el) => {
      return el.name === this.props.category;
    })[0].abbr;

    // get the student urls from the abbreivation names
    let students = people.data.filter(
      (el) => JSON.stringify(el.category) === JSON.stringify(categorySymbol)
    );
    // filter url
    var all_url = [];
    categories.data.map((cat) => {
      return all_url.push(cat.url);
    });
    var current_url = [this.props.island_info.url];
    var filter_url = all_url.filter((x) => !current_url.includes(x));

    // filter name
    var all_name = [];
    categories.data.map((cat) => {
      return all_name.push(cat.name);
    });
    // var current_name = [this.props.island_info.name];
    // var filter_name = all_name.filter((x) => !current_name.includes(x));

    if (this.props.island_info) {
      return (
        <div className={`pplpro_bg cat_${categorySymbol}`}>
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
                <mat.Paper className={`cat_content content_${categorySymbol}`}>
                  <img
                    className="island_icon hide_desk"
                    width="50px"
                    height="50px"
                    src={
                      require(`../assets/images/Island/${this.props.island_info.assets.island}`)
                        .default
                    }
                    onClick={() => {
                      this.setState({
                        open_category: !this.state.open_category,
                      });
                    }}
                  />
                  <mat.Grid
                    container
                    className="btn_row"
                    style={{
                      display: `${this.state.open_category ? "flex" : "none"}`,
                    }}
                  >
                    <Link to={`/themes/${filter_url[0]}`}>
                      {" "}
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn "
                      >
                        {filter_url[0]}
                      </mat.Button>
                    </Link>
                    <Link to={`/themes/${filter_url[1]}`}>
                      {" "}
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn"
                      >
                        {filter_url[1]}
                      </mat.Button>
                    </Link>
                    <Link to={`/themes/${filter_url[2]}`}>
                      {" "}
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn "
                      >
                        {filter_url[2]}
                      </mat.Button>
                    </Link>
                    <Link to={`/themes/${filter_url[3]}`}>
                      {" "}
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn "
                      >
                        {filter_url[3]}
                      </mat.Button>
                    </Link>
                    <Link to={`/themes/${filter_url[4]}`}>
                      {" "}
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn "
                      >
                        {filter_url[4]}
                      </mat.Button>
                    </Link>
                  </mat.Grid>
                  <mat.Grid container spacing={4}>
                    <mat.Grid item md={12} xs={12}>
                      <mat.Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                      >
                        <h2>
                          <span>{this.props.island_info.name}</span>
                        </h2>
                      </mat.Grid>
                      <mat.Grid container justifyContent="center">
                        <p>{this.props.island_info.info}</p>
                      </mat.Grid>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Paper>
              </mat.Grid>
            </mat.Grid>

            {/* <div style={{ height: "100px", margin: "1px" }}> </div> */}
            {/*ISLAND -START  */}
            <mat.Grid container className="island_wrapper">
              <img
                src={
                  require(`../assets/images/Island/${this.props.island_info.assets.island}`)
                    .default
                }
                alt="island"
                className="island_main"
              />
              <mat.Grid container className="students_list">
                {students.map((student) => {
                  return (
                    <mat.Grid item className="student_wrapper">
                      <img
                        alt="ppl"
                        src={
                          require(`../assets/images/People/${student.assets.thumbnail_img}`)
                            .default
                        }
                      />
                      <mat.Button
                        variant="contained"
                        size="small"
                        className="home_btn"
                      >
                        <Link
                          to={{
                            pathname: `/people/${student.url}`,
                            state: { categorySymbol: categorySymbol },
                          }}
                        >
                          {student.name}
                        </Link>{" "}
                      </mat.Button>
                    </mat.Grid>
                  );
                })}
              </mat.Grid>
            </mat.Grid>
          </mat.Grid>
        </div>
      );
    }
  }
}

export default PeopleProvider;
