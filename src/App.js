import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProjectShowcase from './components/projects/ProjectShowcase';
import ProjectsOverview from './components/projects/ProjectsOverview';
import ScrollToTop from './components/ScrollToTop';
import projects from './appData';

import appStyles from './App.module.css';


const App = () => {

  return (
    <div className={`${appStyles.app}`}>
      <Router >
        <ScrollToTop />
        <Navbar />
        <div className={`${appStyles.mainContent}`}>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/projects'
            render={() => <ProjectsOverview projects={projects} />}
          />
          <Route
            path='/projects/:projectID'
            render={(props) => <ProjectShowcase {...props} />}
          />
        </div>
      </Router >
    </div>
  );
}

export default App;
