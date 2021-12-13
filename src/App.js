import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import categoryProvider from "./people_provider/categoryProvider";
import ProfileProvider from "./profile_provider/profileProvider";
import Home from "./home/Home";
import ProjectsProvider from "./projects_provider/ProjectsProvider";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import history from "./history";
class App extends Component {
  constructor() {
    super();
    this.state = {
      open_category: false,
    };
  }
  // componentDidMount() {
  //   history.push("/");
  // }
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/themes/:category" component={categoryProvider} />
            <Route path="/people/:name" component={ProfileProvider} />
            <Route path="/projects/:projectname" component={ProjectsProvider} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
