import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChildrenTips from "../../views/children_tips/ChildrenTips";
import AdminSideBar from "../sidebar/AdminSideBar";
import {
    DISPLAY_CHILDREN_TIPS_DESCRIPTIONS_PAGE,
    DISPLAY_CHILDREN_TIPS_PAGE, DISPLAY_COUNTY_PAGE, DISPLAY_COUNTYDESCRIPTION_PAGE,
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
    DISPLAY_TRAVEL_PAGE, DISPLAY_TRAVELDESCRIPTION_PAGE, DISPLAY_TREATMENT_PAGE, DISPLAY_TREATMENTDESCRIPTION_PAGE
} from "../../config/constants/Constants";

class Moh extends Component {


    handleSideBareItemClicked = (clickedItem) =>{
        if(clickedItem === DISPLAY_CHILDREN_TIPS_PAGE) {
            this.props.history.push('/childrenTips');
        } else if(clickedItem === DISPLAY_CHILDREN_TIPS_DESCRIPTIONS_PAGE) {
            this.props.history.push('/childrenTipsDescription');
        } else if(clickedItem === DISPLAY_MEASURE_PAGE) {
            this.props.history.push('/measure');
        } else if(clickedItem === DISPLAY_MEASUREDESCRIPTION_PAGE) {
            this.props.history.push('/measureDescription');
        } else if(clickedItem === DISPLAY_MYTHS_PAGE) {
            this.props.history.push('/myths');
        } else if(clickedItem === DISPLAY_MYTHSDESCRIPTION_PAGE) {
            this.props.history.push('/mythsDescription');
        } else if(clickedItem === DISPLAY_PREVENTION_PAGE) {
            this.props.history.push('/preventions');
        } else if(clickedItem === DISPLAY_PREVENTIONDESCRIPTION_PAGE) {
            this.props.history.push('/preventionDescription');
        } else if(clickedItem === DISPLAY_QUESTION_PAGE) {
            this.props.history.push('/questions');
        } else if(clickedItem === DISPLAY_QUESTIONDESCRIPTION_PAGE) {
            this.props.history.push('/questionDescription');
        } else if(clickedItem === DISPLAY_SCAM_PAGE) {
            this.props.history.push('/scam');
        } else if(clickedItem === DISPLAY_SCAMDESCRIPTION_PAGE) {
            this.props.history.push('/scamDescription');
        } else if(clickedItem === DISPLAY_STRESSCOPING_PAGE) {
            this.props.history.push('/stressCoping');
        } else if(clickedItem === DISPLAY_STRESSCOPINGDESCRIPTION_PAGE) {
            this.props.history.push('/stressCopingDescription');
        } else if(clickedItem === DISPLAY_SYMPTOM_PAGE) {
            this.props.history.push('/symptoms');
        } else if(clickedItem === DISPLAY_SYMPTOMDESCRIPTION_PAGE) {
            this.props.history.push('/symptomDescription');
        } else if(clickedItem === DISPLAY_TESTING_PAGE) {
            this.props.history.push('/testing');
        } else if(clickedItem === DISPLAY_TESTINGDESCRIPTION_PAGE) {
            this.props.history.push('/testingDescription');
        } else if(clickedItem === DISPLAY_TRAVEL_PAGE) {
            this.props.history.push('/travel');
        } else if(clickedItem === DISPLAY_TRAVELDESCRIPTION_PAGE) {
            this.props.history.push('/travelDescription');
        } else if(clickedItem === DISPLAY_TREATMENT_PAGE) {
            this.props.history.push('/treatment');
        } else if(clickedItem === DISPLAY_TREATMENTDESCRIPTION_PAGE) {
            this.props.history.push('/treatmentDescription');
        } else if(clickedItem === DISPLAY_COUNTY_PAGE) {
            this.props.history.push('/county');
        }
    };


    render() {
        return (
            <div>
                <AdminSideBar handleSideBarClicked={this.handleSideBareItemClicked}/>
            </div>
        );
    }
};

export default Moh
