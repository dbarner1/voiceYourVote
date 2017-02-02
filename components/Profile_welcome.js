import React from 'react';

const Profile_welcome = props => {  
	let name = props.params.name;

  return (
    <div className="main-content">
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Profile_welcome;