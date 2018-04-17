import React from 'react';
import swal from 'sweetalert2'

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

		// State template
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
                          fetchTweets={this.fetchTweets}/>
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
		this.setState({selectedTab: tabNumber});
	}

	/**
     * Function that is executed when the handle name
     * in the input form is changed
     *
     * @param handle (string): The handle name
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



        // Clear the previous tweets
        this.setState({twitter: {handle: handle, tweets: []}});
        $('.card-content').animate({height: 220}, 200);

        // Show progress bar when request is sent
        $('#progress').removeClass('hide');

        let urlString = `/api/user/${handle}`;
        urlString = numTweets ? urlString + `?numTweets=${numTweets}` : urlString;

        console.log("Fetching tweets...");

        $.get(urlString, (data) => {
            const statusCode = data['status'];
            console.log("Found tweets...");

            // Hide the progress bar after data comes back
            $('#progress').addClass('hide');

            if (statusCode != 200) {
                swal(
                  'Oh no!',
                  `<h2>${data['message']}</h2>`,
                  'error'
                )
            } else {

                // Partition the tweets

                function chunkArrayInGroups(arr, size) {
                    let myArray = [];
                    for(let i = 0; i < arr.length; i += size) {
                        myArray.push(arr.slice(i, i+size));
                    }
                    return myArray;
                }

                this.setState({twitter: {handle: handle,
                                         tweets: chunkArrayInGroups(data['response'], 2)}});
                console.log("state updated!");

                $('.card-content').animate({height: 500}, 200);
            }

        })
    }
}

export default Container;