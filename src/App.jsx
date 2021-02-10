import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <div className="container appContainer">
        <div className="row appRow">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Sidebar></Sidebar>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="mainContent">
              <Navbar></Navbar>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path="/">
                    <About></About>
                  </Route>

                  <Route path="/resume">
                    <Resume></Resume>
                  </Route>

                  <Route path="/projects">
                    <Projects></Projects>
                  </Route>

                  <Route>
                    <Redirect to="/"></Redirect>
                  </Route>
                </Switch>
              </AnimatePresence>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
