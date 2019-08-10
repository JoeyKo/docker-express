import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from "components/Navigation";
import routes from './config/routes';

import styles from "./App.module.scss";

const links = [
  { name: "首页", link: "/" },
];

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})

function App() {

  const handleSearch = (event) => {
    console.log(event)
  }

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
