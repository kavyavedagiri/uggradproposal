import categories from "./assets/drivers/categories.json";
import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
          <>
          {categories.data.map((el) => <Link to={`/home/${el.url}/`}>{el.name}</Link>)}
          </>
        );
      }

  };

export default Home;

