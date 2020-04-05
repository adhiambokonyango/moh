import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTravelDescription, registerTravelDescription} from "../../store/modules/travel_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllTravel} from "../../store/modules/travel/actions";
import Select from "react-select";


class TravelDescription extends Component {

    state = {
        travelDescription:'',
        selectedOption: '',
        selectOptions: [],

        tableData: [],
        tableHeaders: {
            TravelDescriptionId:'#',
            TravelDescription:'TravelDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTravel();
        this.props.fetchAllTravelDescription();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredTravel !== prevProps.registeredTravel) {
            if(this.props.registeredTravel.length > 0) {
                let allregisteredTravel = this.props.registeredTravel;

                allregisteredTravel = allregisteredTravel.map(item => {
                    return {
                        label: item.TravelTitle,
                        value: item.TravelId
                    };
                });
                this.setState({ selectOptions: allregisteredTravel });
            }
        }
    };



    handleChange = event => {
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState({
            ...newState
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const payload = {
            TravelId:this.state.selectedOption.value,
            TravelDescription:this.state.travelDescription
        };

        this.props.registerTravelDescription(payload);
        this.setState({travelDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register TravelDescription</h3>
                    </div>
                    <div className="panel-body">
                        <form
                            action=""
                            method="POST"
                            onSubmit={this.handleSubmit}
                            encType="multipart/form-data"
                        >
                            <fieldset>

                                <div className="form-group">
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        placeholder="Select Title"
                                        name="selectedOption"
                                        closeMenuOnSelect={true}
                                        value={this.state.selectedOption}
                                        onChange={value =>
                                            this.setState({
                                                ...this.state,
                                                selectedOption: value
                                            })
                                        }
                                        options={this.state.selectOptions}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        name="travelDescription"
                                        className="form-control"
                                        placeholder="travelDescription"
                                        value={this.state.travelDescription}
                                        type="text"
                                        onChange={this.handleChange}
                                        autoFocus
                                        required={true}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-success btn-block"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <Table tableTitle='Registered travelDescription'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTravelDescription}/>
            </div>
        );
    }
}


TravelDescription.propTypes = {
    registerTravelDescription: PropTypes.func.isRequired,
    travelDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTravelDescription: PropTypes.func.isRequired,
    registeredTravelDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllTravel: PropTypes.func.isRequired,
    registeredTravel: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    travelDescriptionSuccessFullyRegistered: state.travel_description.travelDescriptionSuccessFullyRegistered,
    registeredTravelDescription: state.travel_description.registeredTravelDescription,
    registeredTravel: state.travel.registeredTravel
});



const mapDispatchToProps = dispatch => ({
    registerTravelDescription: payload => dispatch(registerTravelDescription(payload)),
    fetchAllTravelDescription: () => dispatch(fetchAllTravelDescription()),
    fetchAllTravel: () => dispatch(fetchAllTravel())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelDescription);