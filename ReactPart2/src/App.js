import React from 'react';
import Search from './components/header/search';
import Film from './components/header/film';
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import Result from "./components/main/result";
import NoMatch from "./components/error/noMatch";
import "./App.css";

const Header = () => (
  <main className="baseHeader">
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/film/:id" component={Film} />
      <Route path={`/search/Search`} component={Search} />
      <Route component={""} />
    </Switch>
  </main>
);

const Main = (props) => (
  <main className="baseMain">
    <Switch>
      <Route exact path="/" render={() => <Result />} />
      <Route path="/film/:id" render={() => <Result similarGenre={props.genre} />} />
      <Route path={`/search/Search`} render={() => <Result />} />
      <Route component={NoMatch} />
    </Switch>
  </main>
);

function App() {
  return (
    <div className="baseStyle">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
