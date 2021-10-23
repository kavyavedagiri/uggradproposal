import { Component } from "react";
import { Link } from "react-router-dom";
import ProjectsProvider from "./ProjectsProvider"
import people from "./assets/drivers/people.json";
import projects from "./assets/drivers/projects.json"

class PeopleProvider extends Component {
    render()
    {
        // grab that particular student id from params
        let nameParam = JSON.stringify(this.props.match.params.name)
        console.log(nameParam);

        let studentID = people.data.filter((el) => { return JSON.stringify(el.url) === nameParam })[0].id;
        console.log(studentID); 


        // use that id and find match from projects array
        let projectsList = projects.data.filter((el) => el.participants.includes(studentID))
        console.log(projectsList);
        // return those projects as hyperlinks


        return(
            <>
            {/* <ProjectsProvider /> */}
            {projectsList.map((el) => <Link to={`/projects/${el.url}/`}>{el.name}</Link>)}
            {/* <h1>Hello</h1> */}
            {/* render project provider */}
            </>
        )

    }

  };

export default PeopleProvider;
