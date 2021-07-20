import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Router } from "react-router";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import history from "./History";

const route = [...publicRoutes, ...privateRoutes];
export default class Routes extends Component {
  render() {
    let token = localStorage.getItem('user');
    return (
      <div>
        <Router history={history}>
            <Switch>
              {
                 <>
                    {route.map((data, index) => (
                      <Route
                        key={index}
                        exact={data.exact === false ? false : true}
                        path={data.path}
                        component={data.component}
                      />
                    ))}
                      {/* <Redirect to = "/sign_in" />  */}
                    </>
                //    :
                //   route.map((data, index) => (
                //     <Route
                //       key={index}
                //       exact={data.exact === false ? false : true}
                //       path={data.path}
                //       component={data.component}
                //     />
                //   )
                 // )
                  }
            </Switch>
        </Router>


      </div>
    )
  }
}
