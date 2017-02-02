import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import SignUp_hero from './SignUp_hero';

class SignUp extends Component {  

  	render() {

  		const imgUrl = "../assets/flag.png";
   		const backgroundStyle = {
  			backgroundImage: 'url(' + imgUrl + ')',
		};

	    return (
	      <div className='application' style={backgroundStyle}>
		       <Header />
		       <SignUp_hero />
		       <Footer />
	      </div>
	    );
  	}
}

export default SignUp;
