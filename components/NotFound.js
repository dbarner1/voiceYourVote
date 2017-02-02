import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Home_hero from './Home_hero';
import Footer from './Footer';


class NotFound extends Component {  
  render() {
  	const imgUrl = "../assets/flagRunners.png";

   const backgroundStyle = {
  		backgroundImage: 'url(' + imgUrl + ')',
	};

    return (
      <div className='application' style={backgroundStyle}>
       <Header />
       <div className="notFound">
         <h3>Bummer, that page wasn't found...</h3>
         <h3>...so, we brought you back home.</h3>
      </div>
      <Home_hero />
       <Footer />
      </div>
    );
  }
}

export default NotFound;
