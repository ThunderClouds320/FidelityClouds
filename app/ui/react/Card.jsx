import React from 'react';

import Facebook from './Facebook.jsx';

/**
 * A card panel on the DOM showing user data
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.loginData.name;
        const userID = this.props.loginData.userID;

        // Set default values for the card content until we get data from Facebook
        let innerContent = null;
        let profilePicture = null;
        let hideClass = 'hide';
        let nameContent = <p className="card-header-title">Loading... </p>;

        // If we are logged in, display our name, profile picture, and userID
        if (this.props.loggedIn === true) {
            nameContent = <p className="card-header-title">{name}</p>;
            innerContent = <p>User ID: {userID}</p>;
            profilePicture = <img src={this.props.loginData.picture.data.url} alt={name} className="animated bounceIn" />
        }

        // If we are not logged in, make the "Login with Facebook" button visible
        if (this.props.loggedIn === false) {
            hideClass = '';
        }

        return (
            <div className="column">
                <div className="section">
                  <div className="card">
                    <div className="card-header">
                        {profilePicture}
                        {nameContent}
                    </div>
                    <div className="card-content">
                        <div className={"content fb-content " + hideClass}>
                            <Facebook onLoginUpdated={this.props.onLoginUpdated} />
                        </div>
                        <div className="content">
                            {innerContent}
                        </div>
                    </div>
                  </div>
                  <br />
                </div>
            </div>
        )
    }
}

export default Card;