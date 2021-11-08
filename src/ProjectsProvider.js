import { Component } from "react";
import { Link } from "react-router-dom";
import projects from "./assets/drivers/projects.json";
import people from "./assets/drivers/people.json";
import PeopleProviderID from "./people_provider/PeopleProviderID";

// console.log(categories)
class ProjectsProvider extends Component {
  render() {
    // get project url from name of project
    let projectParam = JSON.stringify(this.props.match.params.projectname);
    console.log(projectParam);

    // find the particular project using the url field
    let projectData = projects.data.filter((el) => {
      return JSON.stringify(el.url) === projectParam;
    })[0];
    console.log(projectData);

    // get student names worked on that project
    // let studentData = projectData.participants.map(el => )
    // render project title, participants array

    return (
      <>
        {/* {students.map(el => <Link to={`/people/${el.url}`}>{el.name}</Link>)} */}
        <h1>{projectData.name}</h1>
        {/* <h1>{projectData.participants}</h1> */}
        <PeopleProviderID id={projectData.participants} />
      </>
    );
  }
}

export default ProjectsProvider;
