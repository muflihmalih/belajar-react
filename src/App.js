import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./container/home";
import About from "./container/about";
import Contact from "./container/contact";
import Login from "./container/login";
import Signup from "./container/signup";
import Product from "./container/product";
import Notfound from "./container/notfound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/product" component={Product} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
