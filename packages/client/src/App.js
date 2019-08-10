import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import routes from './config/routes';
import styles from "./App.module.scss";

const links = [
  { name: "首页", link: "/" },
];

function App() {

  const handleSearch = (event) => {
    console.log(event)
  }
  return (
    <Router>
      <div>
        <Navigation links={links} placeholder="iG 不敌TL 无缘 MSI 决赛" onSearch={handleSearch} />
        <main className={StyleSheet.main}>
          <div className={styles.mainContainer}>
            {routes.map(item => <Route exact path={item.path} component={item.component} />)}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
