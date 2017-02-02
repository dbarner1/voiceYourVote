import React from 'react';
import {browserHistory} from 'react-router';

class Login_hero extends React.Component {

	handleSubmit (event) {
	    event.preventDefault();

	    let name = event.target.elements[0].value;
	    console.log(name);
	    let path = `profile/${name}`;
	    browserHistory.push(path);
	  }

  	render() {
    	return (
	    	<div className="Login">
	          <h1>Login to vote and view results!</h1>
	         	 <form onSubmit={this.handleSubmit}>
	         	 	<input type="text" placeholder="Your Full Name"/>
	         	 	<input placeholder="Your Email"/>
	          		<button type="submit">Login!</button>
	          	</form>
	        </div>
  		)
  	}
}

export default Login_hero;
