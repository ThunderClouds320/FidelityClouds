import React from 'react';

import Facebook from './Facebook.jsx';
import Card from './Card.jsx';

/**
 * The body of the page, excluding the Navbars
 */
class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const name = this.props.loginData.name;
        const userID = this.props.loginData.userID;

        // Hide the facebook button until we know whether we are logged in or not
        const fbClass = this.props.loggedIn === false ? '' : 'hide';

        // Set default values for the home card content until we get data from Facebook
        let homeHeaderContent = <p className="card-header-title">Loading... </p>;
		let homeBodyContent = <div>
			                    <div className={"content fb-content " + fbClass}>
                                  <Facebook onLoginUpdated={this.props.onLoginUpdated} />
                                </div>
		                      </div>;


        // If we are logged in, display our name, profile picture, and userID
        if (this.props.loggedIn === true) {
            homeHeaderContent = <span style={{display: "inherit"}}>
				                  <img src={this.props.loginData.picture.data.url}  className="animated bounceIn" alt={name} />
				                  <p className="card-header-title">{name}</p>
			                    </span>;
            homeBodyContent = <div>
			                    <div className={`content fb-content ${fbClass}`}>
                                  <Facebook onLoginUpdated={this.props.onLoginUpdated} />
                                </div>
				                <div className="content">
								  <p>User ID: {userID}</p>
								</div>
		                      </div>;
        }

		return (
			<div className="container">
			  <Card loggedIn={this.props.loggedIn}
					loginData={this.props.loginData}
					onLoginUpdated={this.props.onLoginUpdated}
			        headerContent={homeHeaderContent}
			        bodyContent={homeBodyContent} />
			</div>
		)
	}
}

export default Body;