import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import './App.css';

function App() {

    return (
        <div className="container">
            < Router >
                <Navbar />
                <div id="main-content">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/projects' component={Projects} />
                    </Switch>
                </div>
            </Router >
        </div >
    );
}

export default App;
