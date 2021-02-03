import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
  const { pathname } = useLocation();

  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
