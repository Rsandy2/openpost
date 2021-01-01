import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const Quotes = React.lazy(() => import("./pages/Quote/Quote"));
const CreateQuotes = React.lazy(() =>
  import("./pages/createQuote/CreateQuotes.js")
);

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/create" component={CreateQuotes} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
