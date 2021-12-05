import { Component } from "react";
import { Link } from "react-router-dom";
import projects from "../assets/drivers/projects.json";
import people from "../assets/drivers/people.json";
import category from "../assets/drivers/categories.json";
// import PeopleProviderID from "../people_provider/PeopleProviderID";
import * as mat from "@mui/material";
// import * as icon from "@mui/icons-material";
import "./projectsProvider.css";
class ProjectsProvider extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    // get project url from name of project
    let projectParam = JSON.stringify(this.props.match.params.projectname);

    // find the particular project using the url field
    let projectData = projects.data.filter((el) => {
      return JSON.stringify(el.url) === projectParam;
    })[0];

    var peopleArray = people.data;
    var student_data = [];
    for (var i = 0; i < peopleArray.length; i++) {
      for (var j = 0; j < projectData.participants.length; j++) {
        if (peopleArray[i].id === projectData.participants[j]) {
          student_data.push(peopleArray[i]);
        }
      }
    }

    var categoryArray = category.data;
    var category_data;
    for (var i = 0; i < categoryArray.length; i++) {
      if (categoryArray[i].abbr === projectData.category) {
        category_data = categoryArray[i];
      }
    }

    return (
      <mat.Grid
        container
        className={projectData.theme === "dark" ? "dark" : "light"}
      >
        <mat.Grid container className="project_wrapper">
          <mat.Grid
            item
            md={projectData.layout_mode === "full" ? 12 : 6}
            xs={12}
          >
            <img
              alt="social"
              src={
                require(`../../src/assets/images/Projects/project1/andy_project2.png`)
                  .default
              }
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </mat.Grid>
          <mat.Grid
            item
            md={projectData.layout_mode === "full" ? 12 : 6}
            xs={12}
            className="project_details"
          >
            <h3>{projectData.name}</h3>
            <mat.Grid container>
              <mat.Grid
                item
                md={2}
                xs={12}
                display={projectData.layout_mode === "full" ? "block" : "none"}
              />
              <mat.Grid
                item
                md={projectData.layout_mode === "full" ? 4 : 12}
                xs={12}
                className={
                  projectData.layout_mode === "full"
                    ? "contentL"
                    : "content_gutter "
                }
              >
                <span>
                  <p>
                    {student_data.length > 1 ? "Students :" : "Student :"}
                    <br />
                    {student_data.map((stud) => {
                      return (
                        <Link to={`/people/${stud.url}`}>{stud.name} </Link>
                      );
                    })}
                  </p>
                </span>
                <span>
                  <p>
                    Category:
                    <br />
                    <Link to={`/themes/${category_data.url}`}>
                      {category_data.name}
                    </Link>
                  </p>
                </span>
                <span>
                  <p>
                    Module:
                    <br />
                    {projectData.module}
                  </p>
                </span>
              </mat.Grid>
              <mat.Grid
                item
                md={projectData.layout_mode === "full" ? 4 : 12}
                xs={12}
                className={
                  projectData.layout_mode === "full"
                    ? "contentR"
                    : "content_gutter "
                }
                // className="contentR"
              >
                <p>{projectData.mainContent}</p>
              </mat.Grid>
              <mat.Grid
                item
                md={2}
                xs={12}
                display={projectData.layout_mode === "full" ? "block" : "none"}
              />
            </mat.Grid>
          </mat.Grid>
        </mat.Grid>
        {projectData.subContent.map((data) => {
          return (
            <mat.Grid container className="project_wrapper">
              <mat.Grid
                item
                md={projectData.layout_mode === "full" ? 12 : 6}
                xs={12}
              >
                <img
                  alt="social"
                  src={
                    require(`../../src/assets/images/Projects/${data.image}`)
                      .default
                  }
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </mat.Grid>
              <mat.Grid
                item
                md={projectData.layout_mode === "full" ? 12 : 6}
                xs={12}
                className="content_details"
              >
                <p>{data.definition}</p>
              </mat.Grid>
            </mat.Grid>
          );
        })}
      </mat.Grid>
    );
  }
}

export default ProjectsProvider;
