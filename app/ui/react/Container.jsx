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
		this.onTabClicked = this.onTabClicked.bind(this);

		// State template
		this.state = {selectedTab: 0,
			          loggedIn: undefined,
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
				    <Sidenav onTabClicked={this.onTabClicked} />
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

    /**
	 * Callback function to be executed when a tab is selected on the Sidenav
	 *
     * @param tabNumber The selected tab number
     */
	onTabClicked(tabNumber) {
		// Clear all previously selected tabs
		$(`[id^='tab-']`).removeClass("is-active");

		// Set the "active" class on the clicked tab
		$(`#tab-${tabNumber}`).addClass("is-active");
		this.setState({selectedTab: tabNumber});
	}
}

export default Container;