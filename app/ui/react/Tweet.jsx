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
                <div className="tweet-container">
                    <div className="columns">
                        <div className="column is-narrow tweet-icon">
                            <h5><i className="far fa-comment"></i></h5>
                        </div>
                        <div className="column tweet-content">
                            <h5 className="tweet-text">{tweet['text']}</h5>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-narrow tweet-icon">
                            <h5><i className="far fa-clock"></i></h5>
                        </div>
                        <div className="column tweet-content">
                            <h6>Created At: {tweet['created_at']}</h6>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-narrow tweet-icon">
                            <h5><i className="fas fa-retweet"></i></h5>
                        </div>
                        <div className="column tweet-content">
                            <h6>Retweets: {tweet['retweet_count']}</h6>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-narrow tweet-icon">
                            <h5><i className="fas fa-heart"></i></h5>
                        </div>
                        <div className="column tweet-content">
                            <h6>Favorites: {tweet['favorite_count']}</h6>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Tweet;