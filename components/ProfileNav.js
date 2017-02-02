import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class ProfileNav extends Component {  
  render() {

    return (
      <div className="profileNav">
        <a href="/today"><button><h2>Today's Vote</h2></button></a>
        <a href="/city"><button><h2>Your City</h2></button></a>
        <button><h2>Your Past Votes</h2></button>
      </div>
    );
  }
}

export default ProfileNav;
