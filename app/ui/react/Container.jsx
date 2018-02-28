import React from 'react';

import Navbar from './Navbar.jsx';
import Sidenav from './Sidenav.jsx';
import Body from './Body.jsx';

/**
 * The main container for elements on the DOM
 */
class Container extends React.Component {
	constructor(props) {
		super(props);

		// Bind our class methods to the 'this' instance object
		this.onLoginUpdated = this.onLoginUpdated.bind(this);

		// State template
		this.state = {loggedIn: undefined,
			          loginData: {
			             name: "Loading...",
			             accessToken: "Loading..."
		             }};

	}

	render() {
		return (
			<div id="container">
				<Navbar />
				<section className="main-content columns is-fullheight">
				    <Sidenav />
				    <Body loggedIn={this.state.loggedIn} loginData={this.state.loginData} onLoginUpdated={this.onLoginUpdated} />
				</section>
			</div>
		)
	}

    /**
	 * Callback function to be executed when Facebook login data is retrieved
	 *
     * @param {object} data: The loginData that is returned from the Facebook API
     */
	onLoginUpdated(data) {
		console.log(data);
		this.setState({loggedIn: true, loginData: data});
	}
}

export default Container;