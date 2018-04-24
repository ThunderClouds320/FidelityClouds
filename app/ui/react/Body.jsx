import React from 'react';

import MainCard from './MainCard.jsx';
import IfElseCard from './IfElseCard.jsx';
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
        let tweetHeaderLabel = "Enter a Twitter Handle";
        let ifElseHeaderLabel = "If-Else Engine";
        let engineBodyLabel = this.props.twitter.tweets.length == 0 ? "No tweets yet. Enter a handle to get started!" : "Select a tweet to analyze:";
        const currentTab = this.props.selectedTab;
        const indexTweets = this.generateIndexTweetList();
        const microTweets = this.generateMicroTweetList();

		return (
			<div className="container">
              <div className={currentTab != 0 ? "hide" : ""}>
			      <MainCard twitter={this.props.twitter}
                        headerLabel={tweetHeaderLabel}
                        onHandleChanged={this.props.onHandleChanged}
                        fetchTweets={this.props.fetchTweets}
                        tweets={indexTweets}/>
              </div>
              <div className={currentTab != 1 && currentTab != 2 ? "hide" : ""}>
                  <IfElseCard headerLabel={ifElseHeaderLabel}
                              bodyLabel={engineBodyLabel}
                              tweets={microTweets} />
              </div>
			</div>
		)
	}

    /**
     * Generates a list of tweet components to be mounted on index page
     */
	generateIndexTweetList() {
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

    /**
     * Generates a list of tweet components to be mounted on the microservice page
     */
	generateMicroTweetList() {
	    const onClicked = this.props.onTweetClicked;

	    return (
	        <ul>
                {this.props.twitter.tweets.map(tweet =>
                    <div key={tweet[0]['id']} className="columns">
                        <div className="column">
                            <Tweet tweet={tweet[0]}
                                   onTweetClicked={onClicked} />
                        </div>
                        <div className="column">
                            <Tweet tweet={tweet[1]}
                                   onTweetClicked={onClicked} />
                        </div>
                    </div>
                )}
            </ul>

        )
    }
}

export default Body;