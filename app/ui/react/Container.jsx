import React from 'react';
import swal from 'sweetalert2';

import Navbar from './Navbar.jsx';
import Sidenav from './Sidenav.jsx';
import Body from './Body.jsx';

/**
 * The main container for elements on the DOM
 */
class Container extends React.Component {
	constructor(props) {
		super(props);

		// Bind our class methods to the 'this' instance object
		this.onTabClicked = this.onTabClicked.bind(this);
		this.onHandleChanged = this.onHandleChanged.bind(this);
		this.fetchTweets = this.fetchTweets.bind(this);
		this.analyzeTweet = this.analyzeTweet.bind(this);

		// Initial state template
		this.state = {selectedTab: 0,
			          twitter: {
			              handle: "realDonaldTrump",
						  tweets: []
					  }};
	}

	render() {
		return (
			<div id="container">
				<Navbar />
				<section className="main-content columns is-fullheight">
				    <Sidenav onTabClicked={this.onTabClicked} />
				    <Body twitter={this.state.twitter}
                          onHandleChanged={this.onHandleChanged}
                          fetchTweets={this.fetchTweets}
                          selectedTab={this.state.selectedTab}
                          onTweetClicked={this.analyzeTweet} />
				</section>
			</div>
		)
	}

    /**
	 * Callback function to be executed when a tab is selected on the Sidenav
	 *
     * @param tabNumber The selected tab number
     */
	onTabClicked(tabNumber) {
		// Clear all previously selected tabs
		$(`[id^='tab-']`).removeClass("is-active");

		// Set the "active" class on the clicked tab
		$(`#tab-${tabNumber}`).addClass("is-active");

		// Open the card panel if we are viewing the tweets
		if (tabNumber >= 1 && tabNumber <= 3 && this.state.twitter.tweets.length > 0) {
		    $('.card-content').animate({height: 500}, 200);
        } else {
		    $('.card-content').animate({height: 220}, 200);
        }

		this.setState({selectedTab: tabNumber});
	}

	/**
     * Function that is executed when the handle name
     * in the input form is changed
     *
     * @param handle {string}: The handle name
     */
    onHandleChanged(handle) {
        const tweets = this.state.twitter.tweets;
        this.setState({twitter: {handle: handle,
                                 tweets: tweets}});
    }

    /**
     * Fetches a list of tweets made by a user with the provided handle
     *
     * @param handle {string}: The handle of a user to fetch tweets from
     * @param numTweets {number}: The number of tweets to fetch (if undefined, results to 20)
     */
    fetchTweets(handle, numTweets) {

        /**
         * Partitions an array into fixed-size slices
         *
         * @param arr {number}: The array to be partitioned
         * @param size {number}: The number of elements in each array slice
         *
         * @returns {Array}: An partitioned array containing slices of length `size`
         */
        function chunkArrayInGroups(arr, size) {
            let myArray = [];
            for (let i = 0; i < arr.length; i += size) {
                myArray.push(arr.slice(i, i+size));
            }
            return myArray;
        }

        // Clear the previous tweets
        this.setState({twitter: {handle: handle, tweets: []}});
        $('.card-content').animate({height: 220}, 200);

        // Show progress bar when request is sent
        $('#progress').removeClass('hide');
        $('.body-label h4').addClass('hide');

        let urlString = `/api/user/${handle}`;
        urlString = numTweets ? urlString + `?numTweets=${numTweets}` : urlString;

        console.log("Fetching tweets...");

        $.get(urlString, (data) => {

            const statusCode = data['status'];
            console.log("Found tweets...");

            // Hide the progress bar after data comes back
            $('#progress').addClass('hide');
            $('.body-label h4').removeClass('hide');

            /* Show an error modal if the request was unsuccessful */
            if (statusCode != 200) {
                swal('Oh no!',
                     `<h2>${data['message']}</h2>`,
                     'error');
            } else {
                this.setState({twitter: {handle: handle,
                                         tweets: chunkArrayInGroups(data['response'], 2)}});
                console.log("state updated!");


            }

        })
    }

    /**
     * Runs a microservice analyzer over a given piece of text data
     *
     * @param text: The text contained in the tweet
     */
    analyzeTweet(text) {

        // Hardcoding is bad, we know. If there was more time we'd implement a dynamic
        // way of determining the proper microservice endpoint
        let urlString = "http://localhost:5000/1.0/analyze/text";

        $.ajax({
          method: "POST",
          url: urlString,
          data: JSON.stringify(text),
          dataType: 'json',
          contentType: 'application/json'
        }).done(function(data) {
            console.log(data);
            const keywords = data['keywords'].length > 0 ? `<h2>The following keywords were found: ${data['keywords']}</h2>` : `<h2>There were no interesting keywords found.</h2>`
            swal('Done!',
                 `<h2>The CLV for this tweet is: ${data['clv']}</h2><br />${keywords}`,
                 'success');
        });
    }
}

export default Container;