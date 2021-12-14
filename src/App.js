import React from "react";
import { Component } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import categoryProvider from "./people_provider/categoryProvider";
import ProfileProvider from "./profile_provider/ProfileProvider";
import Home from "./home/Home";
import ProjectsProvider from "./projects_provider/ProjectsProvider";
import Header from "./header/Header";
import Footer from "./footer/Footer";
class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* // <Router history={history}> */}
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
        {/* // </Router> */}
      </HashRouter>
    );
  }
}

export default App;
