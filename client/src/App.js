import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./routes/Home"));
const Mine = lazy(() => import("./routes/Mine"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mine" component={Mine} />
        </Switch>
      </Suspense>
      <Link to="/">home</Link>
      <Link to="/mine">mine</Link>
    </Router>
  );
}

export default App;
