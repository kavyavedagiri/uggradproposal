import { Component } from "react";
import categories from "../assets/drivers/categories.json";
import PeopleProviderCategory from "./PeopleProviderCategory";

// console.log(categories)
class categoryProvider extends Component {
  render() {
    let category;
    let info;
    let island_info;
    let toRender = JSON.stringify(this.props.match.params.category);
    categories.data.forEach((el) => {
      if (JSON.stringify(el.url) === toRender) {
        category = el.name;
        info = el.info;
        island_info = el;
        console.log(el);
      }
    });
    return (
      <PeopleProviderCategory
        category={category}
        info={info}
        island_info={island_info}
      />
    );
  }
}

export default categoryProvider;
