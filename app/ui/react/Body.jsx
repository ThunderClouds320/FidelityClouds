import React from 'react';

import Card from './Card.jsx';

/**
 * The body of the page, excluding the Navbars
 */
class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
			  <Card loggedIn={this.props.loggedIn} loginData={this.props.loginData} onLoginUpdated={this.props.onLoginUpdated} />
			</div>
		)
	}
}

export default Body;