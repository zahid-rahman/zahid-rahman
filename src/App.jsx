import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
              <Sidebar></Sidebar>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="mainContent">
              <Navbar></Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
