import { Component } from "react";
import { Link } from "react-router-dom";
import people from "../assets/drivers/people.json";
import projects from "../assets/drivers/projects.json";
import * as mat from "@mui/material";
import * as icon from "@mui/icons-material";
import "./ProfileProvider.css";
class PeopleProvider extends Component {
  constructor() {
    super();
    this.state = {
      isHover: {},
      social_list: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    var categoryArray = people.data;
    var student_data;
    for (var i = 0; i < categoryArray.length; i++) {
      if (categoryArray[i].url === this.props.match.params.name) {
        student_data = categoryArray[i];
      }
    }
    var social_list = [];
    student_data.social.map((social) => {
      var social_key = Object.keys(social);
      var social_url = Object.values(social);
      if (social_key[0]) {
        return social_list.push(
          <li>
            <a href={social_url[0]} target="_blank" rel="noreferrer">
              <img
                alt="social"
                src={
                  require(`../assets/images/social/${social_key[0]}.webp`)
                    .default
                }
                width="30px"
                height="30px"
              />
            </a>
          </li>
        );
      } else {
        return false;
      }
    });
    this.setState({ social_list: social_list });
  }

  // ON MOUSE HOVER AT PROJECT CONTENT
  handle_hover(projectId) {
    var hover = this.state.isHover;
    hover[projectId] = true;
    this.setState({
      isHover: hover,
    });
  }

  handle_hover_out(projectId) {
    var hover = this.state.isHover;
    hover[projectId] = false;
    this.setState({
      isHover: hover,
    });
  }
  render() {
    // grab that particular student id from params
    let nameParam = JSON.stringify(this.props.match.params.name);

    let studentID = people.data.filter((el) => {
      return JSON.stringify(el.url) === nameParam;
    })[0].id;

    // use that id and find match from projects array
    let projectsList = projects.data.filter((el) =>
      el.participants.includes(studentID)
    );
    // return those projects as hyperlinks
    var categoryArray = people.data;
    var student_data;
    for (var i = 0; i < categoryArray.length; i++) {
      if (categoryArray[i].url === this.props.match.params.name) {
        student_data = categoryArray[i];
      }
    }
    return (
      <mat.Grid container className="dark" style={{ justifyContent: "center" }}>
        <mat.Grid container>
          <mat.Grid item md={6} xs={12} className="ppl_wrapper">
            <img
              alt="profile"
              width="auto"
              height="300px"
              style={{ objectFit: "contain" }}
              src={
                require(`../assets/images/People/${
                  this.state.isHover["profile_pic"]
                    ? student_data.assets.thumbnail_img
                    : student_data.assets.profile_img
                }`).default
              }
              onMouseOver={() => this.handle_hover("profile_pic")}
              onMouseOut={() => this.handle_hover_out("profile_pic")}
            />
          </mat.Grid>
          <mat.Grid item md={6} xs={12} className="ppl_wrapper">
            <h2>
              <span>{student_data.name}</span>
            </h2>
            <p style={{ lineHeight: "35px" }}>{student_data.about}</p>
            <ul className="social_bar">{this.state.social_list}</ul>
          </mat.Grid>
        </mat.Grid>
        <mat.Grid
          container
          justifyContent="center"
          style={{ marginTop: "55px" }}
        >
          {projectsList
            ? projectsList.map((projectsList) => {
                /* PROJECTS */
                return (
                  <mat.Grid item>
                    <mat.Paper className="project_content">
                      <Link to={`/projects/${projectsList.url}`}>
                        <img
                          alt="social"
                          src={
                            require(`../assets/images/Projects/${projectsList.thumbnail}`)
                              .default
                          }
                          width="300"
                          height="100%"
                          style={{ objectFit: "contain" }}
                        />
                        <div style={{ textAlign: "center" }}>
                          <h3>{projectsList.name}</h3>
                          <p>{projectsList.about}</p>
                        </div>{" "}
                      </Link>
                      {/* </mat.Grid> */}
                    </mat.Paper>
                  </mat.Grid>
                );
              })
            : null}
        </mat.Grid>
      </mat.Grid>
    );
  }
}

export default PeopleProvider;
