import { Component } from "react";
import { Link } from "react-router-dom";
import people from "../assets/drivers/people.json";
import projects from "../assets/drivers/projects.json";
import * as mat from "@mui/material";
import * as icon from "@mui/icons-material";
import "./profileProvider.css";
class PeopleProvider extends Component {
  constructor() {
    super();
    this.state = {
      isHover: {},
      social_list: [],
    };
  }

  componentDidMount() {
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

    // let studentCategory = people.data.filter((el) => {
    //   return JSON.stringify(el.category) === nameParam;
    // });
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
      <div className={`pplpro_bg student_${student_data.category}`}>
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
                className={`ppl_content content_${student_data.category}`}
              >
                <mat.Grid container>
                  <mat.Grid item md={4} xs={12} className="ppl_wrapper">
                    <div>
                      <img
                        alt="profile"
                        width="100%"
                        maxHeight="200px"
                        src={
                          require(`../assets/images/People/${
                            this.state.isHover["profile_pic"]
                              ? student_data.assets.profile_img
                              : student_data.assets.thumbnail_img
                          }`).default
                        }
                        onMouseOver={() => this.handle_hover("profile_pic")}
                        onMouseOut={() => this.handle_hover_out("profile_pic")}
                      />
                      <ul className="social_bar">{this.state.social_list}</ul>
                    </div>
                  </mat.Grid>
                  <mat.Grid item md={8} xs={12} className="ppl_wrapper">
                    <mat.Grid
                      container
                      alignItems="center"
                      justifyContent="center"
                    >
                      <h2>
                        <span className="back_cl">{student_data.name}</span>
                      </h2>
                    </mat.Grid>
                    <mat.Grid container justifyContent="center">
                      <p className="back_cl">{student_data.about}</p>
                    </mat.Grid>
                  </mat.Grid>
                </mat.Grid>
              </mat.Paper>
            </mat.Grid>
            {projectsList
              ? projectsList.map((projectsList) => {
                  /* PROJECTS */
                  return (
                    <mat.Grid
                      item
                      xs={12}
                      alignItems="center"
                      justifyContent="center"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <mat.Paper className="project_content">
                        <mat.Grid container>
                          <mat.Grid
                            item
                            md={8}
                            xs={12}
                            style={{ height: "400px" }}
                          >
                            <img
                              alt="social"
                              src={
                                require(`../assets/images/Projects/${
                                  this.state.isHover[projectsList.id]
                                    ? projectsList.assests.img2
                                    : projectsList.assests.img1
                                }`).default
                              }
                              width="100%"
                              height="100%"
                              style={{ objectFit: "cover" }}
                            />
                          </mat.Grid>
                          <mat.Grid
                            item
                            md={4}
                            xs={12}
                            alignItems="center"
                            style={{ padding: "20px", display: "flex" }}
                            onMouseOver={() =>
                              this.handle_hover(projectsList.id)
                            }
                            onMouseOut={() =>
                              this.handle_hover_out(projectsList.id)
                            }
                          >
                            <div>
                              <h3>{projectsList.name}</h3>
                              <p>{projectsList.about}</p>
                              <Link
                                to={`/projects/${projectsList.url}`}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Read more{"  "}
                                <icon.ArrowForward sx={{ fontSize: 16 }} />
                              </Link>
                            </div>
                          </mat.Grid>
                        </mat.Grid>
                      </mat.Paper>
                    </mat.Grid>
                  );
                })
              : null}
          </mat.Grid>
        </mat.Grid>
      </div>
    );
  }
}

export default PeopleProvider;
