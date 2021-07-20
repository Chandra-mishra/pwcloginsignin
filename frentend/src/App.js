import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";
import Routing from "./Routes/Routes";

function App() {
  const token = localStorage.getItem('user');
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {token ? 
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign_in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign_up"}>Sign up</Link>
              </li>
            </ul>:
            <></>
            }
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
           <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
