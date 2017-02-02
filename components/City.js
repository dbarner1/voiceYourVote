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

		    	<h1>Results for Boston, MA</h1>
			    <h2>Today's Ballot Question</h2>
			    <div className="cityResults">
				    <h3>5% Want the Wall</h3>
				    <h3>95% Oppose the Wall</h3>
				</div>

				<h2>Yesterday's Ballot Question</h2>
				    <div className="cityResults">
					    <h3>21% Support Muslim Ban</h3>
					    <h3>79% Oppose Muslim Ban</h3>
					</div>
			    <form onSubmit={this.handleSubmit}>
			    	<button type="submit">Back to Profile</button>
			    	<button>Change City</button>
			    </form>

		    </div>
		    <Footer />
	    </div>
    );
  }
}

export default City;