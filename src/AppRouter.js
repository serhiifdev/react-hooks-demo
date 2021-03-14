import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthHome from "./AuthHome";
import Home from "./Home";
import { useAuth } from "./hooks";
import Login from "./Login";

const AppRouter = () => {
  const auth = useAuth();

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => (auth ? <AuthHome /> : <Home />)}
        ></Route>

        {!auth && (
          <Route path="/login">
            <Login />
          </Route>
        )}

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
