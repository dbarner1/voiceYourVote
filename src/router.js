import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import Home from '../components/Home';
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Today from "../components/Today";
import City from "../components/City";

//Routes

const routes = (
  	<Router history={browserHistory}>
	  	<Route path="/" component={Home}/>
	  	<Route path="/SignUp" component={SignUp}/>
	  	<Route path="/Login" component={Login}/>
	  	<Route path="/profile/:name" component={Profile} />
	  	<Route path="/today" component={Today} />
	  	<Route path="/city" component={City} />
		<Route path="*" component={NotFound}/>
  	</Router>
);

export default routes;