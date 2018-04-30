import React from 'react';

/**
 * A card panel on the DOM showing IfElseEngine output/config
 */
class IfElseCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {dropdown: false,
                      numberLabel: "20 Tweets",
                      numTweets: 20};
    }

    render() {
        const headerLabel = this.props.headerLabel;
        const bodyLabel = this.props.bodyLabel;

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
                              <h4 className="handle-prefix">{bodyLabel}</h4>
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

export default IfElseCard;