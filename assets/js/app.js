// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from "./containers/Blogs";
import Form from "./containers/Form";
import UpdateForm from "./containers/UpdateForm";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Blogs}/>
          <Route path="/create" component={Form}/>
          <Route path="/update/:id" component={UpdateForm}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
