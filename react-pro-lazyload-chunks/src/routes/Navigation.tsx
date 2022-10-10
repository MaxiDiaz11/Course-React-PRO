import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense
      fallback={
        <span>
          <p>Loading...</p>
        </span>
      }
    >
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ name, path }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route
                path={path}
                key={path}
                render={() => <Component></Component>}
              ></Route>
            ))}
            <Redirect to={routes[0].path}></Redirect>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
