import { Logo } from "../pages/logo";
import spinner from "../images/spinner.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserRole } from "../__generated__/globalTypes";
import { Restaurants } from "../pages/client/restaurants";
import { NotFound } from "../pages/404";
import routes from "../routes";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";

const clientRoutes = [{ path: routes.home, component: <Restaurants /> }];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return (
      <div className="mt-64 flex justify-center items-center">
        <Logo logoFile={spinner} option={"w-64 mr-10"} />
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me.role === UserRole.Client &&
          clientRoutes.map((route) => (
            <Route key={route.path} path={route.path} exact>
              {route.component}
            </Route>
          ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
