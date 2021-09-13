import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav id="header_area">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                    <h3><b>MY Assignment Food Shop</b></h3>
                </div>
                <div className="col-md-9">
                  <ul>
                    <li>
                      <Link to="/AssignmentFoodSite">Home</Link>
                    </li>
                    <li>
                      <Link to="/AssignmentFoodSite/signup">Sign Up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>


          <Switch>
            <Route exact path="/AssignmentFoodSite">
              <Home />
            </Route>
            <Route path="/AssignmentFoodSite/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
