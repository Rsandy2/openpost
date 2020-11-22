import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Home = React.lazy(() => import("./components/Home"));
const Quotes = React.lazy(() => import("./components/Quotes"));
const Create = React.lazy(() => import("./components/create-quote/Create"));

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quotes" component={Quotes} />
          <Route path="/create" component={Create} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
