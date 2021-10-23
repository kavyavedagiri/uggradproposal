import { Component } from "react";
import categories from "./assets/drivers/categories.json";
import PeopleProviderCategory from "./PeopleProviderCategory"

// console.log(categories)
class categoryProvider extends Component {
    render()
    {
        let category
        let toRender = JSON.stringify(this.props.match.params.category)
        categories.data.forEach(el => {
            if(JSON.stringify(el.url)===toRender) {
                category = el.name
                console.log(category);
            }
        })
        return(
            <PeopleProviderCategory category={category} />
        )

    }

  };

export default categoryProvider;
