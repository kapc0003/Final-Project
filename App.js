import React from "react";
import Main from "./components/main";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import {RESTAURANT_LIST} from "./pages";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Main/>
            </Provider>
        );
    }
}

let state = {
    restaurants: [],
    selectedItem: undefined,
    page: RESTAURANT_LIST
};

let store = createStore(reducers, state, compose(
    applyMiddleware(thunk)));