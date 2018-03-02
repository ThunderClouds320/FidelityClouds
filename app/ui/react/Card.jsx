import React from 'react';

/**
 * A card panel on the DOM showing user data
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerContent = this.props.headerContent;
        const bodyContent = this.props.bodyContent;

        return (
            <div className="column">
                <div className="section">
                  <div className="card">
                    <div className="card-header">
                        {headerContent}
                    </div>
                    <div className="card-content">
                        {bodyContent}
                    </div>
                  </div>
                  <br />
                </div>
            </div>
        )
    }
}

export default Card;