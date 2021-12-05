import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import categoryProvider from "./people_provider/categoryProvider";
import ProfileProvider from "./profile_provider/profileProvider";
import Home from "./home/Home";
import ProjectsProvider from "./projects_provider/ProjectsProvider";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
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
    </Router>
  );
}

export default App;
