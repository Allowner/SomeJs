import React from 'react';
import Search from './components/search';
import Result from './components/result';
import Film from './components/film';
import Similar from './components/similar';
import { Route, Switch } from "react-router-dom";

let urls = [
  "poster.jpg",
  "poster.jpg",
  "poster.jpg",
  "poster.jpg",
  "poster.jpg",
  "poster.jpg",
  "poster.jpg",
  "poster.jpg"
];

const Header = () => (
  <main className="baseHeader">
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/film/:id" component={Film} />
    </Switch>
  </main>
);

const Main = (props) => (
  <main className="baseMain">
    <Switch>
      <Route exact path="/" render={() => <Result imageUrls={props.imageUrls} />} />
      <Route path="/film/:id" component={Similar} />
    </Switch>
  </main>
);

const Footer = () => (
  <div className="footerStyle">
    <p>
      <b>netflix</b>roulet
    </p>
  </div>
);

function App() {
  return (
    <div className="baseStyle">
      <Header />
      <Main imageUrls={urls} />
      <Footer />
    </div>
  );
}

export default App;
