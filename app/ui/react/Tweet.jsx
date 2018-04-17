import React from 'react';

/**
 * A tweet pane displaying data from a tweet
 */
class Tweet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tweet = this.props.tweet;

        return (
            <div className="columns">
                <div className="column">
                    <h2>{tweet['text']}</h2>
                    <h3>Created At: {tweet['created_at']}</h3>
                    <h3>Favorites: {tweet['favorite_count']}</h3>
                    <h3>Retweets: {tweet['retweet_count']}</h3>
                </div>
            </div>
        )
    }
}

export default Tweet;