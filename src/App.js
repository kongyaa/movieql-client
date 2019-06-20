import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <main>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </main>
      </Router>
      <div className="App" />
    </ApolloProvider>
  );
}

export default App;
