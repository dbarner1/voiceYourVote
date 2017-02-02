import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Profile_previousBallots extends Component {  
  	render() {
	    return (
	    	<div className="previousBallots">
			    <form>
				    <h2>Previous Questions</h2>
				    <p>Should Trump keep Obamacare?</p>
				    <p>Your answer: Yes</p>
		        </form>
	        </div>
	    );
  	}
}

export default Profile_previousBallots;
