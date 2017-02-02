import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Login_hero from './Login_hero';

class Login extends Component {  
  	render() {

  		const imgUrl = "../assets/flag.png";
   		const backgroundStyle = {
  			backgroundImage: 'url(' + imgUrl + ')',
		};

	    return (
	      <div className='application' style={backgroundStyle}>
		       <Header />
		       <Login_hero />
		       <Footer />
	      </div>
	    );
  	}
}

export default Login;
