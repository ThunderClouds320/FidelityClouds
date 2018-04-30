import React from 'react';

/**
 * The horizontal Navbar component at the top of the page
 */
class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar is-primary">
			  <div className="navbar-brand">
				<a className="navbar-item" href="/">
					<img src="static/img/mutualclouds.png" alt="MutualClouds" width="135" height="30" />
				</a>
				<div className="navbar-burger burger" data-target="navMenuColorprimary-example">
				</div>
			  </div>
				<div className="navbar-end">
				  <div className="navbar-item">
					<div className="field is-grouped">
					  <p className="control">
					  </p>
					  <p className="control">
					  </p>
					</div>
				  </div>
				</div>
			</nav>
		)
	}
}

export default Navbar;