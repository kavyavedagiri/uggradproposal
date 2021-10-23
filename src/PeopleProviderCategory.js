import { Component } from "react";
import { Link } from "react-router-dom";
import people from "./assets/drivers/people.json";
import categories from "./assets/drivers/categories.json"

// console.log(categories)
class PeopleProvider extends Component {
    render()
    {
        // console.log(this.props.category)
        // get abbreivation from the category name
        let categorySymbol = categories.data.filter((el) => { return el.name === this.props.category })[0].abbr; 
        console.log(categorySymbol);

        // get the student urls from the abbreivation names
        let students = people.data.filter(el => JSON.stringify(el.category) === JSON.stringify(categorySymbol))

        return(
            <>
            {students.map(el => <Link to={`/people/${el.url}`}>{el.name}</Link>)}
            </>
        )

    }

  };

export default PeopleProvider;
