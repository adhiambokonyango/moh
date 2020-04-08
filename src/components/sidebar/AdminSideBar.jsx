import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { FaCogs, FaCog, FaSearch, FaList } from "react-icons/fa";
import {
    DISPLAY_CHILDREN_TIPS_PAGE,
    DISPLAY_CHILDREN_TIPS_DESCRIPTIONS_PAGE,
    DISPLAY_MEASURE_PAGE,
    DISPLAY_MEASUREDESCRIPTION_PAGE,
    DISPLAY_MYTHS_PAGE,
    DISPLAY_MYTHSDESCRIPTION_PAGE,
    DISPLAY_PREVENTION_PAGE,
    DISPLAY_PREVENTIONDESCRIPTION_PAGE,
    DISPLAY_QUESTION_PAGE,
    DISPLAY_QUESTIONDESCRIPTION_PAGE,
    DISPLAY_SCAM_PAGE,
    DISPLAY_SCAMDESCRIPTION_PAGE,
    DISPLAY_STRESSCOPING_PAGE,
    DISPLAY_STRESSCOPINGDESCRIPTION_PAGE,
    DISPLAY_SYMPTOM_PAGE,
    DISPLAY_SYMPTOMDESCRIPTION_PAGE,
    DISPLAY_TESTING_PAGE,
    DISPLAY_TESTINGDESCRIPTION_PAGE,
    DISPLAY_TRAVEL_PAGE,
    DISPLAY_TRAVELDESCRIPTION_PAGE,
    DISPLAY_TREATMENT_PAGE,
    DISPLAY_TREATMENTDESCRIPTION_PAGE, DISPLAY_COUNTY_PAGE
} from "../../config/constants/Constants";

import './AdminSideBar.scss';

class AdminSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      brandDropdownCollapsed: true,
      samplePagesCollapsed: true
    };


  }



  render() {
    return (
      <div className="navbar-default sidebar side-bar__main-body" role="navigation">
        <button
          className="navbar-toggle"
          type="button"
          data-toggle="colapse"
          data-target=".navbar-colapse"
        />
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <div className="input-group custom-search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <FaSearch />
                  </button>
                </span>
              </div>
            </li>

            <li className="list-class">
              <a
                href=""
                className="side-bar__anchor-text"
                onClick={e => {
                  e.preventDefault();
                  this.props.handleSideBarClicked(DISPLAY_CHILDREN_TIPS_PAGE);
                }}
              >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Children Tips
              </a>
            </li>


              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_CHILDREN_TIPS_DESCRIPTIONS_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Children Tips Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_MEASURE_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Measure
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_MEASUREDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Measure Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_MYTHS_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Myths
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_MYTHSDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Myths Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_PREVENTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Prevention
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_PREVENTIONDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Prevention Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_QUESTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Questions
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_QUESTIONDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Questions Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_SCAM_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Scam
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_SCAMDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Scam Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_STRESSCOPING_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Stress Coping
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_STRESSCOPINGDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Stress Coping Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_SYMPTOM_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Symptom
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_SYMPTOMDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Symptom Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TESTING_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Testing
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TESTINGDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Testing Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TRAVEL_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Travel
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TRAVELDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Travel Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TREATMENT_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Treatment
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_TREATMENTDESCRIPTION_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Treatment Description
                  </a>
              </li>

              <li className="list-class">
                  <a
                      href=""
                      className="side-bar__anchor-text"
                      onClick={e => {
                          e.preventDefault();
                          this.props.handleSideBarClicked(DISPLAY_COUNTY_PAGE);
                      }}
                  >
                      <i className="fa fa-dashboard fa-fw" /> &nbsp;Counties
                  </a>
              </li>







          </ul>
        </div>
      </div>
    );
  }
}

AdminSideBar.propTypes = {
  handleSideBarClicked: PropTypes.func.isRequired
};

export default withRouter(AdminSideBar);
