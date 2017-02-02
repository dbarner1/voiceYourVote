import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Home_hero from './Home_hero';
import Footer from './Footer';


class Learn extends Component {  
  render() {
  	const imgUrl = "../assets/flagRunners.png";

   const backgroundStyle = {
  		backgroundImage: 'url(' + imgUrl + ')',
	};

    return (
      <div className='application' style={backgroundStyle}>
       <Header />
          <div className="learn">
            <h1>Today's Ballot Question</h1>
            <div className="options">
              <p>This is an option</p>
              <p>This is an option</p>
            </div>

           <h1>Yesterday's Ballot Question</h1>
            <div className="options">
              <p>This is an option</p>
              <p>This is an option</p>
            </div>

          <h1>Search the Archive</h1>
            <div className="options">
              <p>By Date</p>
              <p>By Issue</p>
              <p>By Keyword</p>
            </div>
          </div>
       <Footer />
      </div>
    );
  }
}

export default Learn;
