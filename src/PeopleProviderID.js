import { Component } from "react";
import { Link } from "react-router-dom";
import people from "./assets/drivers/people.json";
import categories from "./assets/drivers/categories.json"

// console.log(categories)
class PeopleProviderID extends Component {
    render()
    {
        // console.log(this.props.category)
        // get abbreivation from the category name
        console.log(this.props.id);
        let idSymbol = people.data.filter((el) => this.props.id.includes(el.id)); 
        console.log(idSymbol);

        // get the student urls from the abbreivation names

        return(
            <>
            {idSymbol.map(el => <Link to={`/people/${el.url}`}>{el.name}</Link>)}
            </>
        )

    }

  };

export default PeopleProviderID;
