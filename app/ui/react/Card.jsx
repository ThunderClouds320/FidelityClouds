import React from 'react';

/**
 * A card panel on the DOM showing user data
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerLabel = this.props.headerLabel;
        const handle = this.props.twitter.handle;

        const handleChanged = this.props.onHandleChanged;
        const fetchTweets = this.props.fetchTweets;

        return (
            <div className="column">
                <div className="section">
                  <div className="card">
                    <div className="card-header">
                        <p className="card-header-title">{headerLabel}</p>
                    </div>
                    <div className="card-content">
                      <div className="content">
                          <div className="control">
                              <h4 className="handle-prefix">@</h4>
                              <input className="input" id="handle-input" type="text" placeholder=""
                                     defaultValue={handle} onChange={() => handleChanged($("#handle-input").val())} />
                              <input className="button" type="submit" value="Begin" onClick={() => fetchTweets(handle)} />
                          </div>
                          <div className="tweets">
                              {this.props.tweets}
                          </div>
                      </div>
                    </div>
                  <br />
                  </div>
                </div>
            </div>
        )
    }
}

export default Card;