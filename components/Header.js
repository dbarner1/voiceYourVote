import React from 'react';

class Header extends React.Component {  
  	render() {
    	return (     
	        <header>
	          <a href="/"><h1>ByThePeople.org</h1></a>
	          <nav>
	            <ul>
	              <a href="/SignUp"><li><h2>Sign Up</h2></li></a>
	              <a href="/LogIn"><li><h2>Log In</h2></li></a>
	            </ul>
	          </nav>
	        </header>
		);
	}
}

export default Header;