import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import Layout from "./components/Layout";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items" component={ItemList} />
          <Route path="/item/:id" component={ItemDetail} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);


export default App;
