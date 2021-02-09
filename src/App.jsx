import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Sidebar></Sidebar>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="mainContent">
                <Navbar></Navbar>
                <Route exact path="/">
                  <About></About>
                </Route>

                <Route path="/resume">
                  <Resume></Resume>
                </Route>

                <Route path="/projects">
                  <Projects></Projects>
                </Route>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
