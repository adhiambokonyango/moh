import React, { Component } from "react";

import PropTypes from "prop-types";
import "./TopBar.scss";

class TopBar extends Component {

  render() {
    return (
      <div className="top-bar">
        <div className="topbar__close-icon-div">
          <i
            className="fa fa-edit fa-fw topbar__power-icon"
            onClick={() => {
              this.props.handleEditIconClicked();
            }}
          />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  handleEditIconClicked: PropTypes.func.isRequired,
};

TopBar.defaultProps = {
    handleEditIconClicked: ()=>{}
};


export default TopBar;
