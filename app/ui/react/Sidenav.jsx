import React from 'react';

/**
 * The Sidenav component on the left of the page
 */
class Sidenav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Navigation</p>
            <ul className="menu-list">
              <li>
                <a href="#" id="tab-0" className="is-active" onClick={() => this.props.onTabClicked(0)}>
                  <span className="icon"><i className="fa fa-home"></i></span> Home
                </a>
              </li>
              <li>
                <a href="#" id="tab-1" onClick={() => this.props.onTabClicked(1)}>
                  <span className="icon"><i className="fa fa-table"></i></span> Microservices
                </a>

                <ul>
                  <li>
                    <a href="#" id="tab-2" onClick={() => this.props.onTabClicked(2)}>
                      <span className="icon is-small"><i className="fa fa-link"></i></span> If-Else Engine
                    </a>
                  </li>
                  <li>
                    {/*<a href="#" id="tab-3" onClick={() => this.props.onTabClicked(3)}>*/}
                      {/*<span className="icon is-small"><i className="fa fa-link"></i></span> Switch-em*/}
                    {/*</a>*/}
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" id="tab-4" onClick={() => this.props.onTabClicked(4)}>
                  <span className="icon"><i className="fa fa-info"></i></span> Lifetime Value
                </a>
              </li>
            </ul>
            </aside>
        )
    }
}

export default Sidenav;