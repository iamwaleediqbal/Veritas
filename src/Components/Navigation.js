import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./DashBoard";
import Header from "./PublisherHeader";
import BookForm from "./BookForm";
import EditBook from "./EditBook";
import MagazineForm from "./MagazineForm";
import EditMagazine from "./EditMagazine";
import AboutPage from "./main_page/AboutPage";
import ContactPage from "./main_page/ContactPage";
import HomePage from "./main_page/HomePage";
class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/editbook" component={EditBook} />
            <Route exact path="/editmagazine" component={EditMagazine} />
            <Route exact path="/bookupload" component={BookForm} />
            <Route exact path="/magazineupload" component={MagazineForm} />
            <Route exact path="/publisher" component={Login} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Navigation;
