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
            <div className="column animated bounceIn" id="centerdiv">
                <FacebookLogin
                appId="591063841234948"
                autoLoad={false}
                fields="name,email,picture,location"
				scope="public_profile,user_posts,user_about_me,user_likes,user_friends,user_work_history,user_hometown"
                callback={this.props.onLoginUpdated} />
                {/*<div className="fb-login-button" data-width="250" data-max-rows="1" data-size="large" data-button-type="login_with"*/}
                 {/*data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true"></div>*/}
            </div>
		)
	}
}

export default Facebook;