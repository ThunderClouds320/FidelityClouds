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
						{/*<a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">*/}
						  {/*<span>*/}
							{/*Tweet*/}
						  {/*</span>*/}
						{/*</a>*/}
					  </p>
					  <p className="control">
						{/*<a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">*/}
						  {/*<span>Download</span>*/}
						{/*</a>*/}
					  </p>
					</div>
				  </div>
				</div>
			</nav>
		)
	}
}

export default Navbar;