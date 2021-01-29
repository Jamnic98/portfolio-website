import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';

import './App.css';

// import img from './images/profile-picture.jpg';

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/projects' component={Projects} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
