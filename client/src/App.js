import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLoading from "components/PageLoading";
import Navigation from "components/Navigation";

const Home = lazy(() => import("./routes/Home"));
const Mine = lazy(() => import("./routes/Mine"));

const links = [
  { name: "首页", link: "/" },
  { name: "实名动态", link: "/real" },
  { name: "匿名动态", link: "/anonymous" }
];

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Navigation links={links} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mine" component={Mine} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
