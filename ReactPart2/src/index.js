import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from "./components/error/errorComponent";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";

var store = createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    films: { data: [] }
});

ReactDOM.render(<Provider store={store}><ErrorBoundary><BrowserRouter><App /></BrowserRouter></ErrorBoundary></Provider>, document.getElementById('root'));

serviceWorker.unregister();
