import React from 'react';

import FacebookLogin from 'react-facebook-login';

/**
 * A component containing the "Login with Facebook" button
 */
class Facebook extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
            <div className="column is-half animated bounceIn" id="centerdiv">
                <FacebookLogin
                appId="591063841234948"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.props.onLoginUpdated} />
                {/*<div className="fb-login-button" data-width="250" data-max-rows="1" data-size="large" data-button-type="login_with"*/}
                 {/*data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>*/}
            </div>
		)
	}
}

export default Facebook;