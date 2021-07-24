import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './DashBoard';
import Header from './Header';
import BookForm from './BookForm';
import EditBook from './EditBook';
import MagazineForm from './MagazineForm';
import EditMagazine from './EditMagazine';
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
           <Route path="/" component={Login} />
         </Switch>
       </div>
     </Router>
   );
 }
}
export default Navigation;