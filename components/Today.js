import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class Today extends Component {  

	handleSubmit (event) {
	    event.preventDefault();
	    console.log(name);
	    let path = `/city`;
	    browserHistory.push(path);
	  }

  	render() {

  	const imgUrl = "../assets/flag.png";
	const backgroundStyle = {backgroundImage: 'url(' + imgUrl + ')',};	

	    return (
      <div className='application' style={backgroundStyle}>
		    	<Header />
		    	<div className="today">
				    <form onSubmit={this.handleSubmit}>
					    <h1>Today's Ballot Question</h1>
					    <p>Should Trump build the wall on the Mexican border?</p>
					   <a target="_blank" href="/learn"><h5>What does this mean?</h5></a>
			          		<button type="submit">Yes!</button>
			          		<button type="submit">No!</button>
			        </form>
		        </div>
		        <Footer />
		    </div>
	    );
  	}
}

export default Today;
