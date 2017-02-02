import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Today from './Today';
import Profile_previousBallots from './Profile_previousBallots';
import ProfileNav from './ProfileNav';

const Profile = props => {  

		let name = props.params.name;
 	 	const imgUrl = "../assets/flag.png";
   		const backgroundStyle = {
  			backgroundImage: 'url(' + imgUrl + ')',
		};
 	 return (

  		 <div className='application'>
		    <Header />
		    <div className="profile" style={backgroundStyle}>
			    <h1>Welcome <strong>{name} </strong>!</h1>
			    <ProfileNav />
		    </div>
		    <Footer />
	    </div>
  	);
}


export default Profile;
