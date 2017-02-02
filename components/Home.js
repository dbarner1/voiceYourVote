import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Home_hero from './Home_hero';
import Footer from './Footer';


class Home extends Component {  
  render() {
  	const imgUrl = "../assets/flagRunners.png";

   const backgroundStyle = {
  		backgroundImage: 'url(' + imgUrl + ')',
	};

    return (
      <div className='application' style={backgroundStyle}>
       <Header />
       <Home_hero />
       <img />
       <Footer />
      </div>
    );
  }
}

export default Home;
