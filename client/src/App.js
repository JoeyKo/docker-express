import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLoading from "components/PageLoading";
import Navigation from "components/Navigation";
import styles from "./App.module.scss";

const Home = lazy(() => import("./routes/Home"));
const Anonymous = lazy(() => import("./routes/Anonymous"));

const links = [
  { name: "首页", link: "/" },
  { name: "匿名动态", link: "/anonymous" }
];

function App() {

  const handleSearch = (event) => {
    console.log(event)
  }
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Navigation links={links} placeholder="iG 不敌TL 无缘 MSI 决赛" onSearch={handleSearch} />
        <main className={StyleSheet.main}>
          <div className={styles.mainContainer}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/anonymous" component={Anonymous} />
            </Switch>
          </div>
        </main>
      </Suspense>
    </Router>
  );
}

export default App;
