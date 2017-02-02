import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Login extends Component {  
  	render() {
	    return (
	      <div className='application'>
		       <Header />
		       <h1>This is the login page!</h1>
		       <Footer />
	      </div>
	    );
  	}
}

export default Login;
