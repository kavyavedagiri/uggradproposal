import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import categoryProvider from './categoryProvider';
import ProfileProvider from "./ProfileProvider"
import Home from "./Home";
import './App.css';
import ProjectsProvider from './ProjectsProvider';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/themes/:category" exact component={categoryProvider} />
      <Route path="/people/:name" component={ProfileProvider}/> 
      <Route path="/projects/:projectname" component={ProjectsProvider}/> 

      </Switch>
    </div>
    </Router>
  );
}

export default App;
