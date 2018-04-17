import React from 'react';

import Card from './Card.jsx';
import Tweet from './Tweet.jsx';

/**
 * The body of the page, excluding the Navbars
 */
class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		// Default
        let headerLabel = "Enter a Twitter Handle";

		return (
			<div className="container">
			  <Card twitter={this.props.twitter}
                    headerLabel={headerLabel}
                    onHandleChanged={this.props.onHandleChanged}
                    fetchTweets={this.props.fetchTweets}
                    tweets={this.generateTweetList()}/>
			</div>
		)
	}

    /**
     * Generates a list of tweet components to be mounted on the dom
     */
	generateTweetList() {
	    return (
	        <ul>
                {this.props.twitter.tweets.map(tweet =>
                    <div key={tweet[0]['id']} className="columns">
                        <div className="column">
                            <Tweet tweet={tweet[0]} />
                        </div>
                        <div className="column">
                            <Tweet tweet={tweet[1]} />
                        </div>
                    </div>
                )}
            </ul>

        )
    }
}

export default Body;