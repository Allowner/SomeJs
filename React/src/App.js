import React from 'react';
import Search from './components/search';
import Result from './components/result';
import Film from './components/film';
import Similar from './components/similar';
import { Route, Switch } from "react-router-dom";

let urls = [
  "../public/poster.jpg"
];

const Header = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/film/:id" component={Film} />
    </Switch>
  </main>
);

const Main = (props) => (
  <main>
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
    <div>
      <basefont face="arial, verdana, sans-serif" color="#ffffff"></basefont>
      <Header />
      <Main imageUrls={urls} />
      <Footer />
    </div>
  );
}

export default App;
