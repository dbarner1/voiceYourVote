import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';

class City extends Component {  

	handleSubmit (event) {
	    event.preventDefault();
	    let name = event.target.elements[0].value;
	    console.log(name);
	    let path = `profile/Dave Barner`;
	    browserHistory.push(path);
	  }

  render() {

  		const imgUrl = "../assets/flag.png";
   		const backgroundStyle = {
  			backgroundImage: 'url(' + imgUrl + ')',
		};

    return (
  		 <div className='application'>
		    <Header />
		    <div className="city" style={backgroundStyle}>
			    <h1>Today's Ballot Question</h1>
			    <div className="cityResults">
				    <h2>95% Want the Wall</h2>
				    <h2>5% Oppose the Wall</h2>
				</div>
			    <form onSubmit={this.handleSubmit}>
			    	<button type="submit">Back to Profile</button>
			    </form>
		    </div>
		    <Footer />
	    </div>
    );
  }
}

export default City;