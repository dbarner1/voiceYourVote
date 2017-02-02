import React from 'react';
import {browserHistory} from 'react-router';

class Signup_hero extends React.Component {

	handleSubmit (event) {
	    event.preventDefault();

	    let name = event.target.elements[0].value;
	    console.log(name);
	    let path = `profile/${name}`;
	    browserHistory.push(path);
	  }

  	render() {
    	return (
	    	<div className="Signup">
	          <h1>You're 30 seconds away from casting your first vote!</h1>
	         	 <form onSubmit={this.handleSubmit}>
	         	 	<input type="text" placeholder="Your Full Name"/>
	         	 	<input placeholder="Your Email"/>
	          		<button type="submit">Sign Up!</button>
	          	</form>
	        </div>
  		)
  	}
}

export default Signup_hero;
